import React, { Component } from 'react';

class members extends Component {
    goHome = () => {
      if (window.confirm("HOME으로 이동하시겠습니까?") === true) {
        this.props.history.push('/');
      }
    }
    render() {
        const {members} = this.props;
        let imgstyle={ width: 90, height:80 }
        let list = members.map((member)=> {
          return (
            <div className="col-xs-4" key={member.name}>
              <img src={member.photo} className="img-thumbnail"
                alt={member.name} style={imgstyle} /><br />
              <h6>{ member.name }</h6><br /><br/>
            </div>
          )
        })
      
        return (
          <div>
            <h2>Members</h2>
            <div className="container">
              <div className="row">
                {list}
              </div>
            </div>
            <button className="btn btn-primary" onClick={this.goHome}>HOME으로 이동</button>
          </div>
        )
      
      }
}

export default members;