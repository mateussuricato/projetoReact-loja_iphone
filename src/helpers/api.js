const iphoneContext = {
  iphoneEndpoint: () => `${api.baseURL}`,
  iphoneLista: () => `${iphoneContext.iphoneEndpoint()}/iphone`,
  iphoneById: (id) => `${iphoneContext.iphoneEndpoint()}/iphone/${id}`,
  createIphone: () => `${iphoneContext.iphoneEndpoint()}/create`,
  updateIphone: (id) => `${iphoneContext.iphoneEndpoint()}/update/${id}`,
  deleteIphone: (id) => `${iphoneContext.iphoneEndpoint()}/delete/${id}`,
};

const sacolaContext = {
  getSacola: () => `${iphoneContext.iphoneEndpoint()}/all-carrinho`,
  createSacola: () => `${iphoneContext.iphoneEndpoint()}/create-carrinho`,
  purchase: () => `${iphoneContext.iphoneEndpoint()}/finish-carrinho`,
}

export const api = {
  baseURL: "https://apilojaiphonemongodb.herokuapp.com",
  ...iphoneContext,
  ...sacolaContext
};
