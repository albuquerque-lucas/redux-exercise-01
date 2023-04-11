import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { changeThemeAction } from '../../redux/reducers/Dark-Light-Mode/actions';
import './styles/style.css';

library.add(faSun, faMoon);
class Header extends React.Component {
    handleClick = () => {
        const { dispatch } = this.props;
        dispatch(changeThemeAction());
    };
    render() {
        const { mode } = this.props;
        const { theme } = mode;
        return (
            <header className={`header header-${theme}`}>
                <h1><Link to='/' className={`list-item item-${theme}`}>Test App</Link></h1>
                <nav className='navbar'>
                    <ul>
                        <li><Link to='/' className={`list-item item-${theme}`}>Home</Link></li>
                        <li><Link to='/create' className={`list-item item-${theme}`}>Create</Link></li>
                        <li><Link to='/display' className={`list-item item-${theme}`}>Display</Link></li>
                        <li><Link to='/data-display' className={`list-item item-${theme}`}>API</Link></li>
                        <li onClick={this.handleClick}>Tema <FontAwesomeIcon icon={ theme === 'light' ? faMoon : faSun } /></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

Header.propTypes = {
    dispatch: PropTypes.func.isRequired,
    mode: PropTypes.shape({
        theme: PropTypes.string.isRequired,
    }).isRequired,
};

const mapStateToProps = (state) => ({
    mode: state.theme,
});

export default connect(mapStateToProps)(Header);