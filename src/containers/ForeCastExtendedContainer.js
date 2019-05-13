import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ForeCastExtended from '../components/ForecastExtended';

class ForeCastExtendedContainer extends Component {
    render() {
        return (
            this.props.city ?
            <ForeCastExtended city={this.props.city}/> : <h1>No se seleccionó ciudad</h1>
        );
    }
}

ForeCastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
};

const mapStateToProps = ({ city }) => ({ city });

export default connect(mapStateToProps,null)(ForeCastExtendedContainer);