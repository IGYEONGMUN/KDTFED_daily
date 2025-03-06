// const productInfo = "./db.json";
// const productInfo =
//   "https://raw.githubusercontent.com/IGYEONGMUN/array-project/refs/heads/main/db.json";
const productInfo =
  "https://my-json-server.typicode.com/IGYEONGMUN/array-project/data";
const ul = document.querySelector("ul");

fetch(productInfo)
  .then((response) => response.json())
  .then((data) => {
    let idCounter = Date.now();
    const products = {
      data: data.map((item) => ({
        ...item,
        id: idCounter++,
      })),
    };

    const removeItems = () => {
      const items = document.querySelectorAll("li");
      items.forEach((item) => {
        item.remove();
      });
    };

    const createItem = (product) => {
      const li = document.createElement("li");
      const img = document.createElement("img");
      const attr = document.createAttribute("src");
      const div = document.createElement("div");
      const h3 = document.createElement("h3");
      const span = document.createElement("span");

      li.id = product.id;
      attr.value = product.img;
      img.setAttributeNode(attr);

      h3.className = "name";
      h3.innerText = product.name;

      const price = new Intl.NumberFormat("ko-kr", {
        style: "currency",
        currency: "KRW",
      }).format(product.price);

      span.className = "price";
      span.innerText = price;

      div.append(h3, span);
      li.append(img, div);
      ul.appendChild(li);

      li.addEventListener("click", () => {
        const url = `product-detail.html?category=${encodeURIComponent(
          product.category
        )}&name=${encodeURIComponent(product.name)}`;
        window.location.href = url;
      });
    };

    const importData = () => {
      products.data.map((product) => {
        createItem(product);
      });
    };

    importData();

    const asceButton = document.querySelector(".ascending");
    const descButton = document.querySelector(".decending");

    const sortAsce = (e) => {
      e.preventDefault();
      const myProducts = products.data.sort((a, b) => {
        return a.price - b.price;
      });

      removeItems();

      myProducts.forEach((product) => {
        createItem(product);
      });
    };

    const sortNew = (e) => {
      e.preventDefault();
      const myProducts = products.data.sort((a, b) => {
        return b.id - a.id;
      });

      removeItems();

      myProducts.forEach((product) => {
        createItem(product);
      });
    };

    const sortDesc = (e) => {
      e.preventDefault();
      const myProducts = products.data.sort((a, b) => {
        return b.price - a.price;
      });

      removeItems();

      myProducts.forEach((product) => {
        createItem(product);
      });
    };

    asceButton.addEventListener("click", sortAsce);
    descButton.addEventListener("click", sortDesc);

    //최신순
    const newlisting = document.querySelector(".newlisting");
    newlisting.addEventListener("click", sortNew);
    //검색
    const searchBar = document.querySelector(".searchBar");
    searchBar.addEventListener("input", () => {
      // e.preventDefault();
      const keyword = searchBar.value.toLowerCase();
      if (keyword === "") {
        removeItems();
        importData();
      } else {
        const filtered = products.data.filter((product) => {
          return product.name.toLowerCase().includes(keyword);
        });
        removeItems();
        filtered.forEach((product) => {
          createItem(product);
        });
      }
    });

    const select = document.querySelector("select");

    const selectCategory = (e) => {
      const selectedIndex = e.target.options.selectedIndex;
      const value = e.target.options[selectedIndex].value;
      const filtered = products.data.filter((product) => {
        return product.category === value;
      });
      removeItems();
      filtered.forEach((product) => {
        createItem(product);
      });
      console.log(value);
    };

    select.addEventListener("change", selectCategory);
  })
  .catch((error) => {
    console.error(error);
  });

// (function () {
//   var w = window;
//   if (w.ChannelIO) {
//     return w.console.error("ChannelIO script included twice.");
//   }
//   var ch = function () {
//     ch.c(arguments);
//   };
//   ch.q = [];
//   ch.c = function (args) {
//     ch.q.push(args);
//   };
//   w.ChannelIO = ch;
//   function l() {
//     if (w.ChannelIOInitialized) {
//       return;
//     }
//     w.ChannelIOInitialized = true;
//     var s = document.createElement("script");
//     s.type = "text/javascript";
//     s.async = true;
//     s.src = "https://cdn.channel.io/plugin/ch-plugin-web.js";
//     var x = document.getElementsByTagName("script")[0];
//     if (x.parentNode) {
//       x.parentNode.insertBefore(s, x);
//     }
//   }
//   if (document.readyState === "complete") {
//     l();
//   } else {
//     w.addEventListener("DOMContentLoaded", l);
//     w.addEventListener("load", l);
//   }
// })();

// ChannelIO("boot", {
//   pluginKey: "66d21ddf-a971-496d-9b79-7d6e309b7381",
// });
