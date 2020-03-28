import backend from './backend';
import stats from './calculateStatistics';
import Swal from 'sweetalert2';
import i18next from 'i18next';

const add = async(data, setDrinkids) => {
    try{
        let firebaseAddAction = await backend.drinks.add(data);     //add drink to firebase
        let firebaseReturnedResult = await firebaseAddAction.get(); //get drink + generated id
        let drink = {
            id: firebaseReturnedResult.id,
            ...firebaseReturnedResult.data().drink
        };
        return success(drink, setDrinkids);
    }catch(err){
        return error(err);
    }
}

const edit = async(data, id, setDrinkids) => {
    try{
        await backend.drinks.update(data, id);                                 //updates drink on firebase
        stats.deleteDrink(id, backend.get.currentUser.drinkids);
        return success({id: id, ...data.drink}, setDrinkids);
    }catch(err){
        return error(err);
    }
}

const success = (drink, setDrinkids) => {
    stats.addDrink(drink, drink.id,backend.get.currentUser.drinkids);    //recalculate stats and insert in drinkids sorted
    backend.user.updateStats();                                         //update stats on firebase
    localStorage.setItem('user', JSON.stringify(backend.get.currentUser));      //save new drinksid
    Swal.fire(i18next.t('Done!'), i18next.t('Drink added'), 'success');               //let user know 
    setDrinkids(backend.get.currentUser.drinkids);
    return true;
}
const error = (err) => {
    Swal.fire(i18next.t('Oops...!'), i18next.t('Something went wrong'), 'error');     //let user know 
    console.error(err);
    return false;
}

export {
    add,
    edit
}