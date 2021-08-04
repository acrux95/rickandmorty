import {
  CREATE_CHARACTERS,
  RETRIEVE_CHARACTERS,
  UPDATE_CHARACTERS,
  DELETE_CHARACTERS,
  DELETE_ALL_CHARACTERS
} from "./type";

import dataService from "../services/service";

export const setFavorite = payload => (
  {
    type: 'SET_FAVORITE',
    payload,
  }
);

export const deleteFavorite = payload => (
  {
    type: 'DELETE_FAVORITE',
    payload,
  }
);

export const createTutorial = (title, description) => async (dispatch) => {
  try {
    const res = await dataService.create({ title, description });

    dispatch({
      type: CREATE_CHARACTERS,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveCharacters = () => async (dispatch) => {
  try {
    const res = await dataService.getAll();

    dispatch({
      type: RETRIEVE_CHARACTERS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateTutorial = (id, data) => async (dispatch) => {
  try {
    const res = await dataService.update(id, data);

    dispatch({
      type: UPDATE_CHARACTERS,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteTutorial = (id) => async (dispatch) => {
  try {
    await dataService.delete(id);

    dispatch({
      type: DELETE_CHARACTERS,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAllCharacters = () => async (dispatch) => {
  try {
    const res = await dataService.deleteAll();

    dispatch({
      type: DELETE_ALL_CHARACTERS,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const findCharactersByTitle = (title) => async (dispatch) => {
  try {
    const res = await dataService.findByTitle(title);

    dispatch({
      type: RETRIEVE_CHARACTERS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
