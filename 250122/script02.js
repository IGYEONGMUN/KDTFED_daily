const number = parseInt(prompt("자연수를 입력"));
let isPrime;

if (!isNaN(number)) {
  if (number === 0 || number === 1) {
    alert(`${number}(은)는 소수도 합성수도 아님`);
    location.reload();
  } else if (number === 2) {
    isPrime = true;
    alert(`${number}는 소수입니다`);
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      } else {
        isPrime = true;
      }
    }
  }
} else {
  alert("숫자아님");
  location.reload();
}

if (isPrime) {
  alert(`${number}는 소수입니다`);
} else {
  alert(`${number}는 소수가 아닙니다`);
}
