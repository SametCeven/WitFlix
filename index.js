
const xdom = document.querySelector(".btn-lg");
xdom.addEventListener("click",(e)=>{
    console.log(e);
})

// omdb api key
// https://www.omdbapi.com/
const apiKey = "db117d29";

async function getMovieData(searchTerm,apiKeyT=apiKey){
    let x;
    await axios
        .get(`https://www.omdbapi.com/?t=${searchTerm}&apikey=${apiKeyT}`)
        .then((response)=>{
            x = response.data
        })
        .catch((error)=>{
            x = error
        })
    return x;
}

const movieSearchList = ["The Matrix","Dune","Armageddon","The Prestige","Inception","Tenet","Marvel","İron Man","Black Panther"]
const suggestionImgArr = document.querySelectorAll(".suggestion-img");
const suggestionTitleArr = document.querySelectorAll(".suggestion-item-content h3");
const suggestionDurationArr = document.querySelectorAll(".duration"); 
const suggestionRatedArr = document.querySelectorAll(".maturity-rating"); 
let movieSearchListData = [];

async function addSectionMovieData(obj) {
    for(let i=0; i<movieSearchList.length;i++){
        await getMovieData(movieSearchList[i]).then((response)=>{
            movieSearchListData.push(response);
        })
        console.log(movieSearchListData[i]);
        suggestionImgArr[i].src = movieSearchListData[i].Poster;
        suggestionTitleArr[i].textContent = movieSearchListData[i].Title;
        suggestionDurationArr[i].textContent = movieSearchListData[i].Runtime;
        suggestionRatedArr[i].textContent = movieSearchListData[i].Rated;
    }
}

addSectionMovieData()




