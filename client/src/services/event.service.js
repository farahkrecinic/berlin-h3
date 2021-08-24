import axios from "axios";
import authHeader from './auth-header';

const API_URL = "http://localhost:8080/api/";

class EventService {
  getAllPublishedEvents() {
    return axios
    .get(API_URL + "publishedevents")
    .then((response) => {
      return response.data;
    });
  }
  getAllUserEvents(user){
    return axios
    .get(API_URL + "userevents/" + user.id, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
  }
}

export default new EventService();