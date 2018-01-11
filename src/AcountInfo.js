import React, { Component } from 'react';
import {connect} from 'react-redux'

class AcountInfo extends Component {
    render() {
        const { user } = this.props;

        return (
            <div>
                <h1>AcountInfo</h1>
                <div> you are logged in as : <strong>{user.name}</strong></div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps) (AcountInfo);