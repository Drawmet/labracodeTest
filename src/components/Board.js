import React, {Component} from 'react';
import Filters from './Filters';
import { Input, Col, Row, Button} from 'reactstrap';
import CardItem from './CardItem';
import PaginationCli from './PaginationCli';

export default class Board extends Component{

    handleClick = () => {
        setTimeout(this.props.search(this.props.content.typeData, document.getElementById('search').value), 3000);
    }

    componentDidMount(){
        const defaultType = 'movie';
        this.props.changeType(defaultType);
    }

    render() {
        const content = this.props.content;
        const composition = this.props.composition;
        const getComposition = this.props.getComposition;
            if(content.results){
                let cards = content.results.map((item, index) => {
                    return (
                            <CardItem
                                key={item.id} 
                                title={ content.typeData === 'movie' ? item.original_title : item.name} 
                                subtitle={ content.typeData ==='movie' ? item.title : item.original_name} 
                                src={"https://image.tmdb.org/t/p/w500" + item.backdrop_path} 
                                id={item.id}
                                vote={item.vote_average}
                                typeData={content.typeData}
                                composition={composition}
                                getComposition={getComposition}
                                />
                    )
                });
                return (
                    <div>
                        <Row>
                            <Col lg="6">
                                <p className="lead">{content.typeData === 'movie' ? "Фильмы" : "Сериалы"}</p>
                            </Col>
                            <Col className="ml-auto" sm="6" lg="6">
                                <Filters filter={content.filter} typeData={content.typeData} changeFilter={this.props.changeFilter} />
                            </Col>
                            <Col sm="6" lg="4">
                                <Input id="search" placeholder="Поиск"></Input>
                            </Col>
                            <Col sm="2" lg="1">
                                <Button color="info" onClick={this.handleClick}>Поиск</Button>
                            </Col>
                        </Row>
                        <Row>
                            {cards}
                        </Row>
                        <PaginationCli content={content} changePage={this.props.changePage}/>
                    </div>
                )
            
        } else return (<div></div>)
        
    }
}