import React, { Component } from 'react';
import {connect} from 'react-redux'
import{Link } from 'react-router-dom'
class AcountInfo extends Component {
    render() {
        const { user } = this.props;


        return (
            <div>
                <h1>AcountInfo</h1>
                {user && <p> you are logged in as : <strong>{user.name}</strong>
                </p>}
                {!user && <p>you must login! <Link to= "/"> log in </Link> </p> }
               
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