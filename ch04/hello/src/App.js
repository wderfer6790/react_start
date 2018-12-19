import React, { Component } from 'react';
import Title from "./Title";
import CountryList from "./CountryList";
import styles from "./styles";
import Footer from "./footer"

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            msg : "world",
            list : [
                { no:1, country:'이집트', visited:false },
                { no:2, country:'일본',  visited:true },
                { no:3, country:'피지', visited:false },
                { no:4, country:'콜롬비아', visited:false }
            ]
        };
    }
    
    createString(x,y) {
        return (<div className="well">{x} + {y} = {x+y}</div>);
    }
    
    render() {
        let data = {title:"컴포넌트 프롭스"};
        return (
            <div className="container">
                <h1>hello {this.state.msg}</h1>
                <hr style={styles.dashStyle} />
                {this.createString(4,5)}
                <Title title={data.title} />
                <CountryList countries={this.state.list} />
                <Footer/>
            </div>
        );
    }
}

export default App;