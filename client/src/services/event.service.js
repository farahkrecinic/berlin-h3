import axios from "axios";

const API_URL = "http://localhost:8080/api/";

class EventService {
    getAllPublishedEvents(username, password) {
    return axios
      .get(API_URL + "publishedevents")
      .then((response) => {
          return response.data;
      });
  }
}

export default new EventService();