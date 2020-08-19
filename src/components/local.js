const localStore = (type) => {
  if (localStorage.getItem(type)) {
    return JSON.parse(localStorage.getItem(type));
  } else {
    localStorage.setItem(type, "[]");
    //console.log(localStorage.getItem(type));
    return JSON.parse(localStorage.getItem(type));
  }
};

export default localStore;
