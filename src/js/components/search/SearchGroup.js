import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { query } from '../../actions/query';
import axios from 'axios';
import { Redirect } from 'react-router-dom';


class SearchGroup extends Component {
  constructor() {
    super();
    this.state = {
      query: null,
      theQuery: null,
      // updated: false,
      wasClicked: false
    }
  }



  getQuery = (query) =>{
    axios.get(`http://localhost:1337/users/findUserByUsername/${query}`)
    .then(res => {
      // console.log('res.data', res.data);
      if(res.data.user.length === 1){
        const theQuery = res.data;
        this.setState({
          theQuery: theQuery,
          wasClicked: true
        });
      } else {
        alert("No user exists")

      }
    });
  }



  render () {


    if(this.state.wasClicked){
      let path = "/friends/" + this.state.theQuery.user[0].id;
      console.log('query in result', this.state.theQuery.user[0].username, path);
      this.setState({
        wasClicked: false
      })
      return (
        <Redirect to={path} />
      )
    }


    return (
      <div className="margin-top-tiny">
        <form
          onSubmit={e => { this.getQuery(
            this.state.query
          )
          e.preventDefault();
          e.target.reset();
        }}

        >
        <div className="formGroup">
          <div className="formComponent1">
            <input className="form-control" name="query" placeholder="Enter a username" onChange={e => this.setState({query: e.target.value})}/>
          </div>
          <div className="formComponent2">
            <input type="submit" className="btn btn-primary" />
          </div>
        </div>
        </form>

      </div>
    )
  }
}
// {this.state.updated ? <SearchResult theQuery={this.state.theQuery} wasClickedState={this.state.wasClicked} wasClickedFunc = {this.wasClicked}/> : ''}

function mapStateToProps(state, props){
  return {
    login: state.login,
    query: state.query
  }
}

function matchDispatchToProps(dispatch){
  return {
    queryAction: bindActionCreators(query, dispatch),
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchGroup);
