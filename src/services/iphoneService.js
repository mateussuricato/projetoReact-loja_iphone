import { api } from "helpers/api.js";

const parseResponse = (response) => response.json();

const transformIphone = (iphone) => {

  return {
    ...iphone,
    id: iphone._id,
    titulo: iphone.titulo,
    lancamento: iphone.lancamento,
    polegas: iphone.polegas,
    resolucao: iphone.resolucao,
    camera: iphone.camera,
    selfcamera: iphone.selfcamera,
    video: iphone.video,
    cpu: iphone.cpu,
    gpu: iphone.gpu,
    ram: iphone.ram,
    os: iphone.os,
    preco: iphone.preco,
    img: iphone.img
  };
};

const parseTransformLista = (response) => parseResponse(response).then(iphones => iphones.map(transformIphone));


const parseTransformItem = (response) => parseResponse(response).then(transformIphone);


export const iphoneService = {
  getLista: () =>
    fetch(api.iphoneLista(), { method: "GET" }).then(parseTransformLista),
  getById: (id) =>
    fetch(api.iphoneById(id), { method: "GET" }).then(parseTransformItem),
  create: (iphone) =>
    fetch(api.createIphone(), { method: "POST", body: JSON.stringify(iphone), mode: "cors", headers: {
      "Content-Type": "application/json"} }).then(parseTransformItem),
  updateById: (id) =>
    fetch(api.updateIphone(id), { method: "PUT" }).then(parseResponse),
  deleteById: (id) =>
    fetch(api.deleteIphone(id), { method: "DELETE" }).then(parseResponse),
};
