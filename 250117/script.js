const fah = prompt("당신이 변환할 화씨온도를 입력하세요!");
const cel = ((fah - 32) / 1.8).toFixed(1);

alert(`화씨온도 ${fah}는 섭씨온도 ${cel} 입니다!`);
