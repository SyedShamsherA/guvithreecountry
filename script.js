document.addEventListener("DOMContentLoaded", function(){
    const countryInfoDiv = document.getElementById("country-info");

    fetch("https://restcountries.com/v3.1/all").then(response => response.json()).then(data => {
        data.forEach(country => {
            const countryDiv = document.createElement("div");
            countryDiv.classList.add("country");

            const name = document.createElement("h2");
            name.textContent = country.name.common;

            const region = document.createElement("p");
            region.textContent = `Region: ${country.region}`;

            const subRegion = document.createElement("p");
            subRegion.textContent = `Sub-region: ${country.subregion}`;

            const population = document.createElement("p");
            population.textContent = `Population: ${country.population}`;

            countryDiv.appendChild(name);
            countryDiv.appendChild(region);
            countryDiv.appendChild(subRegion);
            countryDiv.appendChild(population);

            countryInfoDiv.appendChild(countryDiv);
        })
    })
    .catch(error => {
        console.log('error', error)
    })
})