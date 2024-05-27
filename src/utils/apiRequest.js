import axios from "axios";

// const token = localStorage.getItem('access_token');

// axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

const apiRequest = axios.create({
  baseURL: "http://localhost:9090/api/v1"
});

export default apiRequest;