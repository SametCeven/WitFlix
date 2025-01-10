
const xdom = document.querySelector(".btn-lg");
xdom.addEventListener("click",(e)=>{
    console.log(e);
})

const x = axios.get('https://apis.ergineer.com/ipadresim')


async function myfunc(){
    let y;
    await axios
        .get('https://apis.ergineer.com/ipadresim')
        .then((response)=>{
            y = response
        })
        .catch((error)=>{
            y = error
        })
    return y;
}

myfunc().then((reponse)=>{
    console.log(reponse)
})

