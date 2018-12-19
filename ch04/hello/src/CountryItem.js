import React, { Component } from 'react';
import styles from "./styles";

class CountryItem extends Component {
    render() {
        /*
        let item = this.props.country;
        return (
            <li className={item.visited ? "list-group-item active" : "list-group-item"} >
                {item.country}
            </li>
        );
        */
       return (
            <li style={styles.listItemStyle} className={this.props.visited ? "list-group-item active" : "list-group-item"} >
                {this.props.country}
            </li>
        );
    }
}

export default CountryItem;