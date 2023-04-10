import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CreateForm from './CreateForm';
import WelcomeForm from './WelcomeForm';
import './styles/style.css';

class Form extends React.Component {
    render() {
        const { formType } = this.props;
        switch(formType){
        case 'create-form':
            return (<CreateForm />);
        case 'welcome-form':
            return (<WelcomeForm/>);
        default:
            return(<p>Nenhum tipo de formulário foi definido</p>);
        }

    }
}

Form.defaltProps = {
    formType: null,
};

Form.propTypes = {
    formType: PropTypes.string,
};

export default connect()(Form);