import React, {useState, useEffect} from 'react';
import {Link, withRouter} from 'react-router-dom';
import ExploreIcon from '@material-ui/icons/ExploreRounded';
import DashboardIcon from '@material-ui/icons/HomeRounded';
import AddIcon from '@material-ui/icons/AddRounded';
import HistoryIcon from '@material-ui/icons/AttachMoneyRounded';
import PublicIcon from '@material-ui/icons/FaceRounded';
import './Navigation.scss';

const Navigation = ({add, toggleAdd, history}) => {
    const [tab, setTab] = useState(history.location.pathname);

    useEffect(() => {
        setTab(history.location.pathname);
    }, [history.location.pathname]);

    const isTab = path => (path === tab ? ' selected' : '');

    return (
        <nav>
            <Link to='/dash'>
                <div className={'icon' + isTab('/dash')}>
                    <DashboardIcon />
                    <p className="label">home</p>
                </div>
            </Link>
            <Link to='/history'>
                <div className={'icon' + isTab('/history')}>
                    <HistoryIcon />
                    <p className="label">history</p>
                </div>
            </Link>
            <div onClick={toggleAdd}>
                <div className={'add-icon' + (add ? ' selected' : '')}>
                    <AddIcon style={{ fontSize: 50 }}/>
                </div>
            </div>
            <Link to='/feed'>
                <div className={'icon' + isTab('/feed')}>
                    <ExploreIcon />
                    <p className="label">feed</p>
                </div>
            </Link>

            <Link to='/blog'>
                <div className={'icon' + isTab('/blog')}>
                    <PublicIcon />
                    <p className="label">blog</p>
                </div>
            </Link>
        </nav>
    );
}

export default withRouter(Navigation);