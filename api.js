import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/api",
});

export const getGroups = () => API.get("/groups");
export const createGroup = (name) => API.post("/groups", { name });

export const getNotes = (groupId) => API.get(`/notes/${groupId}`);
export const createNote = (data) => API.post("/notes", data);
export const updateNote = (id, content) => API.put(`/notes/${id}`, { content });
export const deleteNote = (id) => API.delete(`/notes/${id}`);

export default API;