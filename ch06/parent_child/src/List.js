import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import Logger from "./Logger";

class List extends Component {
    render() {
        // console.log("### List Render");
        let items = this.props.itemlist.map((item) => {
            return (<ListItem isLog="true" key={new Date().getTime() + item.no} {...item} />)
        });
    
        return (
            <ul className="list-group">
                {items}
            </ul>
        )
    }
}

List.propTypes = {
    itemlist : PropTypes.arrayOf(PropTypes.object)
};
// 고차 컴포넌트를 통한 로깅 추가
export default Logger(List);
