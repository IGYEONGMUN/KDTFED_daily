const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const query = urlParams.get("search-box");
const result = document.querySelector("#result");

result.innerText = `${query}`;
