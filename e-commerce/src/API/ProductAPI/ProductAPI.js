import axios from "axios";
class ProductAPI {
  static async getListProduct() {
    try {
      const response = await axios
        .get("https://e-commerce-project-api.herokuapp.com/courses")
        .then((data) => {
          return data;
        })
        .catch((error) => {
          throw error;
        });

      const productsList = response.data;
      return productsList;
    } catch (error) {
      console.log("error: ", error);
    }
  }
}

export default ProductAPI;
