function Service() {
  this.getListProductAPI = () => {
    return (promise = axios({
      url: `https://628b995c7886bbbb37bbca5a.mockapi.io/api/Captone`,
      method: "GET",
    }));
  };
  this.getProductById = (id) => {
    return (promise = axios({
      url: `https://628b995c7886bbbb37bbca5a.mockapi.io/api/Captone/${id}`,
      method: "GET",
    }));
  };
}
