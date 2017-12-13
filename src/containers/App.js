import React, { Component } from 'react';
import './App.css';
import { Container } from 'reactstrap';
import NavbarCli from '../components/NavbarCli';
import Board from '../components/Board';
import {connect} from 'react-redux';
import actions from '../actions/actions';

class App extends Component {
  render() {

  let content = this.props.data;
  const changeType = this.props.changeType;
  const changeFilter = this.props.changeFilter;
  const changePage = this.props.changePage;

    return (
      <div className="App">
        <NavbarCli changeType={changeType}/>
        <Container>
          <Board typeData={content.typeData} 
                  filter={content.filter} 
                  changeFilter={changeFilter} 
                  changeType={changeType} 
                  items={content} 
                  changePage={changePage}/>
        </Container>
      </div>
    );
  }
}

export default connect(
  (state) => ({data: state.data}),
  (dispatch) => ({changeType: (type) => dispatch(actions.changeType(type)),
                  changeFilter: (type, filter) => dispatch(actions.changeFilter(type, filter)),
                  changePage: (type, filter, page) => dispatch(actions.changePage(type, filter, page))}),
)(App);
