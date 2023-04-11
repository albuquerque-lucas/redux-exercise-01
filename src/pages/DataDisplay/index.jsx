import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import './styles/style.css';
import { fetchWizardName } from '../../redux/reducers/WizardReducer/actions';

class DataDisplay extends React.Component {
    render() {
        const { themes, request, list, dispatch } = this.props;
        const { theme } = themes;
        const { wizardsList } = list;
        const { isLoading } = request;
        console.log(theme);
        console.log(wizardsList);

        return (
            <div>
                <Header />
                <section className='body data-display-container'>
                    <h1>Retorno de dados da API</h1>
                    <div className="list-container">
                        <button className={`display-button-${theme}`} onClick={() => dispatch(fetchWizardName())}>Buscar</button>
                        {isLoading ? (
                            <Loading />
                        ) : (
                            <>
                                <ul className='api-data-list list-one'>
                                    {wizardsList.map((wizard, index) => {
                                        if (index < 26) {
                                            return (
                                                <li key={wizard.id} className={`list-item-${theme}`}>{wizard.name}</li>
                                            );
                                        }
                                    })}
                                </ul>
                            </>
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
    request: PropTypes.bool.isRequired,
    list: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    themes: state.theme,
    list: state.wizardsList,
    request: state.isLoading,
});

export default connect(mapStateToProps)(DataDisplay);