/**
 * Created by jason on 16/7/14.
 */
import React from 'react';
import {connect} from 'react-redux';
import Class from '../pages/Class';

class ClassContainer extends React.Component {
    render() {
        return (
            <Class {...this.props} />
        )
    }
}

export default connect((state) => {
    
    const { Class } = state;
    return {
        Class
    }
})(ClassContainer);