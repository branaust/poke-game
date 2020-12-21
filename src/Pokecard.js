import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {
    render() {
        let imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-name">{this.props.name}</h1>
                <div className="Pokecard-image">
                    <img src={imgSrc} alt={this.props.name} />
                </div>
                <p className="Pokecard-data">Type: {this.props.type}</p>
                <p className="Pokecard-data">EXP: {this.props.exp}</p>


            </div >
        )
    }
}

export default Pokecard