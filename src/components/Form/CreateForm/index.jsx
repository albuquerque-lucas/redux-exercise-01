import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CreateForm extends React.Component {
    render() {
        const { mode } = this.props;
        const { theme } = mode;
        console.log(theme);
        return (
            <form className={`create-form create-form-${theme}`}>
                <label htmlFor="title">Título</label>
                <input type="text" id='title' />
                <label htmlFor="category">Categoria</label>
                <select id="category">
                    <option value="primeira">Primeira</option>
                    <option value="segunda">Segunda</option>
                    <option value="terceira">Terceira</option>
                </select>
                <label htmlFor="description">Descrição</label>
                <textarea id="description" placeholder='Descrição aqui'></textarea>
                <button className={`button-${theme}`}>Adicionar</button>
            </form>
        );
    }
}

CreateForm.propTypes = {
    mode: PropTypes.shape({
        theme: PropTypes.string.isRequired,
    }).isRequired,
};

const mapStateToProps = (state) => ({
    mode: state.theme,
});

export default connect(mapStateToProps)(CreateForm);