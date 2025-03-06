const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
xhr.send();

try {
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const users = JSON.parse(xhr.responseText);
      const result = document.querySelector("#result");
      users.forEach((user) => {
        result.innerHTML += `<table>
           <tr>
              <td>
             이름:
              </td>
              <td>
             ${user.name}
              </td>
           </tr>
           <tr>
              <td>
             아이디:
              </td>
              <td>
             ${user.username}
              </td>
           </tr>
           <tr>
              <td>
             이메일:
              </td>
              <td>
             ${user.email}
              </td>
           </tr>
        
      </table>`;
      });
    }
  });
} catch (error) {
  console.error(error);
}
