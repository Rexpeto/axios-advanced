import axios from "axios";

export const TestingService = () => {
  return axios("https://xsrickandmortyapi.com/api/character/?name=rick");
};
