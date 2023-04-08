import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import './styles/style.css';

class Home extends React.Component {
    render() {
        const { mode } = this.props;
        const { theme } = mode;
        return (
            <div>
                <Header/>
                <section className='body home-start-container'>
                    <h1>Seja bem vindo!</h1>
                    <h2>Deseja testar a aplicação e adicionar uma carta?</h2>
                    <Link className={`button button-${theme}`} to='/create'>Começar</Link>
                </section>
            </div>
        );
    }

    
}

Home.propTypes = {
    mode: PropTypes.shape({
        theme: PropTypes.string.isRequired,
    }).isRequired,
};

const mapStateToProps = (state) => ({
    mode: state.theme,
});

export default compose(connect(mapStateToProps)(Home));