import React, { useState, useEffect, useContext } from 'react';
import CloseButton from '@material-ui/icons/Cancel';
import HelpButton from '@material-ui/icons/HelpOutlineOutlined';
import { useTranslation } from 'react-i18next';
import { Modal, TextInput } from '../../';
import { logout, database } from '../../../libs/firestore';
import {
	setTheme,
	getTheme,
	THEME_SELECT_OPTIONS,
} from '../../../components/globals/theme';
import Select from 'react-select';
import AuthUserContext from '../../../controller/contexts/AuthUserContext';
import './User.scss';
import 'react-toggle/style.css';

/**
 * @NOTE previous bad choice of naming for using 'public' as a state key which has to now
 * be changed to sharing because public is a js keyword. Might be a little bit dangerous to
 * try and convert a singular value on the firebase so I'm going to keep the database value
 * different from stored value.
 */
const User = ({ open, setOpen }) => {
	const { t } = useTranslation();
	const [authUser, setAuthUser] = useContext(AuthUserContext);
	const [budget, setBudget] = useState(
		(authUser.profile.budget ?? 10000) / 100
	);
	const [limit, setLimit] = useState(authUser.profile.limit ?? 15);
	const [sharing, setSharing] = useState(authUser.profile.sharing ?? false);
	const [help, setHelp] = useState(false);

	useEffect(() => {
		setBudget(authUser.profile.budget / 100);
		setLimit(authUser.profile.limit);
		setSharing(authUser.profile.sharing);
	}, [open, authUser]);
	const handleChange = setUserInfo => event => {
		setUserInfo(event.target.value);
	};
	const updateFirebase = () => {
		let data = {
			budget: parseInt(parseFloat(budget) * 100),
			limit: parseInt(limit),
			sharing: sharing,
		};
		database
			.collection(`users/${authUser.uid}/user`)
			.doc('profile')
			.set(data)
			.then(() => {
				setAuthUser(state => ({ ...state, profile: data }));
				close();
			});
	};
	const themeSelect = ({ value }) => {
		setTheme(value);
	};
	const close = () => {
		setOpen(false);
	};
	return (
		<React.Fragment>
			<Modal open={open} setOpen={setOpen}>
				<div className='user-modal'>
					<img
						src={authUser.photoURL}
						className='avatar'
						alt='user'
					/>
					<button className='close-button' onClick={close}>
						<CloseButton />
					</button>
					<button
						className='help-button'
						onClick={() => {
							setHelp(!help);
						}}
					>
						<HelpButton />
					</button>

					<h1>{t('User Settings')}</h1>
					<TextInput
						id='monthly-spending-input'
						type='tel'
						pattern='^-?[0-9]\d*\.?\d*$'
						className='input'
						variant='outlined'
						margin='normal'
						onChange={handleChange(setBudget)}
						value={budget}
						label={t('Monthly Spending Limit')}
					/>
					<TextInput
						id='monthly-drinking-limit'
						type='tel'
						pattern='^-?[0-9]\d*\.?\d*$'
						className='input'
						margin='dense'
						variant='outlined'
						onChange={handleChange(setLimit)}
						value={limit}
						label={t('Max of drinks / month')}
					/>

					<label className='theme-label'>Theme:</label>
					<Select
						options={THEME_SELECT_OPTIONS}
						defaultValue={THEME_SELECT_OPTIONS[getTheme()]}
						name='theme'
						onChange={themeSelect}
						className='theme-select'
					/>

					<div className='button-holder'>
						<button className='logout text' onClick={logout}>
							{t('LOGOUT')}
						</button>
						<button className='update' onClick={updateFirebase}>
							{t('UPDATE')}
						</button>
					</div>
				</div>
			</Modal>
		</React.Fragment>
	);
};

export default User;
