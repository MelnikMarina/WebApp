let tg = window.Telegram.WebApp;

function myFunction() {
  var input, filter, row, item, h4, i, txtValue;
  input = document.getElementById('search-item');
  filter = input.value.toUpperCase();
  row = document.getElementById("product-list");
  item = row.getElementsByTagName('div');

  for (i = 0; i < item.length; i++) {
    h4 = item[i].getElementsByTagName("h4")[0];
    txtValue = h4.textContent || h4.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      item[i].style.display = "";
    } else {
      item[i].style.display = "none";
    }
  }
}

let products=[

{
  id_product:1,
  name:"Red Printed T-shirt",
  price:3000,
  quantity:1,
  discount:0
},
{
  id_product:2,
  name:"Black Sneakers",
  price:5000,
  quantity:1,
  discount:0
},
{
  id_product:3,
  name:"Gym trousers",
  price:2000,
  quantity:1,
  discount:0
},
{
  id_product:4,
  name:"Navy Puma Polo",
  price:4000,
  quantity:1,
  discount:0
},
{
  id_product:5,
  name:"Air Jordan I",
  price:10000,
  quantity:1,
  discount:0
},
{
  id_product:6,
  name:"Puma T-shirt",
  price:50000,
  quantity:1,
  discount:0
},
{
  id_product:7,
  name:"3 Pair Socks Set",
  price:1000,
  quantity:1,
  discount:0
},

{
  id_product:8,
  name:"Black Fossil Watch",
  price:12000,
  quantity:1,
  discount:0
},
{
  id_product:9,
  name:"Leather Band Cassio Watch",
  price:15000,
  quantity:1,
  discount:0
}
];

var cart=[];
var cart_id=[];
var j=0;
  localStorage.clear();
  let carts = document.querySelectorAll(".btn");
  for(let i=0;i<carts.length;i++){
    carts[i].addEventListener('click', ()=>{
      var btn = products[i].id_product;
      cartNumbers(products[i]);
      cart_id.push(products[i].id_product);
      cart.push(products[i].name);
//       tg.sendData(products[i].id_product);
    })
  }

  function cartNumbers(product){
    let prodNum = localStorage.getItem("cartNumbers");
    prodNum=parseInt(prodNum);
    if(prodNum){
      prodNum=prodNum+1;
      localStorage.setItem("cartNumbers", prodNum);
      document.querySelector("#number-added").textContent=prodNum;
    }
    else{
      localStorage.setItem("cartNumbers", 1);
      document.querySelector("#number-added").textContent=1;
    }
  }

//   let img= document.querySelector("#cart");
//   img.addEventListener('click', ()=>{
//      for(let i=0;i<products.length;i++){
//        tg.sendData(products[i].id_product);
//      }
//   })
function show_cart(){
     tg.sendData(cart_id);
  }
