
const countryContainer = document.querySelector(".countries-container");

fetch("./data.json").then((res) => res.json())
  .then((data) => {
    data.forEach((country) => {
      const {name, flag,population,region,capital}= country;
      console.log(country);

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
  });
