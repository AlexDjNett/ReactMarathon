import axios from 'axios'

const serviceSW = {
      getPlanets(){
        return axios.get(`https://swapi.dev/api/planets`);
  },
  
      getPeople(){
        return axios.get(`https://swapi.dev/api/${this.state.dataType.type}/${this.state.dataType.counter}`);
  },
      getStarships(){
        return axios.get(`https://swapi.dev/api/starsips`);
  }
} 

export default serviceSW;

