import axios from "axios";

const devURL = "http://localhost:8000/v1/api/";

export default axios.create({
  baseURL: devURL,
  headers: {
    "Content-type": "application/x-www-form-urlencoded",
  },
});
