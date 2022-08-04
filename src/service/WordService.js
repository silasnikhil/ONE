const wordList = [
  "Flummox",
  "obnoxious",
  "scrupulous",
  "dubious",
  "sight",
  "Amok",
  "Amphisbaena",
  "meticulous",
  "thorough",
  "cautious",
];

let obj;

const randomWord = Math.floor(Math.random() * 10);

const baseURL =
  `https://api.dictionaryapi.dev/api/v2/entries/en/` + wordList[randomWord];

class WordService {
  async getWordData() {
    const res = await fetch(baseURL);

    obj = await res.json();

    console.log(obj);

    return obj;
    // return axios.get(baseURL);
  }
}

export default new WordService();
