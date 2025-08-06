const localeSelect = document.getElementById("locale");
const seedInput = document.getElementById("seed");
const avgReviewsInput = document.getElementById("avgReviews");
const avgLikesInput = document.getElementById("avgLikes");
const generateBtn = document.getElementById("generateBtn");
const randomSeedBtn = document.getElementById("randomSeedBtn");
const tbody = document.querySelector("#booksTable tbody");

// Set up faker locale
function setLocale(locale) {
  faker.locale = locale;
}

// Random seed generator
randomSeedBtn.addEventListener("click", () => {
  const newSeed = Math.floor(Math.random() * 100000);
  seedInput.value = newSeed;
});

generateBtn.addEventListener("click", () => {
  const seed = seedInput.value || Math.random().toString();
  Math.seedrandom(seed);
  faker.seed(parseInt(seed));
  setLocale(localeSelect.value);

  tbody.innerHTML = "";

  for (let i = 0; i < 10; i++) {
    const title = faker.lorem.words(Math.floor(Math.random() * 4 + 2));
    const author = faker.name.findName();
    const likes = Math.floor(
      parseFloat(avgLikesInput.value) + Math.random() * 5
    );
    const reviews = Math.floor(
      parseFloat(avgReviewsInput.value) + Math.random() * 5
    );
    const locale = localeSelect.value;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${title}</td>
      <td>${author}</td>
      <td>${likes}</td>
      <td>${reviews}</td>
      <td>${locale}</td>
    `;
    tbody.appendChild(row);
  }
});