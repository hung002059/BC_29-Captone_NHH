function getId(id) {
  return document.getElementById(id);
}
const service = new Service();
const productList = new DanhSachSanPham();
const sanPham = new SanPham();
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
const mappingData = () => {
  console.log(productList.DSSP);
};
mappingData();
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
const themProduct = (id) => {
  service
    .getProductById(id)
    .then((result) => {
      tableList.addToCart(result.data);
      // console.log(result.data);
      console.log(tableList.DSGH);
    })
    .catch((error) => console.error(error));
};
