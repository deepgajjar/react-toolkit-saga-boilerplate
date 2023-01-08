import axiosInstance from ".";

class API {
  static get(uri, headers = {}) {
    return axiosInstance.get(uri, { headers });
  }
  static post(uri, payload, headers = {}) {
    return axiosInstance.post(uri, payload, { headers });
  }
  static put(uri, payload, headers = {}) {
    return axiosInstance.put(uri, payload, { headers });
  }
  static delete(uri, payload, headers = {}) {
    return axiosInstance.delete(uri, payload, { headers });
  }
  static patch(uri, payload, headers = {}) {
    return axiosInstance.patch(uri, payload, { headers });
  }
}

export default API;
