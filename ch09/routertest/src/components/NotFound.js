import React, { Component } from 'react';

class NotFound extends Component {
    render() {
        return (
            <div>
                <p>NOT FOUND : {this.props.location.pathname}</p>
            </div>
        );
    }
}

export default NotFound;