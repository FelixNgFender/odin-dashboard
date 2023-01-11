const subreddits = [
  'webdev',
  'computerscience',
  'cscareerquestions',
  'manga'
];

const fetchSubreddit = (subreddit) => {
  fetch(`https://www.reddit.com/r/${subreddit}/about.json`)
    .then(response => response.json())
    .then(data => {
      const subredditData = data.data;
      const subredditGrid = document.getElementById("mainContent-favoriteGrid");
      const subredditItem = document.createElement("li");
      const subredditLink = document.createElement("a");
      const subredditIcon = document.createElement("img");
      subredditIcon.src = subredditData.icon_img;
      subredditLink.href = `https://www.reddit.com/r/${subreddit}`;
      subredditLink.textContent = `r/${subreddit}`;
      subredditLink.target = "_blank";
      subredditLink.rel = "noopener noreferrer";
      subredditItem.classList.add("mainContent-favoriteItem");
      subredditIcon.classList.add("mainContent-favoriteIcon");
      subredditLink.classList.add("mainContent-favoriteLink");
      subredditItem.appendChild(subredditIcon);
      subredditItem.appendChild(subredditLink);
      subredditGrid.appendChild(subredditItem);
    });
}

subreddits.forEach(subreddit => fetchSubreddit(subreddit));
