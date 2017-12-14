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

        const id = "rate_" + this.props.id;
        const src = this.props.src;
        const title = this.props.title;
        const subtitle = this.props.subtitle;
        const vote = this.props.vote;
        const isOpen = this.state.isOpen;

        return (
            <div>
              <Col>
                <Card>
                  <CardImg top width="100%" src={src} alt={title} />
                    <CardBody>
                      <CardTitle>{title}</CardTitle>
                      <CardSubtitle>{subtitle}</CardSubtitle>
                      <StarRatingComponent 
                        name={id} 
                        starCount={10}
                        value={vote}
                        />
                      <p className="lead">{vote}</p>
                      <Button onClick={this.handleClick}>{isOpen ? "Закрыть" : "Открыть"}</Button>
                    </CardBody>
                </Card>
              </Col>
              <Col>
              {isOpen && this.props.composition.loaded ? <InfoBlock 
                title={title} 
                subtitle={subtitle} 
                src={src}
                composition={this.props.composition.data}
                /> : <div></div>}
              </Col>
            </div>
        );
    }
  };

export default CardItem;