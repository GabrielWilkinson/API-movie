// GET REQUESTS

const url = "http://www.omdbapi.com/?s=harry potter&apikey=a538c472"

const list = document.querySelector("#results");
// console.log(list);

const fetchMovies = (movieRequest) => {
  async function getMovie() {
    const result = await fetch(`http://www.omdbapi.com/?s=${movieRequest}&apikey=a538c472`)
    result.json().then(json => {
      const data = json.Search
      // console.log(title)
      data.forEach((result) => {
        console.log(result);
        const movie = `<li class="list-inline-item">
          <img src="${result.Poster}">
          <p>${result.Title}</p>
          </li>
          `
        list.insertAdjacentHTML("beforeend", movie)
        // console.log(movie)
      });
    });
  }
  getMovie()
}

const form = document.getElementById("search-form")
console.log(form)
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log(event)
  const input = event.currentTarget.querySelector(".form-control");
  // console.log(input.value);
  list.innerHTML = ""
  fetchMovies(input.value)
});

console.log("hello")

POST REQUESTS

const signUp = (event) => {
  event.preventDefault();
  const emailValue = document.querySelector("#email");
  const passwordValue = document.querySelector("#password");
  console.log(emailValue.value);
  console.log(passwordValue.value);
  fetch("https://reqres.in/api/register", {
    method: "Post",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({email: emailValue.value, password: passwordValue.value})
  }).then(response => response.json()).then(data => console.log(data));
};

const form = document.querySelector("#form");
console.log(form)
form.addEventListener("submit", signUp)
