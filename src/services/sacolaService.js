import { api } from "helpers/api";

const parseResponse = (response) => response.json();

export const sacolaService = {
  getLista: () => fetch(api.getSacola(), { method: "GET" }).then(parseResponse),
  create: (sacola) =>
    fetch(api.createSacola(), {
      method: "POST",
      body: JSON.stringify(sacola),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(parseResponse),
  purchase: (id) =>
    fetch(api.purchase(id), { method: "DELETE" }).then(parseResponse),
}