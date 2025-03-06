const productInfo =
  "https://my-json-server.typicode.com/IGYEONGMUN/array-project/data";

fetch(productInfo).then((response)=>response.json()).then(data)=>{
  let idCounter = Date.now();
  const products = {
    data:data.map((item)=>({
      ...item,
      id:idCounter++,
    }))
  }
}

const params = new URLSearchParams(window.location.search);

const category = params.get("category");
const productName = params.get("name");
console.log(category);
console.log(productName);
