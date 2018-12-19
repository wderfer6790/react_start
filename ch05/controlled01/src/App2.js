import React, { Component } from 'react';

/**
 * 비제어 컴포넌트
 * 즉시 반영이 아닌 특정 이벤트를 통한 제어가 필요할 때
 */ 
class App2 extends Component {
    
    constructor(props) {
        super(props);
        this.state = { x : 0, y : 0 };
    }

    add = () => {
        /* 
        옛날 방식
        
       let x = parseInt(this.refs.ix.value);
       let y = parseInt(this.refs.iy.value);

       if (isNaN(x)) x = 0;
       if (isNaN(y)) y = 0;

       this.setState({x : x, y : y});
       */

        let x = parseInt(this.ix.value);
        let y = parseInt(this.iy.value);
        if (isNaN(x)) x = 0;
        if (isNaN(y)) y = 0;

        this.setState({ x : x, y : y });
    }

    // ref 속성을 이용한 값의 참조
    render() {
        return (
        <div>
            X : <input id="x" type="text" ref={(input) => {
                this.ix = input;
            }} defaultValue={ this.state.x } /><br/> 
            Y : <input id="y" type="text" ref={(input) => {
                this.iy = input;
            }} defaultValue={ this.state.y } /><br/>
            <button onClick={ this.add }>덧셈계산</button>
            결과 : <span>{ this.state.x + this.state.y }</span>
        </div>
        );
    }
}

export default App2;
