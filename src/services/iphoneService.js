import { api } from "helpers/api.js";

const parseResponse = (response) => response.json();

export const iphoneService = {
  getLista: () =>
    fetch(api.iphoneLista(), { method: "GET" }).then(parseResponse),
  getById: (id) =>
    fetch(api.iphoneById(id), { method: "GET" }).then(parseResponse),
  create: () =>
    fetch(api.createIphone(), { method: "POST" }).then(parseResponse),
  updateById: (id) =>
    fetch(api.updateIphone(id), { method: "PUT" }).then(parseResponse),
  deleteById: (id) =>
    fetch(api.deleteIphone(id), { method: "DELETE" }).then(parseResponse),
};
