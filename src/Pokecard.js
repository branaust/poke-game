import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {
    render() {
        let newId = function (id) {
            id = '' + id;
            if (id.length === 3) {
                newId = id
            } else if (id.length === 2) {
                newId = '0' + id
            } else {
                newId = '00' + id
            }
            return newId
        }

        newId(this.props.id)
        let imgSrc = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${newId}.png`
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-name">{this.props.name}</h1>
                <div className="">
                    <img className="Pokecard-image" src={imgSrc} alt={this.props.name} />
                </div>
                <p className="Pokecard-data">Type: {this.props.type.toUpperCase()}</p>
                <p className="Pokecard-data">EXP: {this.props.exp}</p>


            </div >
        )
    }
}

export default Pokecard