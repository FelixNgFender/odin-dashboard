const username = "FelixNgFender";
const repoCount = 6;

fetch(
  `https://api.github.com/users/${username}/repos?sort=updated&per_page=${repoCount}`
)
  .then((response) => response.json())
  .then((repos) => {
    const repoGrid = document.getElementById("mainContent-repoGrid");
    for (const repo of repos) {
      // Create the repo box
      const repoBox = document.createElement("div");
      repoBox.classList.add("mainContent-repoBox");
      // Add the repo name
      const repoName = document.createElement("h3");
      repoName.classList.add("mainContent-repoName");
      repoName.textContent = repo.name;
      repoBox.appendChild(repoName);
      // Add the repo description (if it exists)
      if (repo.description) {
        const repoDescription = document.createElement("p");
        repoDescription.classList.add("mainContent-repoDescription");
        repoDescription.textContent = repo.description;
        repoBox.appendChild(repoDescription);
      }
      // Add the repo link
      const repoLink = document.createElement("a");
      repoLink.classList.add("mainContent-repoLink");
      repoLink.href = repo.html_url;
      repoLink.textContent = "View on GitHub";
      repoBox.appendChild(repoLink);
      // Add the repo box to the grid
      repoGrid.appendChild(repoBox);
    }
  });
``;
