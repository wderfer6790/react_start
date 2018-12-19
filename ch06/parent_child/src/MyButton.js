import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyButton extends Component {

    /**
     * 화살표 함수로 만들어서 컴포넌트 this를 바로 사용
     */
    render() {
        console.log("### MyButton Render");
        return (
            <button className="btn btn-primary" onClick={() => this.props.addItem()}>
                Add Item
            </button>
        );
    }
}

MyButton.PropTypes = {
    addItem : PropTypes.f