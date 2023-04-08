import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import './styles/style.css';

class Create extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <section className='body create-container'>
                    <h1>Adicionar elementos</h1>
                </section>
            </div>

        );
    }
}

export default connect()(Create);