import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
/* component pagination is navigation page for change pages  */
export default class Example extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            currentPage: 1,
        }
    }

    selectCurrentPage = (e) => {
        this.props.changePage(this.props.content.typeData, this.props.content.filter, e.target.text);
        this.setState({
            currentPage: parseInt(e.target.text, 10),
        })
    }

    firstPage = () => {
        this.props.changePage(this.props.content.typeData, this.props.content.filter, "1");
        this.setState({
            currentPage: 1
        });
    }

    lastPage = () => {
        this.props.changePage(this.props.content.typeData, this.props.content.filter, this.props.content.data.total_pages);
        this.setState({
            currentPage: this.props.content.total_pages
        })
    }



  render() {
      const content = this.props.content;
      let currentPage = parseInt(content.page, 10);
      let maxPage = parseInt(content.total_pages, 10);
    return (
      <Pagination>
        <PaginationItem disabled={this.state.currentPage === 1}>
          <PaginationLink previous onClick={() => this.firstPage()}/>
        </PaginationItem>
        <PaginationItem active={currentPage === 1}>
          <PaginationLink onClick={this.selectCurrentPage}>
            {currentPage > 3 ? currentPage - 2 : 1}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem active={currentPage === 2}>
          <PaginationLink onClick={this.selectCurrentPage}>
            {currentPage > 3 ? currentPage - 1 : 2}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem active={currentPage > 2 && currentPage < maxPage - 2}>
          <PaginationLink onClick={this.selectCurrentPage}>
          {currentPage > 3 ? currentPage : 3}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem active={currentPage === maxPage - 1}>
          <PaginationLink onClick={this.selectCurrentPage}>
          {currentPage > 3 ? currentPage + 1 : 4}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem active={currentPage === maxPage}>
          <PaginationLink onClick={this.selectCurrentPage}>
          {currentPage > 3 ? currentPage + 2 : 5}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem disabled={currentPage === content.total_pages}>
          <PaginationLink next onClick={() => this.lastPage()}/>
        </PaginationItem>
      </Pagination>
    );
  }
}
