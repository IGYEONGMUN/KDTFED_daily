const student = {
  name: "Juliet",
  score: {
    history: 85,
    science: 94,
    average: function () {
      return this.history + this.science;
    },
  },
};

const book3 = {
  title: "재미있는 자바스크립트",
  page: 350,
  buy: function () {
    console.log("이책구입함");
  },
};

book3.price = 20000;
console.log(book3);
