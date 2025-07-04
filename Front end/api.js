import axios from "axios";

const BASE_URL = 'http://localhost:4000/api';

export const fetchGroups = async () => {
  const response = await axios.get(`${BASE_URL}/groups`);
  return response.data;
};

export const createGroup = async (group) => {
  // const initial = name.charAt(0).toUpperCase(); // first letter
  // const color = getRandomColor();
  const response = await axios.post(`${BASE_URL}/groups`, group);
  return response.data;
};

export const deleteGroup = async (groupId) => {
  const response = await axios.delete(`${BASE_URL}/groups/${groupId}`);
  return response.data;
};

export const fetchNotes = async (groupId) => {
  const response = await axios.get(`${BASE_URL}/notes/${groupId}`);
  return response.data;
};

export const createNote = async (groupId, note) => {
  const response = await axios.post(`${BASE_URL}/notes/${groupId}`, note);
  return response.data;
};

export const deleteNote = async (noteId) => {
  const response = await axios.delete(`${BASE_URL}/notes/note/${noteId}`);
  return response.data;
};

export const updateNote = async (noteId, updatedNote) => {
  const response = await axios.put(`${BASE_URL}/notes/note/${noteId}`, updatedNote);
  return response.data;
};
