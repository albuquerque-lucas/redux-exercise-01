import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import Form from '../../components/Form';
import './styles/style.css';

class Create extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <section className='body create-container'>
                    <h1>Adicionar elementos</h1>
                    <div className="form-container">
                        <Form formType='create-form' />
                    </div>

                </section>
            </div>

        );
    }
}

export default connect()(Create);