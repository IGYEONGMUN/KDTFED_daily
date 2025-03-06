const string = prompt("문자열입력");
const letter = prompt("어떤 문자 체크할거임");

const counting = (string, letter) => {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == letter) {
      count += 1;
    }
    return count;
  }
};
const result = counting(string, letter);
console.log(result);
document.write(`${string}에는 ${letter}가 ${result}개 있음`);
