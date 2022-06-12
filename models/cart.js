class GioHang {
  DSGH = [];
  addToCart(product) {
    const checkValidation = new Validation();
    const cartItem = { product: product, quantity: 1 };
    let check = checkValidation.KiemTraTonTai(cartItem.product.id, this.DSGH);
    if (check) this.DSGH.push(cartItem);
  }
}
