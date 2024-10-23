import axios from "axios";

class networkService {
    

  static async get({url, queryParams = {}, headers = {}}) {
    try {
      const response = await axios.get(url, { headers, params: queryParams });
      return response;
    } catch (error) {
      throw new Error('GET request failed');
    }
  }

  static async post({url, body = {}, headers = {}}) {
    try {
      //console.log("from post method")
      const response = await axios.post(url, body, { headers });
      console.log(response)
      return response;
    } catch (error) {
      throw new Error('POST request failed');
    }
  }

  static  async delete({url, queryParams = ''}) {
    try {
      const response = await axios.delete(url, { params: queryParams });
      return response;
    } catch (error) {
      throw new Error('DELETE request failed');
    }
  }

  static async update({url, body = {}, headers = {}}) {
    try {
      const response = await axios.put(url, body, { headers });
      return response;
    } catch (error) {
      throw new Error('PUT request failed');
    }
  }
}

export default networkService;