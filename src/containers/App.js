import React, { Component } from 'react';
import './App.css';
import { Container } from 'reactstrap';
import NavbarCli from '../components/NavbarCli';
import Board from '../components/Board';
import {connect} from 'react-redux';
import actions from '../actions/actions';

class App extends Component {
  render() {

    let content = this.props.data.data;
    let composition = this.props.composition;
    const changeType = this.props.changeType;
    const changeFilter = this.props.changeFilter;
    const changePage = this.props.changePage;
    const search = this.props.search;
    const getComposition = this.props.getComposition;
      return (
        <div className="App">
          <NavbarCli changeType={changeType}/>
          <Container>
            <Board  changeFilter={changeFilter} 
                    changeType={changeType} 
                    content={content}
                    composition={composition}
                    search={search}
                    changePage={changePage}
                    getComposition={getComposition}/>
          </Container>
        </div>
      );
  }
}

export default connect(
  (state) => ({data: state.data, composition: state.composition}),
  (dispatch) => ({changeType: (type) => dispatch(actions.changeType(type)),
                  changeFilter: (type, filter) => dispatch(actions.changeFilter(type, filter)),
                  changePage: (type, filter, page) => dispatch(actions.changePage(type, filter, page)),
                  search: (type, query, page) => dispatch(actions.search(type, query, page)),
                  getComposition: (type, id) => dispatch(actions.getComposition(type, id))}),
)(App);
