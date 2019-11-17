//This function renders the rotating salutation text and displays contents when rotation is complete

window.addEventListener("load", () => {

    let helloArr = ["hola", "salut", "nǐ hǎo", "ciao", "konnichiwa", "hallo", "olá", "hello,"];
    let index = 0;
    let rotation = setInterval(() => {
        document.getElementById("rotatingText").innerText = helloArr[index];
        index++;
        if (index === helloArr.length) {
            clearInterval(rotation);
            document.getElementById("heroMessage").setAttribute("class", "hero-text");
            document.getElementById("subMessage").setAttribute("class", "subtext");
            document.getElementById("mainButtons").setAttribute("class", "buttons");
        }
    }, 500);
})

//These blocks control each modal (opening and closing)

document.getElementById("about").addEventListener("click", () => {
    document.getElementById("modalAboutMe").removeAttribute("style");
    document.querySelectorAll(".close-modal")[0].addEventListener("click", () => {
        document.getElementById("modalAboutMe").setAttribute("style", "display: none;");
    })
});

document.getElementById("portfolio").addEventListener("click", () => {
    document.getElementById("modalPortfolio").removeAttribute("style");
    document.querySelectorAll(".close-modal")[1].addEventListener("click", () => {
        document.getElementById("modalPortfolio").setAttribute("style", "display: none;");
    })
});

document.getElementById("contact").addEventListener("click", () => {
    document.getElementById("modalContact").removeAttribute("style");
    document.querySelectorAll(".close-modal")[2].addEventListener("click", () => {
        document.getElementById("modalContact").setAttribute("style", "display: none;");
    })
});

document.getElementById("puppies").addEventListener("click", () => {
    document.getElementById("modalPuppies").removeAttribute("style");
    document.querySelectorAll(".close-modal")[3].addEventListener("click", () => {
        document.getElementById("modalPuppies").setAttribute("style", "display: none;");
    })
});

//This function renders puppies gifs in the puppies modal

document.getElementById("puppies").addEventListener("click", () => {
    var randomNums = [];
    for (let i = 0; i < 3; i++) {
        randomNums[i] = Math.floor(Math.random() * 25);
    }
    var gifsArr = [];
    var http = new XMLHttpRequest;
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let gifObj = JSON.parse(this.response);
            console.log(gifObj);
            document.querySelector(".cuteness-container").innerHTML = "";
            let puppyImg = "";
            for (let i = 0; i < 3; i++) {
                gifsArr[i] = gifObj.data[randomNums[i]].images.original.url;
                puppyImg = document.createElement("img");
                puppyImg.setAttribute("class", "puppy");
                puppyImg.setAttribute("src", gifsArr[i]);
                document.querySelector(".cuteness-container").appendChild(puppyImg);
            }
        }
    };
    http.open("GET", "https://api.giphy.com/v1/gifs/search?api_key=5rPClzDDbOEPGAdT6Z1lFvfTxrhbHR5a&q=puppy", true);
    http.send();
})
