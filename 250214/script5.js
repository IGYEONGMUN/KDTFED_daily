const book1 = {
  title: "java",
  pages: 648,
  buy: function () {
    console.log("Idid");
  },
};

const keys = Object.keys(book1);
console.log(typeof keys, keys);
