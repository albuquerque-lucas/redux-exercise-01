import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { changeHomePhaseOneAction } from '../../../redux/reducers/PhaseReducer/actions';
import { saveUserDataAction } from '../../../redux/reducers/WelcomeDataReducer/actions';

class WelcomeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userFirstName: '',
            userLastName: '',
            age: 0,
        };
    }
    changePhase = () => {
        const { dispatch } = this.props;
        dispatch(changeHomePhaseOneAction());
    };

    submitForm = (event) => {
        event.preventDefault();
        const { userFirstName, userLastName, age } = this.state;
        const { dispatch } = this.props;
        dispatch(saveUserDataAction(userFirstName, userLastName, age));
    };

    onInputChange = ({ target }) => {
        const value = target.value;
        const { id } = target;
        this.setState({ [id]: value });
    };
    render() {
        const { userFirstName, userLastName, age } = this.state;
        const { themes } = this.props;
        const { theme } = themes;
        return (
            <form className={`welcome-form welcome-form-${theme}`} onSubmit={this.submitForm}>
                <label htmlFor="name">Nome</label>
                <input
                    type="text"
                    id='userFirstName'
                    value={userFirstName}
                    onChange={this.onInputChange}/>
                <label htmlFor="last-name">Sobrenome</label>
                <input
                    type="text"
                    id='userLastName'
                    value={userLastName}
                    onChange={this.onInputChange}/>
                <label htmlFor="age">Idade</label>
                <input
                    type="number"
                    id='age' value={age}
                    onChange={this.onInputChange}
                />
                <div className="button-container">
                    <button className={`button-${theme}`}>Próximo</button>
                    <button onClick={this.changePhase} className={`button-${theme}`}>Cancelar</button>
                </div>

            </form>
        );
    }
}

WelcomeForm.propTypes = {
    themes: PropTypes.shape({
        theme: PropTypes.string.isRequired,
    }).isRequired,
    phase: PropTypes.shape({
        homePhase: PropTypes.bool.isRequired,
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    themes: state.theme,
    phase: state.phase,
});

export default compose(connect(mapStateToProps)(WelcomeForm));