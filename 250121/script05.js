const obj = {
  name: "John",
  greet: function () {
    console.log(this.name); // `this`는 `obj`
  },
};

obj.greet(); // "John" 출력
