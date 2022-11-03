data = `
{
  "data":{
    "1":{
      "name" : "HP 14",
      "image" : "https://m.media-amazon.com/images/I/81yJqJSeK4L._AC_AA180_.jpg",
      "price" : "844$",
      "category" : "laptop",
      "brand" : "hp"
    },
    "2":{
      "name" : "GALAXY M33",
      "image" : "https://m.media-amazon.com/images/I/81xvGbBFNhL._AC_AA180_.jpg",
      "price" : "253$",
      "category" : "mobile",
      "brand" : "samsung"
    },
    "3":{
      "name" : "GAMING MOUSE",
      "image" : "https://m.media-amazon.com/images/I/61lF-CvIfDL._AC_UY218_.jpg",
      "price" : "16$",
      "category" : "mouse",
      "brand" : "T-DAGGER"
    },
    "4" : {
      "name" : "GAMING MOUSE",
      "image" : "https://m.media-amazon.com/images/I/61n0IHTywTL._AC_UL320_.jpg",
      "price" : "39$",
      "category" : "mouse",
      "brand" : "logitech"
    },
    "5" : {
      "name" : "twilight language",
      "image" : "https://m.media-amazon.com/images/I/61IcQYuujuL._AC_SY200_.jpg",
      "price" : "22$",
      "category" : "book",
      "brand" : "Vinita agarwal (author)"
    }
  }
}
`;
data = JSON.parse(data);
length = Object.keys(data["data"]).length;

main = document.getElementById("main-content");

for (i = 0; i < length; i++) {
  node = document.createElement("div");
  zz = i+1;
  node.id = String(zz);
  node.className = "item";

  hm = document.createElement("img");
  hm.src = data["data"][String(zz)]["image"];
  hm.style.width = "300px";
  hm.style.height = "auto";
  node.appendChild(hm)
  //hm.innerHTML = "hii";
  inne = document.createElement("div");
  inne.className = "innerhtmls";
  hm = document.createElement("h3");
  hm.innerHTML = data["data"][String(zz)]["name"];
  inne.appendChild(hm);

  hm = document.createElement("h3");
  hm.innerHTML = "brand " + data["data"][String(zz)]["brand"];
  inne.appendChild(hm);

  hm = document.createElement("h3");
  hm.innerHTML = data["data"][String(zz)]["category"];
  inne.appendChild(hm);

  hm = document.createElement("h3");
  hm.innerHTML =  data["data"][String(zz)]["price"];
  inne.appendChild(hm);

  node.appendChild(inne);
  //main.appendChild(hm);
  main.appendChild(node);
}
