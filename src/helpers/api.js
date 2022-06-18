const iphoneContext = {
  iphoneEndpoint: () => `${api.baseURL}`,
  iphoneLista: () => `${iphoneContext.iphoneEndpoint()}/iphone`,
  iphoneById: (id) => `${iphoneContext.iphoneEndpoint()}/iphone/${id}`,
  createIphone: () => `${iphoneContext.iphoneEndpoint()}/create`,
  updateIphone: (id) => `${iphoneContext.iphoneEndpoint()}/update/${id}`,
  deleteIphone: (id) => `${iphoneContext.iphoneEndpoint()}/delete/${id}`,
};

export const api = {
  baseURL: "http://localhost:3004/",
  ...iphoneContext,
};
