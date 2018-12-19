import React, { Component } from 'react';
import axios from 'axios';
import { Portal } from "react-portal";
import InputName from './InputName';
import ContactList from './ContactList';
import Loading from './Loading'
import AddContact from './AddContact';

const BASEURL = "";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts : [],
            isLoading : false,
            name : "",
            showAddContact : false // 연락처 입력창 토글 플래그
        };
    }

    changeName = (name) => {
        this.setState({name:name});
    }

    searchContact = () => {
        let name = this.state.name;
        if (name.length >= 2) {
            this.setState({isLoading:true});
            axios.get(BASEURL + "contacts_long/search/" + name)
                .then((response) => {
                    this.setState({contacts : response.data, isLoading : false});
                })
                .catch((error) => {
                    console.log("### ERROR : ", error);
                    this.setState({isLoading : false});
                });
        } else {
            this.setState({contacts:[]});
        }
    }

    changeShowAddContact = (state) => {
        this.setState({showAddContact : state});
    }

    addContact = (name, tel, address) => {
        // 추가한 값을 바로 볼 수 있도록 리렌더
        this.setState({name:name});

        // 속성명과 변수병이 같을 때 리터럴 표기법으로 키를 입력하지 않고 변수를 바로 전달한다.
        axios
            .post(BASEURL + "/contacts", {name, tel, address})
            .then((response) => {
                if (response.data.status === "success") {
                    this.searchContact();
                }
            });

        this.changeShowAddContact(false);
    }

    deleteContact = (no) => {
        axios
            .delete(BASEURL + "contacts/" + no)
            .then((response) => {
                this.searchContact();
            });
    }
    
    render() {
        return (
            <div className="container">
                <div className="well">
                    <div className="col-xs-1"></div>
                    <div className="title col-xs-10">:: 연락처 앱</div>
                    <div className="col-xs-1">
                        <button className="btn btn-info btn-circle" onClick={() => this.changeShowAddContact(true)}>
                            <span className="glyphicon glyphicon-plus"></span>
                        </button>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="panel panel-default panel-borderless">
                    <div className="panel-body">
                        <InputName searchContact={this.searchContact} name={this.state.name} changeName={this.changeName}/>
                    </div>
                </div>
                <ContactList contacts={this.state.contacts} deleteContact={this.deleteContact} />
                {this.state.showAddContact ? <AddContact addContact={this.addContact} changeShowAddContact={this.changeShowAddContact} /> : ''}
                <Portal node={document && document.getElementById('modal-area')}>
                    <Loading isLoading={this.state.isLoading}>
                        <div className="well title">
                            <h4>데이터 조회중</h4>
                        </div>
                    </Loading>    
                </Portal>
            </div>
        );
    }
}

export default App;