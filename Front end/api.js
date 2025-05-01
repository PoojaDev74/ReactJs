import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:4000/api",
// });

const BASE_URL = 'http://localhost:4000/api';

export const fetchGroup = async () => {
  const res = await axios.get(`${BASE_URL}/group`);
  return res.data;
};

export const createGroup = async (name) => {
  await axios.post(`${BASE_URL}/group`, { name });
};

export const fetchNotes = async (groupId) => {
  const res = await axios.get(`${BASE_URL}/notes/${groupId}`);
  return res.data;
};

export const createNote = async (groupId, content) => {
  await axios.post(`${BASE_URL}/notes`, { groupId, content });
};

// export const getGroups = () => API.get("/groups");
// export const createGroup = (name) => API.post("/groups", { name });

// export const getNotes = (groupId) => API.get(`/notes/${groupId}`);
// export const createNote = (data) => API.post("/notes", data);
// export const updateNote = (id, content) => API.put(`/notes/${id}`, { content });
// export const deleteNote = (id) => API.delete(`/notes/${id}`);

// export default API;