import { api } from "helpers/api.js";

const parseResponse = (response) => response.json();

export const iphoneService = {
  getLista: () =>
    fetch(api.iphoneLista(), { method: "GET" }).then(parseResponse),
  getById: (id) =>
    fetch(api.iphoneById(id), { method: "GET" }).then(parseResponse),
  create: (iphone) =>
    fetch(api.createIphone(), { method: "POST", body: JSON.stringify(iphone), mode: "cors", headers: {
      "Content-Type": "application/json"} }).then(parseResponse),
  updateById: (id) =>
    fetch(api.updateIphone(id), { method: "PUT" }).then(parseResponse),
  deleteById: (id) =>
    fetch(api.deleteIphone(id), { method: "DELETE" }).then(parseResponse),
};
