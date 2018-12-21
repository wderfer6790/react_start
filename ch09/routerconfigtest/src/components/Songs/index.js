import { Component } from 'react';
import {renderRoutes} from 'react-router-config';

class index extends Component {
    render() {
        const {route} = this.props;
        return renderRoutes(route.routes);
    }
}

export default index;