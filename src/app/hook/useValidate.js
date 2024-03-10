let error = "";
let errorCode = "";
const validate = (name, itemCount, price) => {
  if (name === "") {
    error = "Please fill the item name";
    errorCode = "name";
  } else if (itemCount === "") {
    error = "Please fill the item count";
    errorCode = "count";
  } else if (price === "") {
    error = "Please fill the item price";
    errorCode = "price";
  } else {
    error = "";
    errorCode = "";
  }

  return [error, errorCode];
};

export default validate;
