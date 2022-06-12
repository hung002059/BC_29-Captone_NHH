function getId(id) {
  return document.getElementById(id);
}
const service = new Service();
const productList = new DanhSachSanPham();
// const sanPham = new SanPham();
const getProduct = () => {
  service
    .getListProductAPI()
    .then((result) => {
      productList.addProduct(result.data);
      renderProduct();
    })
    .catch((error) => console.error(error));
};
getProduct();
const mappingAPI = (productList) => {
  productList.map((ele) => {
    const {
      id,
      name,
      price,
      screen,
      backCamera,
      frontCamera,
      img,
      desc,
      type,
    } = ele;
    return new SanPham(
      id,
      name,
      price,
      screen,
      backCamera,
      frontCamera,
      img,
      desc,
      type
    );
  });
};
const renderProduct = () => {
  const product = productList.filterProduct().reduce((total, ele, idx) => {
    total += `
    <div class="card_overlay col-12 col-xs-12 col-md-6 col-lg-3">
    <div class="card container p-0">
      <div class="card-layout">
        <img
          class="card-img-top img-fluid w-100"
          src="${ele.img}"
          alt=" "
        />
        <div class="card-body d-flex text-center">
          <span class="card-title col-7 p-0">${ele.name}</span>
          <span class="card-price text-danger col-5 p-0"
            >${ele.price}$</span
          >
        </div>
        <div id="card-info" class="card-info container">
          <div class="card-desc">
            <p class="screen m-0">
              <span>Màn hình: </span>
              <span>${ele.screen}</span>
            </p>
            <p class="frontCamera m-0">
              <span>Cam trước: </span>
              <span>${ele.frontCamera}</span>
            </p>
            <p class="backCamera m-0">
              <span class="backCamera m-0"> Cam sau: </span>
              <span>${ele.backCamera}</span>
            </p>
            <p class="describe m-0">${ele.desc}</p>
          </div>
        </div>
      </div>
    </div>
    <button
      id="btnThem"
      type="button"
      class="btn btn-success"
      onclick="themProduct('${idx}')"
    >
      Thêm vào giỏ hàng
    </button>
  </div>
    `;
    return total;
  }, "");
  getId("productList").innerHTML = product;
};
getId("selectProduct").onchange = () => {
  const value = getId("selectProduct").value;
  productList.selectProduct = value;
  renderProduct();
};
const tableList = new GioHang();
const mappingTable = () => {};
const themProduct = (id) => {
  service
    .getProductById(id)
    .then((result) => {
      tableList.addToCart(result.data);
      console.log(result.data);
      renderTable();
    })
    .catch((error) => console.error(error));
};
const renderTable = () => {
  const product = tableList.DSGH.reduce((total, item, idx, sp) => {
    total += `
    <tr>
      <td>${idx + 1}</td>
      <td>${item.name}</td>
      <td><img class="img-fluid w-50%" src="${item.img}" /></td>
      <td>${item.price}</td>
      <td>
      <i class="fa-solid fa-circle-minus" onchange="giamSL()"></i>
      <button type="text" value="${idx}"></button>
      <i class="fa-solid fa-circle-plus" onchange="tangSL()"></i>
      </td>
    </tr>
    `;
    console.log(sp);
    return total;
  }, "");
  getId("tableProduct").innerHTML = product;
};
