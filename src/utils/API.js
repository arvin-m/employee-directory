import axios from "axios";

const API = {

  getUsers: function (res) {
    return axios.get("https://randomuser.me/api/?results=20&nat=us")
  }
}

export default API;
