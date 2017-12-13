import React, {Component} from 'react';
import { Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import './CardItem.css';
  
class CardItem extends Component{
    render(){
        return (
            <div>
              <Card>
                <CardImg top width="100%" src={this.props.src} alt={this.props.title} />
                <CardBody>
                  <CardTitle>{this.props.title}</CardTitle>
                  <CardSubtitle>{this.props.subtitle}</CardSubtitle>
                  <Button>Открыть</Button>
                </CardBody>
              </Card>
            </div>
        );
    }
  };

export default CardItem;