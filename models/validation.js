class Validation {
  KiemTraTonTai = (valueID, data) => {
    const isStatus = true;
    data.forEach((total) => {
      if (total.product.id === valueID) isStatus = true;
    });
    return isStatus;
  };
}
