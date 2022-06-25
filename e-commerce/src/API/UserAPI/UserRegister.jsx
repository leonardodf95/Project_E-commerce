import axios from "axios";

class UserRegister {
  static async Register(user) {
    try {
        const userRegistred = await axios
          .post("https://e-commerce-project-api.herokuapp.com/users", user)
          .then((data) => {return data})
          .catch((error) => {throw error})
        return userRegistred
    } catch (error) {
        console.log(error)
    }
  }
}

export default UserRegister;
