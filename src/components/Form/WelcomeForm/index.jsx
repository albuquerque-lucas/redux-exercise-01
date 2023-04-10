import React from 'react';
import { connect } from 'react-redux';

class WelcomeForm extends React.Component {
    render() {
        return (
            <form className='welcome-form'>
                <label htmlFor="name">Nome</label>
                <input type="text" id='name' />
                <label htmlFor="last-name">Sobrenome</label>
                <input type="text" id='last-name' />
                <label htmlFor="age">Idade</label>
                <input type="number" id='age' />
            </form>
        );
    }
}

export default connect()(WelcomeForm);