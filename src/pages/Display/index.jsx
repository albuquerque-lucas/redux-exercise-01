import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import './styles/style.css';

class Display extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <section className='body display-container'>
                    <h1>Display dos objetos criados</h1>
                </section>
            </div>
        );
    }
}

export default connect()(Display);