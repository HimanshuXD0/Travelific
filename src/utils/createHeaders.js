export function createHeaders({contentType = "application/json", authToken = '', customHeaders = {}}) {
    const headers = {
      'Content-Type': "application/json"
    }
  
    // // Add Authorization header if authToken is provided
    // if (authToken) {
    //   headers['Authorization'] = `Bearer ${authToken}`;
    // }
  
    return headers;
  }
  