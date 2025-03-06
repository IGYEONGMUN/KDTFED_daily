// let id = prompt("아이디입력");
// let password = prompt("비번입력");
// console.log(id, password, typeof id, typeof password);
// if ((id !== "" || id !== null) && (id !== "" || id !== null)) {
//   console.log("ok");
//   id = parseInt(id);
//   password = parseInt(password);
//   console.log(id, password, typeof id, typeof password);
// }

const id = "ezen1234";
const password = "1234567";

const userName = prompt("당신의 이름입력");
if (userName !== "" && userName !== null) {
  const userId = prompt(`${userName}님 아이디입력 ㄱㄱ`);
  if (userId !== "" && userId !== null) {
    if (userId === id) {
      const userPw = prompt(`${userName}님 반갑습니다 패스워드 입력하세요`);
      if (userPw === password) {
        alert(`${userName}님 오늘도 좋은 하루되세요`);
      } else {
        alert("패스워드가 일치 ㄴㄴ");
        location.reload();
      }
    } else {
      alert("일치 ㄴㄴ");
      location.reload();
    }
  } else {
    alert("아이디입력 ㄱㄱ");
    location.reload();
  }
} else {
  alert("입력하셈");
  location.reload();
}
