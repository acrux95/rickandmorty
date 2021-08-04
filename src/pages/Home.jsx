import React, { useState } from 'react';
import { connect } from 'react-redux';

import Card from '../components/Card';
import Modal from '../components/Modal'

import logo from '../assets/static/logo.png';
import addNew from '../assets/static/addNew.png'

import { makeStyles } from '@material-ui/core/styles';
import { TextField, InputLabel, MenuItem, Select, FormControl} from '@material-ui/core';
import '../assets/styles/home.scss';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Home = ({myList, results}) => {
  const classes = useStyles();
  // const API = 'https://rickandmortyapi.com/api/character/';
  const [states, setStates] = useState({
    name: '',
    species: '',
    origin: '',
    location: '',
    status:'',
    gender: '',
    position: '',
    // characters: [],
    modal: false
  })

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(API);
  //     const data = await response.json();
  //     setState({...state, characters: data});
  //     // console.log(state.characters);
  //   } fetchData();
  // },[]);

  const handleOpen = () => {
    setStates({...states, modal: true});
  }
  const handleClose = () => {
    setStates({...states, modal: false});
  }
  const handleChange = (event) => {
    setStates({
      ...states,
      [event.target.name]: event.target.value
    });
  };

  return (
    <section className="hero">
      <div className="titleZone">
        <div className="title">
          <img className="logo" src={logo} alt="HP logo" />
        </div>
      </div>
      <h2 className="subTitle">Favorites</h2>
        <section className="favoritesBar">
        {myList.map((character) => (
              <Card classType='favorites' key={character.id} image={character.image} imageAlt={character.name} status={character.status} cname={character.name}
              species={character.species} gender={character.gender} origin={character.origin.name} location={character.location.name} isList={true}
              />
            ))}
        </section>
      <h2 className="subTitle">Characters</h2>
      <section className="cardSection">
        {results.map((character) => (
            <Card classType='cardBody' key={character.id} image={character.image} imageAlt={character.name} status={character.status} cname={character.name}
            species={character.species} gender={character.gender} origin={character.origin.name} location={character.location.name} isList={false}
            />
          ))}
      </section>
      <div className="newCharacter">
        <button 
          type='submit' 
          className="newButton"
          onClick={handleOpen}>
          <img src={addNew} alt="add New Character" />
        </button>
        <h2>Add New Character</h2>
      </div>
      <Modal visible={states.modal} >
          <section className="modalBody">
            <section className="columnLeft">
              <h1 className="title">Add New Character</h1>
              <div className="inputName">
                <TextField
                  type="text"
                  label="Name"
                  value={states.name}
                  name="name"
                  autoComplete="off"
                  onChange={handleChange}
                  />
              </div>
              <div className="inputName">
                <TextField
                  type="text"
                  label="Origin"
                  value={states.origin}
                  name="origin"
                  autoComplete="off"
                  onChange={handleChange}
                  />
              </div>
              <div className="inputName">
                <TextField
                  type="text"
                  label="Location"
                  value={states.location}
                  name="location"
                  autoComplete="off"
                  onChange={handleChange}
                  />
              </div>
            </section>
            <section className="columnRigth">
              <div className="closeModalControl">
                <button 
                type="submit"
                onClick={handleClose}
                >
                  X
                </button>
              </div>
              <div className="status">
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={states.status}
                    onChange={handleChange}
                    name="status"
                  >
                    <MenuItem value="Alive">Alive</MenuItem>
                    <MenuItem value="Death">Death</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="species">
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Specie</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={states.species}
                    onChange={handleChange}
                    name="species"
                  >
                    <MenuItem value="Human">Human</MenuItem>
                    <MenuItem value="Alien">Alien</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="gender">
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={states.gender}
                    onChange={handleChange}
                    name="gender"
                  >
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Male">Male</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <button 
              className="submitForm"
            >
              Add Character
            </button>
            </section>
          </section>
        </Modal>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    results: state.results,
  };
};
export default connect(mapStateToProps, null)(Home);
