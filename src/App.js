import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/';
import Create from './pages/Create';
import Display from './pages/Display';
import './App.css';
class App extends React.Component {
    render(){
        const { mode } = this.props;
        const { theme } = mode;
        return (
            <main className={`App ${theme}`}>
                <Routes>
                    <Route exact path='/' element={ <Home /> } />
                    <Route exact path='/create' element={ <Create /> } />
                    <Route exact path='/display' element={ <Display /> } />
                </Routes>
            </main>
        );
    }

}

App.propTypes = {
    mode: PropTypes.shape({
        theme: PropTypes.string.isRequired,
    }).isRequired,
};

const mapStateToProps = (state) => ({
    mode: state.theme,
});

export default connect(mapStateToProps)(App);
