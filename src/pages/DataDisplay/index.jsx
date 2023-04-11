import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import './styles/style.css';
import { fetchWizardName } from '../../redux/reducers/WizardReducer/actions';
import { fetchSpellsList } from '../../redux/reducers/SpellsReducer/actions';

class DataDisplay extends React.Component {
    render() {
        const { themes, dispatch, wizardsList, isLoading, spellsList } = this.props;
        const { theme } = themes;
        console.log('Spells: ', spellsList);
        console.log('Wizards: ', wizardsList);

        return (
            <div>
                <Header />
                <section className='body data-display-container'>
                    <h1>Retorno de dados da API</h1>
                    <div className="list-container">
                        <button className={`display-button-${theme}`} onClick={() => dispatch(fetchWizardName())}>Buscar Bruxos</button>
                        <button className={`display-button-${theme}`} onClick={() => dispatch(fetchSpellsList())}>Buscar Magias</button>
                        {isLoading ? (
                            <Loading />
                        ) : (
                            <div className='list-container-group'>
                                <ul className='api-data-list list-one'>
                                    {wizardsList.map((wizard, index) => {
                                        if (index < 26) {
                                            return (
                                                <li className={`list-item-${theme}`} key={wizard.id}>{wizard.name}</li>
                                            );
                                        }
                                    })}
                                </ul>
                                <ul className='api-data-list list-two'>
                                    {spellsList.map((spell, index) => {
                                        if( index < 26) {
                                            return (
                                                <li key={spell.id} className={`list-item-${theme}`}>{spell.name}</li>
                                            );
                                        }
                                    })}
                                </ul>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        );
    }
}

DataDisplay.propTypes = {
    themes: PropTypes.shape({
        theme: PropTypes.string.isRequired,
    }).isRequired,
    wizardsList: PropTypes.array.isRequired,
    spellsList: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    themes: state.theme,
    wizardsList: state.wizardsList.wizardsList,
    isLoading: state.wizardsList.isLoading,
    spellsList: state.spellsList.spells,
});

export default connect(mapStateToProps)(DataDisplay);