import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import './styles/style.css';
import { fetchWizardName } from '../../redux/reducers/WizardReducer/actions';

class DataDisplay extends React.Component {
    render() {
        const { themes, request, image, dispatch } = this.props;
        const { theme } = themes;
        const { isLoading } = request;
        console.log(theme);

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
                            <React.Fragment>
                                <img src={image.imageURL} alt="" />
                                <ul className='api-data-list list-one'>
                                </ul>
                            </React.Fragment>
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
    image: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    themes: state.theme,
    image: state.imageURL,
    request: state.isLoading,
});

export default connect(mapStateToProps)(DataDisplay);