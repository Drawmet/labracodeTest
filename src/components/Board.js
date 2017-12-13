import React, {Component} from 'react';
import Filters from './Filters';
import { Input, Col, Row } from 'reactstrap';
import CardItem from './CardItem';
import PaginationCli from './PaginationCli';

export default class Board extends Component{

    componentDidMount(){
        const defaultType = 'movie';
        this.props.changeType(defaultType);
    }

    render() {
        const content = this.props.items;
        console.log(content)
            if(content.results){
                let cards = content.results.map((item, index) => {
                    return (
                        <Col lg="4" key={item.id}>
                            <CardItem  
                                title={ content.typeData === 'movie' ? item.original_title : item.name} 
                                subtitle={ content.typeData ==='movie' ? item.title : item.original_name} 
                                src={"https://image.tmdb.org/t/p/w500" + item.backdrop_path} />
                        </Col>
                    )
                });
                return (
                    <div>
                        <Row>
                            <Col lg="6">
                                <p className="lead">{content.typeData === 'movie' ? "Фильмы" : "Сериалы"}</p>
                            </Col>
                            <Col className="ml-auto" sm="6" lg="6">
                                <Filters filter={this.props.filter} typeData={content.typeData} changeFilter={this.props.changeFilter} />
                            </Col>
                            <Col sm="6" lg="4">
                                <Input placeholder="Поиск"></Input>
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