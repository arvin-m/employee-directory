import axios from "axios";



// Export an object containing methods we'll use for accessing the random user API
export default {
  getUsers: function(language) {
    return new Promise((resolve, reject) => {
      axios
        .get("https://randomuser.me/api/?results=30")
        .then(res => {
          const users = res.data;
          const results = users.map(user => {
            return {
                image: "",
                login:"",              
                phone: "",
                email: "",
                DBO:""
            };
          });
          resolve(results);
        })
        .catch(err => reject(err));
    });
  },
 
};
