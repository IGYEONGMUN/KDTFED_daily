const Book = function (title, pages, done) {
  this.title = title;
  this.page = pages;
  this.done = done;
  this.finish = function () {
    let str = "";
    this.done === false ? (str = "읽는중") : (str = "완독");
    return str;
  };
};

const book1 = new Book("t", 648, false);
console.log(book1);
