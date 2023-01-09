const subredditCount = 4;
//const accessToken = 'YOUR_ACCESS_TOKEN_HERE';

fetch('https://oauth.reddit.com/api/v1/me', {
  headers: {
    'Authorization': `bearer ${accessToken}`,
    'User-Agent': 'MyApp/1.0'
  }
})
  .then(response => response.json())
  .then(data => {
    const subredditGrid = document.getElementById('mainContent-subredditGrid');
    const subreddits = data.data.subreddit;
    for (let i = 0; i < subredditCount; i++) {
      const subreddit = subreddits[i];
      // Create the subreddit box
      const subredditBox = document.createElement('div');
      subredditBox.classList.add('mainContent-subredditBox');
      // Add the subreddit image
      const subredditImage = document.createElement('img');
      subredditImage.classList.add('mainContent-subredditImage');
      subredditImage.src = subreddit.icon_img;
      subredditBox.appendChild(subredditImage);
      // Add the subreddit name
      const subredditName = document.createElement('div');
      subredditName.classList.add('mainContent-subredditName');
      subredditName.textContent = subreddit.display_name;      
      subredditBox.appendChild(subredditName);
      // Add the subreddit box to the grid
      subredditGrid.appendChild(subredditBox);
    }
  });
