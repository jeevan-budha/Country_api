
const countryContainer = document.querySelector(".countries-container");

const filterByRegion = document.querySelector(".Filter-by-region");

const searchCountry = document.querySelector(".search-container input");

let allContriesData;

fetch("./data.json").then((res) => res.json())
  .then((data)=>{
    renderCardCountry(data)
    allContriesData=data;
  })


  filterByRegion.addEventListener("change",(e)=>{
    console.log(e.target.value);
    fetch(`https://restcountries.com/v3.1/region/${filterByRegion.value}`).then((res) => res.json())
  .then(renderCardCountry);
  })


function renderCardCountry(data){
  countryContainer.innerHTML=``;
   data.forEach((country) => {
      const {name, flag,population,region,capital}= country;

      const countryCard = document.createElement('a');
      countryCard.classList.add("country-card");
      countryCard.href=`country.html?name=${name}`
      const cardHTML = `
       <img src="${flag}" alt="flag">
        <div class="card-text">
          <h3>${name}</h3>
          <P><b>Population: </b><span>${population.toLocaleString('en-IN')}</span></P>
          <P><b>Region: </b><span>${region}</span></P>
          <P><b>Capital: </b><span>${capital}</span></P>
        </div>
`
      countryCard.innerHTML = cardHTML;
      countryContainer.append(countryCard);
    });
}

searchCountry.addEventListener("input",(e)=>{
  const filterCountires = allContriesData.filter((country)=>country.name.toLowerCase().includes(e.target.value.toLowerCase()));
  renderCardCountry(filterCountires);
})