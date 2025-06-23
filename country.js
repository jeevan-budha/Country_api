

let countryName= new URLSearchParams(location.search).get('name');

let flagImage =document.querySelector(".country-details img");
let countryNameElement =document.querySelector(".details-text-container h1");
let nativeName =document.querySelector(".native-name");
let population =document.querySelector(".population");
let region =document.querySelector(".region");
let subRegion =document.querySelector(".subregion");
let captial =document.querySelector(".captial");
let topLevelDomain =document.querySelector(".topleveldomain");
let currencies =document.querySelector(".currencies");
let language =document.querySelector(".language");
let borderCountries =document.querySelector(".border-countires");

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`).then((res)=>res.json())
.then(([country])=>{

  console.log(country);
  flagImage.src= country.flags.svg;
  countryNameElement.innerText=country.name.common;
  if(country.name.nativeName){
    nativeName.innerText=Object.values(country.name.nativeName)[0].common;
  }else{
    nativeName.innerText=country.name.common;
  }
  population.innerText=country.population.toLocaleString("en-IN");
  region.innerText=country.region;
  if(country.subRegion){
    subRegion.innerText=country.subregion;
  }else{
    subRegion.innerText="No Sub region";
  }
  if(country.capital){
     captial.innerText=country.capital.join(', ');
  }else{
    captial.innerText="No captial"
  }
  topLevelDomain.innerText=country.tld.join(', ');
  if(country.currencies){
    currencies.innerText=Object.values(country.currencies).map((currency)=>currency.name).join(', ');
  }else{
    currencies.innerText="No currency";
  }
  
  if(country.languages){
    language.innerText=Object.values(country.languages).join(", ");
  }else{
    language.innerText="No language found"; 
  }
  
  if(country.borders){
    country.borders.forEach((border) => {
      fetch(`https://restcountries.com/v3.1/alpha/${border}`)
      .then((res)=>res.json())
      .then(([borderCountry])=>{
        console.log(borderCountry);
        const borderCountryTag = document.createElement('a');
        borderCountryTag.innerText = borderCountry.name.common;
        borderCountryTag.href=`country.html?name=${borderCountry.name.common}`
        console.log(borderCountryTag);
        borderCountries.append(borderCountryTag);
      })
    });
  }


})

console.log(new URLSearchParams(location.search).get('name'));
