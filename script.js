

const fetchCountryDetails = async () => {
  let countriesInfo = await fetch(`https://restcountries.com/v2/all`);
  let result = await countriesInfo.json();
  // console.log(result);
  populateCountries(result);
};

function populateCountries(countries) {
  // console.log(countries);
  let selectBox = document.querySelector("#select");
  let countryName = " ";
  countries.forEach((countryData) => {
    // console.log(countryData);
    countryName += `
    <option value="${countryData.name}">${countryData.name}</option> `;
  });
  selectBox.innerHTML = countryName;
}
fetchCountryDetails();




const eachCountryDetails = async () => {
  let selectBoxValue = document.querySelector("#select").value;
  let countriesDetails = await fetch(
    `https://restcountries.com/v2/name/${selectBoxValue}?fullText=true`
  );
  let jsonresult = await countriesDetails.json();
  // console.log(jsonresult);
  // console.log(jsonresult[0].name);
  populateCountryDetails(jsonresult);
};
function populateCountryDetails(country) {
  // console.log(country);
  // console.log(country.name);

  let cardData = document.querySelector("#card");

  detailsCountry = "";
  let countryNativename = country[0].name;
  let countryNumeric = country[0].numericCode;
  let countryPopulation = country[0].population;
  let countryRegion = country[0].region;
  let countryFlag = country[0].flags.png;
  let countryCapital = country[0].capital;
  let countryCurrency = country[0].currencies[0].name;
  let countryCursymbol = country[0].currencies[0].symbol;
  // let languages = country[0].languages[0].iso639_1;
  // let language1 = country[0].languages[0].iso639_2;
  let language2 = country[0].languages[0].name;
  let alphacode =  country[0].alpha2Code
  let subregion = country[0].subregion

    detailsCountry += ` <img src=${countryFlag} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title text-center">${countryNativename}</h5>
        <p class="card-text">
  
        </p>
      </div>
      <ul class="list-group list-group-flush justify-content-between">
        <li class="list-group-item"><b>Capital :</b>   ${countryCapital} </li>
        <li class="list-group-item"><b>Region :</b>  ${countryRegion} </li>
        <li class="list-group-item"><b>Sub Region :</b>  ${subregion} </li>
        <li class="list-group-item"><b>Population :</b> ${countryPopulation} </li>
        <li class="list-group-item"><b>Numeric Code :</b>  ${countryNumeric} </li>
        <li class="list-group-item"><b>Alpha Code :</b>  ${alphacode} </li>
        <li class="list-group-item"><b>Currency :</b>  ${countryCurrency} </li>
        <li class="list-group-item"><b>Currency Symbol :  </b>${countryCursymbol} </li>
        <li class="list-group-item"><b>Language :  </b>${language2} </li>
      </ul>`;

    cardData.innerHTML = detailsCountry;
  }


// let cardData = document.querySelector("#card");
// if(selectBoxValue == ${selectBoxvalue.name})
