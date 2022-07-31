const base_URL = "https://uselessfacts.jsph.pl/random.json?language=en";
const proxy = "https://cors-anywhere.herokuapp.com/";
const proxy2 = "https://powerful-wave-77684.herokuapp.com/";

// Susbscribe to the above cors policy for access - Limited to 50 req/hr //
// Proxy2 is our local proxy created via herokyu //

class FactService {
  async getFactData() {
    const res = await fetch(proxy2 + base_URL);

    var obj = await res.json();

    console.log(obj);

    return obj;
    // return axios.get(base_URL);
  }
}

export default new FactService();
