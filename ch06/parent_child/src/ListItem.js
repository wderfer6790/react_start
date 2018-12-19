import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component {
    /**
     * 렌더링 최적화
     * 
     * 상태와 인덱스가 다를 경우에만 리렌더
     * 
     * @param {*} nextProps 
     * @param {*} nextState 
     */
    shouldComponentUpdate (nextProps, nextState) {
        return this.props.no !== nextProps.no || this.props.item !== nextProps.item;
    }
    
    render()