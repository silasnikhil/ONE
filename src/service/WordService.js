import axios from "axios";

const wordList = [
  "Abomasum",
  "Absquatulate",
  "Adagio",
  "Alfresco",
  "Alcazar",
  "Amok",
  "Amphisbaena",
  "Antimacassar",
  "Atingle",
  "Bailiwick",
];

let obj;

const randomWord = Math.floor(Math.random() * 10);
console.log(wordList[randomWord]);

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
