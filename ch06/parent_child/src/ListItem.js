import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Logger from "./Logger";

class ListItem extends PureComponent {
    /**
     * 렌더링 최적화
     * 상태와 인덱스가 다를 경우에만 리렌더
     * 
     * @param {*} nextProps 새 속성값 
     * @param {*} nextState 새 상태값
     */
    /* shouldComponentUpdate (nextProps, nextState) {
        return this.props.no !== nextProps.no || this.props.item !== nextProps.item;
    } */
    
    render() {
        // console.log("### ListItem Render");
        return (
            <li className="list-group-item list-group-item-success">
                {this.props.no} : {this.props.item}
            </li>
        )
    }
}

ListItem.propTypes = {
    no : PropTypes.number.isRequired,
    item : PropTypes.string.isRequired
};
// 고차 컴포넌트를 통한 로깅 추가
export default Logger(ListItem);
