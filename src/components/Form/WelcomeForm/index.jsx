import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { changeHomePhaseAction } from '../../../redux/reducers/PhaseReducer/actions';

class WelcomeForm extends React.Component {
    changePhase = () => {
        const { dispatch } = this.props;
        dispatch(changeHomePhaseAction());
    };
    render() {
        const { mode } = this.props;
        const { theme } = mode;
        return (
            <form className={`welcome-form welcome-form-${theme}`}>
                <label htmlFor="name">Nome</label>
                <input type="text" id='name' />
                <label htmlFor="last-name">Sobrenome</label>
                <input type="text" id='last-name' />
                <label htmlFor="age">Idade</label>
                <input type="number" id='age' />
                <button onClick={this.changePhase}>Cancelar</button>
                <button>Próximo</button>
            </form>
        );
    }
}

WelcomeForm.propTypes = {
    mode: PropTypes.shape({
        theme: PropTypes.string.isRequired,
    }).isRequired,
    phase: PropTypes.shape({
        homePhase: PropTypes.bool.isRequired,
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    mode: state.theme,
    phase: state.phase,
});

export default compose(connect(mapStateToProps)(WelcomeForm));