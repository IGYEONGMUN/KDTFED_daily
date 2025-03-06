const diameter = document.querySelector("#cyl-diameter");
const height = document.querySelector("#cyl-height");
const btn = document.querySelector("#btn");
const result = document.querySelector("#result");

class Circle {
  constructor(diameter, height) {
    this.diameter = Number(diameter.value);
    this.height = Number(height.value);
    this.volume = function () {
      const vol = (
        Math.PI *
        (this.diameter / 2) *
        (this.diameter / 2) *
        this.height
      ).toFixed(0);
      return vol;
    };
  }
}

btn.addEventListener("click", () => {
  const Circle1 = new Circle(diameter, height);
  result.innerText = Circle1.volume();
});
