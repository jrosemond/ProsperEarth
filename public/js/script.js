// SCRIPT FOR NAVBAR

document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems, {});
  });
  
  // SCRIPT FOR FAQ
  
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".collapsible");
    var instances = M.Collapsible.init(elems, {});
  });
  
//SCRIPT FOR NEWS

var url =  "https://newsapi.org/v2/everything?q=climate&from=2022-06-12&sortBy=publishedAt&apiKey=d36739fd143e43a583f27265996997aa";

var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
         document.querySelector("#main").innerHTML = articles;
    })
    .then(response => {
            console.log(response);
            // const news = articles.title.map(articles =>{
            //     return `<p>News: ${articles.content}</p>;`
            // })
    })

