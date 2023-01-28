let t = document.querySelector(".doggy")
let bt = document.querySelector(".btn")

const options = {
    method: 'GET',
    contentType: 'application/json',
};

async function photo(){
    let resp = await fetch("https://dog.ceo/api/breeds/image/random", options);
    let data = await resp.json();
    let img = data.message;
    t.src = img;
}

bt.addEventListener("click", photo)