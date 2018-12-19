import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * 고차컴포넌트 예제
 * 
 * @param {} LoggingComponent 
 */
let Logger = (LoggingComponent) => {
    return class Logger extends Component {
        constructor(props) {
            super(props);
            if (this.props.isLog) {
                this.start = new Date();    
            }
        }

        componentDidMount() {
            if (this.props.isLog) {
                let ts = new Date().getTime() - this.start.getTime();
                console.log(`### ${this.componentName} mounted : ${ts} ms`);
            }
        }

        shouldComponentUpdate(nextProps, nextState) {
            if (this.props.isLog) {
                this.start = new Date();
            }
            return true;
        }

        componentDidUpdate(prevProps, prevState) {
            if (this.props.isLog) {
                let ts = new Date().getTime() - this.start.getTime();
                console.log(`### ${this.componentName} updated : ${ts} ms`);
            }
        }

        render () {
            this.componentName = LoggingComponent.name;
            return <LoggingComponent {...this.props} />
        }
        
    }
}

Logger.propTypes = {
    isLog: PropTypes.bool
};

Logger.defaultProps = {
    isLog: false
}

export default Logger;