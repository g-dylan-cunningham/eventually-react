// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
//
// class SearchResult extends Component {
//   constructor() {
//     super();
//
//   }
//
//
//
//   render () {
//     console.log('query in result', this.props.theQuery.user[0].username);
//     let path = "/friends/" + this.props.theQuery.user[0].id
//
//     if(this.props.wasClickedState){
//       return <div></div>
//     } else {
//       return (
//         <div onClick={this.props.wasClickedFunc}>
//           {this.props.query !== [] ? <Link to={path}>{this.props.theQuery.user[0].username}</Link> : 'no results'}
//         </div>
//       )
//     }
//
//   }
// }
// export default SearchResult;
