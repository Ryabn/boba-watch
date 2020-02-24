import React from 'react';
import {Link} from 'react-router-dom';
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/BarChart';
import AddIcon from '@material-ui/icons/Add';
import HistoryIcon from '@material-ui/icons/AttachMoney';

const Navigation = ({value, handleChange, toggleAdd}) => {
    return (
        <BottomNavigation value={value} onChange={handleChange} className="bottom-nav">
            <BottomNavigationAction
                label="Dashboard"
                value="dash"
                component={Link}
                to="/dash"
                icon={<DashboardIcon />}
            />
            <BottomNavigationAction
                value="add"
                disableRipple={true}
                onClick={toggleAdd}
                // onClose={this.refocus}
                icon={<div className="center-fab">< AddIcon style={{ fontSize: 50 }}/></div>}
            />
            <BottomNavigationAction
                label="Spending"
                value="history"
                component={Link}
                to="/history"
                icon={<HistoryIcon />}
            />
        </BottomNavigation>
    );
}

export default Navigation;
