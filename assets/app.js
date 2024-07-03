function getData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let html = "";
      data.results.forEach((element) => {
        html += `<article class="characterCard">
        <div class="characterImage">
          <img
            src="${element.image}"
            alt="${element.name}"
          />
        </div>
        <div class="characterInfo">
          <div class="section">
            <a
              href="${element.episode[0]}"
              target="_blank"
            >
              <h2>${element.name}</h2>
            </a>
            <span class="status">
              <span class="status-icon" style="background-color:${
                element.status === "Alive"
                  ? "green"
                  : element.status === "Dead"
                  ? "red"
                  : "grey"
              }"></span>
              ${element.status}
            
            </span>
          </div>
          <div class="section">
            <span class="text-gray">Last known location:</span>
            <a
              href="${element.location.url}"
              target="_blank"
              >${element.location.name}</a
            >
          </div>
          <div class="section">
            <span class="text-gray">First seen in:</span>
            <a
              href="${element.origin.url}"
              target="_blank"
              >${element.origin.name}</a
            >
          </div>
        </div>
      </article>`;
      });
      document.getElementById("container").innerHTML = html;
    })
    .catch((error) => console.log(error));
}

const urlPost = "https://rickandmortyapi.com/api/character";

getData(urlPost);
