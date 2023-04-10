import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import Form from '../../components/Form';
import './styles/style.css';

class Home extends React.Component {
    render() {
        const { mode, phase } = this.props;
        const { theme } = mode;
        const { homePhase } = phase;
        console.log(homePhase);
        console.log(this.props);
        return (
            homePhase === false ?
                <div>
                    <Header/>
                    <section className='body home-start-container'>
                        <h1>Seja bem vindo!</h1>
                        <h2>Deseja testar a aplicação e adicionar uma carta?</h2>
                        <button className={`button button-${theme}`} to='/create'>Começar</button>
                    </section>
                </div>

                :
                <div>
                    <Header/>
                    <section className='body home-start-container'>
                        <Form formType='welcome-form' />
                    </section>
                </div>

        );
    }

    
}

Home.propTypes = {
    mode: PropTypes.shape({
        theme: PropTypes.string.isRequired,
    }).isRequired,
    phase: PropTypes.shape({
        homePhase: PropTypes.bool.isRequired,
    }).isRequired,
};

const mapStateToProps = (state) => ({
    mode: state.theme,
    phase: state.phase,
});

export default compose(connect(mapStateToProps)(Home));