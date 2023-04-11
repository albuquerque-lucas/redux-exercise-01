import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './styles/style.css';

class Loading extends React.Component {
    render() {
        const  { themes } = this.props;
        const { theme } = themes;
        return (
            <h3 className={`loading-element loading-${theme}`}>Carregando...</h3>
        );
    }
}

Loading.propTypes = {
    themes: PropTypes.shape({
        theme: PropTypes.string.isRequired,
    }).isRequired,
};

const mapStateToProps = (state) => ({
    themes: state.theme,
});

export default connect(mapStateToProps)(Loading);