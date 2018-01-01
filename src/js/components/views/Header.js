import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchGroup from '../search/SearchGroup'
import { logout } from '../../actions/login';
import { Redirect } from 'react-router';
// import eventuallyLogo from '../../../eventuallyLogo'

class Header extends Component {

  logout = () => {
    console.log("logout firing");
    this.props.logoutAction()
  }

  render () {
    if (!this.props.login.loggedIn) {
      return (
        <Redirect to={ '/login'}/>
      )
    }




    let userPic = null;
    if(this.props.login.userData.picUrl){
      userPic = this.props.login.userData.picUrl
      // console.log('header', this.props.login.userData.picUrl);
    }

    return (
      <header>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            {userPic ? <li ><img className="userLoggedInPic" src={userPic} /></li> : ''}
            <li className="active"><Link to="/event/create/1">myEvents</Link></li>
            <li><Link to="/calendar">myCalendar</Link></li>
          </ul>
          <ul className="nav navbar-nav right">
            <li><SearchGroup /></li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><Link onClick={this.logout} to="/login">Logout</Link></li>
                <li role="separator" className="divider"></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contribute</a></li>
              </ul>
            </li>
            <li><Link to="/" id="navLogoAtag"><img src="https://i.imgur.com/2XSuRBK.png" id="navLogo"/></Link></li>
          </ul>
        </div>

      </header>

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
    logoutAction: bindActionCreators(logout, dispatch)
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Header);
