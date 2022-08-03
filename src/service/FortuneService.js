const base_URL = "https://aztro.sameerkumar.website?sign=gemini&day=today";
const proxy = "https://powerful-wave-77684.herokuapp.com/";

// Susbscribe to the above cors policy for access - Limited to 50 req/hr //
// Proxy2 is our local proxy created via herokyu //

class FortuneService {
  async getFortuneData() {
    const res = await fetch(proxy + base_URL, {
      method: "POST",
    });
    var obj = await res.json();

    // console.log(obj);

    return obj;
  }
}

export default new FortuneService();
