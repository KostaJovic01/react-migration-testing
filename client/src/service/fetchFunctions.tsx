import axios from 'axios';
import { Pokemon } from '../types';

const API_URL = 'http://localhost:8000/pokemon';

export const createPokemon = async (pokemonData: Pokemon) => {
  try {
    const response = await axios.post(API_URL, {
      ...pokemonData,
      urlName: pokemonData.urlName,
      shinyRate: pokemonData.shinyRate,
      fromQuest: pokemonData.fromQuest
    });
    return response.data;
  } catch (error) {
    console.error('Error creating new Pokemon:', error);
    throw error;
  }
};
