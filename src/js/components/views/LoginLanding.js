import React from 'react'
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { login } from '../../actions/login';
import LoginGroup from '../login/LoginGroup';


class LoginLanding extends React.Component {



  render() {

    return (
      <div>
        <div id="loginTopSpacer">
          <img src="https://i.imgur.com/2XSuRBK.png" id="loginImage"/>
        </div>
        <LoginGroup />
        {this.props.login.loggedIn === false ? <div id="disappearWarning">Enter a correct login or create new account</div> : ''}
      </div>
    )
  }
}

function mapStateToProps(state, props){

  return {
    login: state.login
  }
}

// function matchDispatchToProps(dispatch){
//   return {
//     loginAction: bindActionCreators(login, dispatch),
//   }
// }


export default connect(mapStateToProps, null)(LoginLanding)
