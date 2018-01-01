import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../../actions/login';
// import LoginActive from './LoginActive';
import { getFriend } from '../../actions/getFriends';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: null,
      password: null
    }
  }

  // componentDidMount(){
  //   this.props.loginAction();
  // }



  render () {
    return (
      <div>
        <form
          onSubmit={e => { this.props.loginAction(
            this.state.username,
            this.state.password
          )
          e.preventDefault();
          e.target.reset();

        }}

        >
          <input className="form-control" name="username" placeholder="username" onChange={e => this.setState({username: e.target.value})}/>
          <input className="form-control" name="password" placeholder="password" type="password" onChange={e => this.setState({password: e.target.value})}/>

          <div className="form-group margin-top-sm">
            <input type="submit" className="btn btn-primary right" />
          </div>

        </form>

      </div>
    )
  }
}

function mapStateToProps(state, props){
  return {
    login: state.login
  }
}

function matchDispatchToProps(dispatch){
  return {
    loginAction: bindActionCreators(login, dispatch),
    getFriendAction: bindActionCreators(getFriend, dispatch)
  }
}
export default connect(mapStateToProps, matchDispatchToProps)(Login);
