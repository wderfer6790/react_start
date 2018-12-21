import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NotFound from './NotFound';
/* 
html5 history aip를 사용할 수 없을 때 사용가능한 방법 (< ie10)

historyAipFallback 기능이 없으면 물리적으로 존재하지 않는 uri를 요청했을 때 
다시 index.html로 돌아가서 react-router를 타고 component를 찾을 수 없다.

그래서 hash, '#'을 통해서 한 문서 내에서 움직으는 것으로 browser에 인식시키고 route 한다.

historyAipFallback 기능은 브라우저가 지원도 해야 하지만 server에도 설정이 필요하다.
ex) mvc pattern apache rewrite engine

BrowserRouter와 달리 location.key값을 사용할 수 없다.
import { HashRouter as Router, Route } from 'react-router-dom'; 

그 외 라우터, 하이브리드 또는 네이티브 앱에 사용
import { MemoryRouter as Router, Route } from 'react-router-dom'; 
*/

import Header from './Header';

import Home from './Home';
import About from './About';
import SongList from './SongList';
import Members from './Members';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            members : [
                { name: 'Maggie Adams', photo: 'photos/Mag.png' },
                { name: 'Sammie Purcell', photo: 'photos/Sam.png' },
                { name: 'Tim Purcell', photo: 'photos/Tim.png' },
                { name: 'Scott King', photo: 'photos/King.png' },
                { name: 'Johnny Pike', photo: 'photos/JPike.jpg' },
                { name: 'Toby Ruckert', photo: 'photos/Toby.jpg' },
            ],
            songs : [
                { id:1, title:"Fallin' for you", musician:'Colbie callet', youtube_link:'PABUl_EX_hw' },
                { id:2, title:"Can't hurry love", musician:'The supremes', youtube_link:'EJDPhjQft04' },
                { id:3, title:"Landslide", musician:'Dixie chicks', youtube_link:'V2N7gYom9-A' },
                { id:4, title:"Can't let go", musician:'Linda ronstadt', youtube_link:'P-EpGKXmoe4' },
                { id:5, title:"Doctor my eyes", musician:'Jackson Browne', youtube_link:'7JlFKS_1oZk' },
                { id:6, title:"We gotta get you a woman", musician:'Todd Rundgren', youtube_link:'EyUjbBViAGE' },
                { id:7, title:"Hip to my heart", musician:'Band Perry', youtube_link:'vpLCFnD9LFo' },
                { id:8, title:"Rolling in the deep", musician:'Adele', youtube_link:'EvK8pDK6IQU' }
            ]
        }
    }
    
    render() {
        /**
         * path가 uri와 일치할 때만 랜더링 한다.
         * Route의 exact 옵션은 정확한 일치시에만 랜더링 하도록 한다.
         * exact 옵션이 없을 경우 다른 path에 /가 들어가기 때문에 다른 경로를 선택했을 때 같이 랜더링 된다.
         * 
         * component 대신 render 속성을 이용해서 component에 속성을 전달할 수 있다.
         * 
         * Switch는 매칭되는 route 하나만 vdom에 랜더링 한다.
         * path가 지정되지 않은 마지막에 위치한 route는 uri가 매칭되지 않으면 사용된다.
         */ 
        return (
            <Router>
                <div className="container">
                <Header />
                    <Switch>
                        <Redirect exact from="/" to="/home" />
                        <Route path="/home" component={Home} />
                        <Route path="/about" render={(props) => <About {...props} title="여우와 늙다리들" />} />
                        <Route path="/members" render={(props) => <Members {...props} members={this.state.members} />} />
                        <Route path="/songs" render={(props) => <SongList {...props} songs={this.state.songs} />} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;