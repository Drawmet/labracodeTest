import React, {Component} from 'react';
import {Jumbotron} from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';

export default class InfoBlock extends Component {
    
    render(){

        const title = this.props.title;
        const subtitle = this.props.subtitle;
        const src = this.props.src;
        const budget = this.props.composition.budget + '$';
        const id = "rate_" + this.props.id;
        const vote = this.props.composition.vote_average;
        const overview = this.props.composition.overview;

        const genres = this.props.composition.genres.map((item) => {
            return (
                <p className="lead">{item.name}</p>
            )
        });

        const companies = this.props.composition.production_companies.map((item) => {
            return (
                <p className="lead">{item.name}</p>
            )
        });

        const year = this.props.composition.release_date.split("-")[0];

        return (
            <div>
                <Jumbotron>
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                    <img src={src} alt={title}/>
                    <h5>Жанры:</h5><p className="lead">{genres}</p>
                    <h5>Год:</h5><p className="lead">{year}</p>
                    <h5>Бюджет:</h5><p className="lead">{budget}</p>
                    <h5>Компании:</h5><p className="lead">{companies}</p>
                    <StarRatingComponent 
                        name={id} 
                        starCount={10}
                        value={vote}
                        />
                    <p className="lead">{vote}</p>
                    <h5>Описание:</h5><p className="lead">{overview}</p>
                </Jumbotron>
            </div>
        )
    }
}