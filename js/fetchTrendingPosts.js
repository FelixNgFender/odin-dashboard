const postCount = 4;

fetch(
  `https://www.reddit.com/r/all/top/.json`
)
  .then((response) => response.json())
  .then((data) => {
    const postList = document.getElementById("mainContent-trendingPostGrid");
    for (let i = 0; i < postCount; i++) {
      const post = data.data.children[i];
      const postItem = document.createElement("li");
      const postLink = document.createElement("a");
      const postThumbnail = document.createElement("img");
      const postSubreddit = document.createElement("a");
      postLink.href = `https://reddit.com${post.data.permalink}`;
      postSubreddit.href = `https://reddit.com/${post.data.subreddit_name_prefixed}`;
      postSubreddit.textContent = post.data.subreddit_name_prefixed;
      postSubreddit.target = "_blank";
      postSubreddit.rel = "noopener noreferrer";
      postSubreddit.classList.add("mainContent-trendingPostSubreddit");
      postLink.textContent = post.data.title;
      postThumbnail.src = post.data.thumbnail;
      postLink.target = "_blank";
      postLink.rel = "noopener noreferrer";
      postItem.classList.add("mainContent-trendingPostItem");
      postThumbnail.classList.add("mainContent-trendingPostThumbnail");
      postLink.classList.add("mainContent-trendingPostLink");
      postItem.appendChild(postThumbnail);
      postItem.appendChild(postSubreddit);
      postItem.appendChild(postLink);
      postList.appendChild(postItem);
    }
  });
