import React from 'react';
import { connect } from 'react-redux';

import { setFavorite, deleteFavorite } from '../actions';

import {StarBorder, Star, Delete, Edit} from '@material-ui/icons';

import '../assets/styles/card.scss'

const Card = (props) => {
  const { id, classType, image, imageAlt, status, cname, species, gender, origin, location, isList} = props;
  
  const handleSetFavorite = () => {
    props.setFavorite({
      id, classType, image, imageAlt, status, cname, species, gender, origin, location, isList,
    });
  };
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };
  return (
    <section className={classType}>
      <div className={`${species} imageSection`}>
        <img src={image} alt={imageAlt} />
      </div>
      <div className={`dataSection ${status === "Alive" ? "live" : "death"}`}>
        <section className="statusSection">
          <div className="status">
          {status === "Alive" ? "Live" : "Death"}
          </div>
          { isList ? (
          <button 
            type='submit' 
            className="favoriteButton"
            onClick={() => handleDeleteFavorite(id)}
            >
            <Star color="primary"/>
          </button>
          ) : (
            <button 
              type='submit' 
              className="favoriteButton"
              onClick={handleSetFavorite}
            >
            <StarBorder color="primary"/>
          </button>
          )}
        </section>
        <h2 className="characterName">
        {status === "Alive" ? "" : "+"} {cname}
        </h2>
        <div className="characterData">
          <p><b>Especie:</b> {species}</p>
          <p><b>Género:</b> {gender}</p>
          <p><b>Orígen: {origin}</b> </p>
          <p><b>Locación:</b> {location}</p>
          <div className="actions">
            <button type='submit' className="favoriteButton">
              <Edit color="primary"/>
            </button>
            <button type='submit' className="favoriteButton">
              <Delete color="primary"/>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(Card);
