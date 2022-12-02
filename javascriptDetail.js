let container=document.querySelector('.info');
let button=document.querySelector('.container').querySelector('.btn').querySelector('button');
loadPage();
function loadPage(){
    for(let i=0;i<localStorage.length;i++){
        let parsing = localStorage.getItem(`country${i}`);
        let countryObj = JSON.parse(parsing);
button.addEventListener('click',(event)=>{
    event.preventDefault();
    window.open('./index.html','_self');
})
        if(countryObj.countryName===localStorage.getItem('country')){
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          let countryImg=document.createElement('img');
          let country = document.querySelector(".info").querySelector('.details').querySelector('h1');
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          let native = document.querySelector(".info").querySelector(".details").querySelector(".textStyle").querySelector(".Info1").children[0];
          let pop = document.querySelector(".info").querySelector(".details").querySelector(".textStyle").querySelector(".Info1").children[1];
          let reg = document.querySelector(".info").querySelector(".details").querySelector(".textStyle").querySelector(".Info1").children[2];
          let subReg = document.querySelector(".info").querySelector(".details").querySelector(".textStyle").querySelector(".Info1").children[3];
          let cap = document.querySelector(".info").querySelector(".details").querySelector(".textStyle").querySelector(".Info1").children[4];
          let tld = document.querySelector(".info").querySelector(".details").querySelector(".textStyle").querySelector(".Info2").children[0];
          let curr = document.querySelector(".info").querySelector(".details").querySelector(".textStyle").querySelector(".Info2").children[1];
          let lang = document.querySelector(".info").querySelector(".details").querySelector(".textStyle").querySelector(".Info2").children[2];
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
countryImg.src=countryObj.flag;
container.prepend(countryImg);
//
country.innerText=countryObj.countryName;
//
native.append(countryObj.nativeName);
pop.append(countryObj.population);
reg.append(countryObj.region);
subReg.append(countryObj.subRegion);
cap.append(countryObj.Capital);
tld.append(countryObj.topLevelDomain);
curr.append(countryObj.currencies);
lang.append(countryObj.languages);
//
for(let i=0;i<countryObj.borderCountries.length;i++){
let div=document.createElement('div');
div.className='borders';
div.innerText=countryObj.borderCountries[i];
let borders = document
  .querySelector(".info")
  .querySelector(".details")
  .querySelector(".textStyle")
  .querySelector(".borderCountries");
  borders.appendChild(div);
}

//
return;


        };
    };
};
