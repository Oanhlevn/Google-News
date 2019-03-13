let news = [];
let nextnews = []; 
let updatedtotal;
let newpage; 
let pagenext; 
let minsbefore

async function fetchnews() {
    let url = "https://newsapi.org/v2/top-headlines?pageSize=40&country=us&apiKey=3ddbc0173a2c4a34a084d927ccfa4ed1";
    let result = await fetch(url);
    let data = await result.json();
    news = data.articles;
    nextnews = news.splice (20,20); 
    updatedtotal = news.length; 
    console.log(news);
    let linknext = `<p> <a href='#' onclick='nextpage()'> Next 20 stories </a> </p>`
    let newspage = "newspage"; 
    render(news,newspage,linknext);
}

function render(arr,page,link) {
    
document.getElementById("total").innerHTML = `<h4> There are ${updatedtotal} articles </h4>`;
document.getElementById(`${page}`).innerHTML = arr.map(newsart => {
    
return `<div id="article" > 
<div id="headline"><h3> ${newsart.title} </h3> </div>
<p> This article was published ${moment(newsart.publisedAt).fromNow()}   </p>
<p id="content"> ${newsart.content} </p>
<p id="img">  ${newsart.urlToImage} </p>
<p id="src"> ${newsart.source.name}  </p>
<p > <a href='#'> ${newsart.url} </a> </p>
</div>`
    }).join(" ");
document.getElementById("footer").innerHTML =link;
}

function nextpage() 
{   updatedtotal = updatedtotal + nextnews.length; 
    let pagenext = "nextpage"
   render(nextnews,pagenext,"");

//     document.getElementById("total").innerHTML = `<h4> There are ${updatedtotal} articles </h4>`;
//     document.getElementById("nextpage").innerHTML = nextnews.map(newsart => {
//         return `<div id="article" > 
//         <div id="headline"><h3> ${newsart.title} </h3> </div>
//         <p id="content"> ${newsart.content} </p>
//         <p id="img">  ${newsart.urlToImage} </p>
//         <p id="src"> ${newsart.source.name}  </p>
//         <p > <a href='#'> ${newsart.url} </a> </p>
//         </div>`
//          }).join(" ");
//  document.getElementById("footer").innerHTML =""; 
}

fetchnews();