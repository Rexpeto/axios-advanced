import axios from "axios";

export const TestingService = () => {
  return axios("https://rickandmortyapi.com/api/character/?name=rick");
};
