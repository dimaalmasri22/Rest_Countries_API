let item1 = document.querySelector(".list").querySelector(".AF");
let item2 = document.querySelector(".list").querySelector(".AM");
let item3 = document.querySelector(".list").querySelector(".AS");
let item4 = document.querySelector(".list").querySelector(".EU");
let item5 = document.querySelector(".list").querySelector(".OC");
let selectFeild = document.querySelector(".selectFeild");
let displaySelected = document.querySelector(".selectFeild").querySelector("p");
let list = document.querySelector(".list");
let options = [item1, item2, item3, item4, item5];
let input = document.querySelector("#search");
//fetch variables
let allURL = "https://restcountries.com/v3.1/all";
let regionUrl = "https://restcountries.com/v3.1/region/";
allCountries(allURL);
filterRegion(regionUrl);
//fetch all countries function
async function allCountries(allURL) {
  let response = await fetch(allURL);
  let json = await response.json();
  console.log(json);
  for (let i = 0; i < json.length; i++) {
    let countryName = json[i].name.common;
    let population = json[i].population;
    let region = json[i].region;
    let Capital = json[i].capital;
    let flag = json[i].flags.png;
    let object = {
      countryName: countryName,
      population: population,
      region: region,
      Capital: Capital,
      flag: flag,
    };
    // console.log(object)
    if (localStorage.length != 250) {
      save(await JSON.stringify(object), i);
    }
    //
  }
  // let firstArray = json[0];
  // console.log(firstArray);
  load();
}
//input feild
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  let inputValue = document.getElementById("search").value;
  // console.log(inputValue);
  document.querySelector(".containerOfCards").innerHTML = "";
  for (let i = 0; i < 250; i++) {
    let parsing = localStorage.getItem(`country${i}`);
    let countryObj = JSON.parse(parsing);
    let capitalFirstLetter = countryObj.countryName;
    let smallFirstLetter =
      countryObj.countryName.charAt(0).toLowerCase() +
      countryObj.countryName.slice(1);
    if (inputValue == smallFirstLetter || inputValue == capitalFirstLetter) {
      let divContainer = document.createElement("div");
      let countryImg = document.createElement("img");
      let name = document.createElement("h3");
      let div1 = document.createElement("div");
      let div2 = document.createElement("div");
      let div3 = document.createElement("div");
      let label1 = document.createElement("span");
      let label2 = document.createElement("span");
      let label3 = document.createElement("span");
      let linkSecondPage = document.createElement("a"); //*

      linkSecondPage.className = "anchorStyle"; //*
      // linkSecondPage.href = "./detail.html"; //*
      label1.innerText = "Population: ";
      label1.className = "prc";
      label2.innerText = "Region: ";
      label2.className = "prc";
      label3.innerText = "Capital: ";
      label3.className = "prc";

      divContainer.className = "cards";
      countryImg.className = "countryImg";
      countryImg.src = countryObj.flag;
      name.className = "countryName";
      name.innerText = countryObj.countryName;
      div1.className = "population";

      div2.className = "region";

      div3.className = "capital";
      document.querySelector(".containerOfCards").appendChild(divContainer); //
      divContainer.appendChild(linkSecondPage); //
      linkSecondPage.appendChild(countryImg); //
      linkSecondPage.appendChild(name); //
      linkSecondPage.appendChild(div1); //
      linkSecondPage.appendChild(div2); //
      linkSecondPage.appendChild(div3); //
      //  document.querySelector(".containerOfCards").appendChild(divContainer);
      //  divContainer.appendChild(countryImg);
      //  divContainer.appendChild(name);
      //  divContainer.appendChild(div1);
      //  divContainer.appendChild(div2);
      //  divContainer.appendChild(div3);
      div1.appendChild(label1);
      div2.appendChild(label2);
      div3.appendChild(label3);
      div1.append(countryObj.population);
      div2.append(countryObj.region);
      div3.append(countryObj.capital);
    }
  }
  let numOfCards = document.querySelector(".containerOfCards").children.length;
  for (let i = 0; i < numOfCards; i++) {
    let countryClick = document.querySelector(".containerOfCards").children[i];
    countryClick.addEventListener("click", (event) => {
      event.preventDefault();
      localStorage.setItem(
        "country",
        document
          .querySelector(".containerOfCards")
          .children[i].querySelector("a")
          .querySelector("h3").innerText
      );
      // window.location.href = "http://127.0.0.1:5500/detail.html";
      window.open("http://127.0.0.1:5501/detail.html", "_self");
    });
  }
});

//filter regions
async function filterRegion(regionUrl) {
  options.forEach((element) => {
    // console.log(element);
    // console.log(options[0].innerText);
    element.addEventListener("click", async (event) => {
      event.preventDefault();
      document.querySelector(".containerOfCards").innerHTML = "";
      // at.removeAllChildNodes(document.querySelector(".containerOfCards"));
      console.log(event.target.innerText);
      let response = await fetch(regionUrl + event.target.innerText);
      let json = await response.json();
      //   console.log(json[0].flags.png);
      for (let i = 0; i < json.length; i++) {
        // console.log(json.length);
        let divContainer = document.createElement("div");
        let countryImg = document.createElement("img");
        let name = document.createElement("h3");
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let div3 = document.createElement("div");
        let label1 = document.createElement("span");
        let label2 = document.createElement("span");
        let label3 = document.createElement("span");
        let linkSecondPage = document.createElement("a"); //*

        linkSecondPage.className = "anchorStyle"; //*
        // linkSecondPage.href = "./detail.html"; //*
        label1.innerText = "Population: ";
        label1.className = "prc";
        label2.innerText = "region: ";
        label2.className = "prc";
        label3.innerText = "Capital: ";
        label3.className = "prc";

        divContainer.className = "cards";
        countryImg.className = "countryImg";
        countryImg.src = json[i].flags.png;
        name.className = "countryName";
        name.innerText = json[i].name.common;
        div1.className = "population";

        div2.className = "region";

        div3.className = "capital";
        document.querySelector(".containerOfCards").appendChild(divContainer); //
        divContainer.appendChild(linkSecondPage); //
        linkSecondPage.appendChild(countryImg); //
        linkSecondPage.appendChild(name); //
        linkSecondPage.appendChild(div1); //
        linkSecondPage.appendChild(div2); //
        linkSecondPage.appendChild(div3); //
        // document.querySelector(".containerOfCards").appendChild(divContainer);
        // divContainer.appendChild(countryImg);
        // divContainer.appendChild(name);
        // divContainer.appendChild(div1);
        // divContainer.appendChild(div2);
        // divContainer.appendChild(div3);
        div1.appendChild(label1);
        div2.appendChild(label2);
        div3.appendChild(label3);
        div1.append(json[i].population);
        div2.append(json[i].region);
        div3.append(json[i].capital);
        let countryClick =
          document.querySelector(".containerOfCards").children[i];
        countryClick.addEventListener("click", (event) => {
          event.preventDefault();
          localStorage.setItem(
            "country",
            document
              .querySelector(".containerOfCards")
              .children[i].querySelector("a")
              .querySelector("h3").innerText
          );
          window.open("http://127.0.0.1:5501/detail.html", "_self");
        });
      }
    });
  });
}

//save local storage
function save(element, i) {
  localStorage.setItem(`country${i}`, element);
}
//function load
function load() {
  for (let i = 0; i < 250; i++) {
    let parsing = localStorage.getItem(`country${i}`);
    let countryObj = JSON.parse(parsing);
    let divContainer = document.createElement("div");
    let countryImg = document.createElement("img");
    let name = document.createElement("h3");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let label1 = document.createElement("span");
    let label2 = document.createElement("span");
    let label3 = document.createElement("span");
    let linkSecondPage = document.createElement("a"); //*

    linkSecondPage.className = "anchorStyle"; //*

    // linkSecondPage.href="../detail.html"; //*
    label1.innerText = "Population: ";
    label1.className = "prc";
    label2.innerText = "Region: ";
    label2.className = "prc";
    label3.innerText = "Capital: ";
    label3.className = "prc";

    divContainer.className = "cards";
    countryImg.className = "countryImg";
    countryImg.src = countryObj.flag;
    name.className = "countryName";
    name.innerText = countryObj.countryName;
    div1.className = "population";

    div2.className = "region";

    div3.className = "capital";

    document.querySelector(".containerOfCards").appendChild(divContainer); //
    divContainer.appendChild(linkSecondPage); //
    linkSecondPage.appendChild(countryImg); //
    linkSecondPage.appendChild(name); //
    linkSecondPage.appendChild(div1); //
    linkSecondPage.appendChild(div2); //
    linkSecondPage.appendChild(div3); //
    // document.querySelector(".containerOfCards").appendChild(divContainer);
    // divContainer.appendChild(countryImg);
    // divContainer.appendChild(name);
    // divContainer.appendChild(div1);
    // divContainer.appendChild(div2);
    // divContainer.appendChild(div3);
    div1.appendChild(label1);
    div2.appendChild(label2);
    div3.appendChild(label3);
    div1.append(countryObj.population);
    div2.append(countryObj.region);
    div3.append(countryObj.capital);
  }
  for (let i = 0; i < 250; i++) {
    let countryClick = document.querySelector(".containerOfCards").children[i];

    countryClick.addEventListener("click", (event) => {
      event.preventDefault();
      localStorage.setItem(
        "country",
        document
          .querySelector(".containerOfCards")
          .children[i].querySelector("a")
          .querySelector("h3").innerText
      );
      // window.location.href = "http://127.0.0.1:5500/detail.html";
      window.open("http://127.0.0.1:5501/detail.html", "_self");
    });
  }

  //
}

//filtering selection
function filterByRegionField() {
  list.classList.toggle("display");
  options.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      displaySelected.innerText = element.innerText;
    });
  });
}
//
let darkMode = document.querySelector(".darkMode");
let lengthOfCards = document.querySelector(".containerOfCards").children.length;
darkMode.addEventListener("click", (event) => {
  event.preventDefault();
  let nav = document.querySelector("nav");
  let navLeft = document.querySelector("nav").querySelector("h3");
  let navRight = document.querySelector("nav").querySelector("button");
  nav.classList.toggle("changeToDark");
  navLeft.classList.toggle("changeToWhite");
  navRight.classList.toggle("changeToWhite");
  //-----------------------------------------------------------------------
  let inputSearch = document
    .querySelector(".searchAndFilter ")
    .querySelector("form");
  let iconSearch = document.querySelector("label").querySelector("ion-icon");
  inputSearch.classList.toggle("changeInput");
  iconSearch.classList.toggle("changeToWhite");
  //---------------------------------------------------------
  let filterSelect = document.querySelector(".selector");
  filterSelect.children[0].classList.toggle("changeToDark");
  filterSelect.children[0].classList.toggle("changeToWhite");
  filterSelect.children[1].classList.toggle("changeToDark");
  filterSelect.children[1].classList.toggle("changeToWhite");
  //------------------------------------------------------------------------------
  let bodyBackground = document.body;
  bodyBackground.classList.toggle("changeBackgroundBody");
  //------------------------------------------------------------------------------
  let cardsInside = document.querySelector(".containerOfCards");

  for (let i = 0; i < lengthOfCards; i++) {
    cardsInside.children[i].classList.toggle("changeToDark");
    cardsInside.children[i]
      .querySelector("a")
      .children[1].classList.toggle("changeToWhite");
    cardsInside.children[i]
      .querySelector("a")
      .children[2].classList.toggle("changeToWhite");
    cardsInside.children[i]
      .querySelector("a")
      .children[2].children[0].classList.toggle("changeToWhite");
    cardsInside.children[i]
      .querySelector("a")
      .children[3].classList.toggle("changeToWhite");
    cardsInside.children[i]
      .querySelector("a")
      .children[3].children[0].classList.toggle("changeToWhite");
    cardsInside.children[i]
      .querySelector("a")
      .children[4].classList.toggle("changeToWhite");
    cardsInside.children[i]
      .querySelector("a")
      .children[4].children[0].classList.toggle("changeToWhite");
    // let change=true;
    // let filterChange=true;
  }

  //-----------------------------------------------------------
});

// function darkFilter(){

// options.forEach((element) => {
//   element.addEventListener("click", (event) => {
//     event.preventDefault();
//     let lengthOfCards =
//       document.querySelector(".containerOfCards").children.length;
//       console.log(lengthOfCards);
//     let cardsInside = document.querySelector(".containerOfCards");
//     for (let i = 0; i < lengthOfCards; i++) {
//       cardsInside.children[i].classList.toggle("changeToDark");
//       cardsInside.children[i].children[1].classList.toggle("changeToWhite");
//       cardsInside.children[i].children[2].classList.toggle("changeToWhite");
//       cardsInside.children[i].children[2].children[0].classList.toggle(
//         "changeToWhite"
//       );
//       cardsInside.children[i].children[3].classList.toggle("changeToWhite");
//       cardsInside.children[i].children[3].children[0].classList.toggle(
//         "changeToWhite"
//       );
//       cardsInside.children[i].children[4].classList.toggle("changeToWhite");
//       cardsInside.children[i].children[4].children[0].classList.toggle(
//         "changeToWhite"
//       );
//     }
//   });
// });
// }

//transfer to the second page
// let cardsContainer = document.querySelector(".containerOfCards");

// for (let i = 0; i < cardsContainer.children.length; i++) {
//   cardsContainer.children[i].addEventListener("click", (event) => {
//     event.preventDefault();

//     let clicking = true;
//   });
// }

//  let x = document.querySelector(".containerOfCards").children.length;
//  if(x!=250){
//   x = document.querySelector(".containerOfCards").children.length;
//  for(let i =0;i<x;i++){
//   let clicked=document.querySelector('.containerOfCards').children[i];
//   clicked.addEventListener('click',(event)=>{
//     clicked.querySelector("a").href = "./detail.html";
//     event.preventDefault();
//     localStorage.setItem('countryClick',clicked.querySelector('a').querySelector('h3').innerText);

//   });
//  };
// }else{
//  for (let i = 0; i < x; i++) {
//    let clicked = document
//      .querySelector(".containerOfCards")
//      .children[i];
//    clicked.addEventListener("click", (event) => {
//      event.preventDefault();
//       clicked.querySelector("a").href = "http://127.0.0.1:5500/detail.html";
//      localStorage.setItem(
//        "countryClick",
//        clicked.querySelector("a").querySelector("h3").innerText
//      );

//    });
//  };
//  }
// ;
load();
