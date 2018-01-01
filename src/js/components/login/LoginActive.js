// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// // import { bindActionCreators } from 'redux';
// import { login } from '../../actions/login';
//
//
// class LoginActive extends Component {
//   constructor() {
//     super();
//   }
//   render () {
//     // console.log('loginactive: this.props.login', this.props.login)
//
//     return (
//       <div>
//
//         {this.props.login ? "Welcome: " + this.props.login.userData.username : "LoginActive error"}
//
//       </div>
//     )
//   }
// }
//
// function mapStateToProps(state, props){
//   // console.log('mapping state to props in loginActive', state.login);
//   return {
//     login: state.login
//   }
// }
//
// // function matchDispatchToProps(dispatch){
// //   return {
// //     loginAction: bindActionCreators(login, dispatch),
// //   }
// // }
// export default connect(mapStateToProps, null)(LoginActive);
