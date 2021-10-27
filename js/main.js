const sun = document.getElementById("sun");
const water = document.getElementById("water");
const pet = document.getElementById("pets");

sun.addEventListener("change", (event) => {
  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };
  fetch(
    `https://front-br-challenges.web.app/api/v2/green-thumb/?sun=${sun.value}&water=regularly&pets=false`,
    options
  )
    .then((response) => {
      response.json().then((data) => console.log(data));
    })
    .catch((e) => console.log("Deu erro: " + e, message));

  console.log(sun.value);
});
