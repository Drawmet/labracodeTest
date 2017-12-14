import React, { Component } from 'react';
import { Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button, Col } from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';
import './CardItem.css';
import InfoBlock from './InfoBlock';

//Component with card for item(tv or movies)

class CardItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            composition: {},
        }
    }


    componentDidMount(){
        this.setState({
            composition: this.props.composition
        })
    }

    handleClick = () => {
        this.props.getComposition(this.props.typeData, this.props.id)
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }

    render(){
        const getComposition = this.props.getComposition;
        const typeData = this.props.typeData;
        const id = this.props.id;
        return (
            <div>
              <Col lg="6" sm="6">
                <Card>
                  <CardImg top width="100%" src={this.props.src} alt={this.props.title} />
                    <CardBody>
                      <CardTitle>{this.props.title}</CardTitle>
                      <CardSubtitle>{this.props.subtitle}</CardSubtitle>
                      <StarRatingComponent 
                        name={"rate_" + this.props.id} 
                        starCount={10}
                        value={this.props.vote}
                        />
                      <p className="lead">{this.props.vote}</p>
                      <Button onClick={this.handleClick}>{this.state.isOpen ? "Закрыть" : "Открыть"}</Button>
                    </CardBody>
                </Card>
              </Col>
              <Col>
              {this.state.isOpen && this.props.composition.loaded ? <InfoBlock 
                title={this.props.title} 
                subtitle={this.props.subtitle} 
                src={this.props.src}
                composition={this.props.composition.data}
                /> : <div></div>}
              </Col>
            </div>
        );
    }
  };

export default CardItem;