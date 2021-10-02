import axios from "axios";

export class Service {
  async getCat() {
    const data = await axios.get("https://challenge.fnaghshin.com/api/cat");
    return data.data;
  }
  async getCatPost() {
    const data = await axios.get("https://challenge.fnaghshin.com/api/catpost");
    return data.data;
  }
}
