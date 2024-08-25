import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTYwM2U3MTE0OGNjZDkzNjBiZDFlMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MDc1ODg4NCwiZXhwIjoxNjgxMDE4MDg0fQ.NZIsDbwgovNDTjI-P-UKxOwpG-ujkh6EmEMZ9PN6XYo";
//const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers:{token:`Bearer ${TOKEN}`},
});
