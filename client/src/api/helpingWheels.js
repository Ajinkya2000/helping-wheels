import axios from "axios";

let URL;
if (process.env.NODE_ENV === "production") {
  URL = "https://mighty-meadow-99849.herokuapp.com/api/";
} else {
  URL = "http://127.0.0.1:8000/api/";
}

export default axios.create({
  baseURL: URL,
});