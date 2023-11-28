
const url = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=294cefc235274ed984f361db5d9024df";

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    displaySportsNews(data.articles);
  })
  .catch(error => {
    console.error("Fetch error:", error);
  });

// Display sports news articles
function displaySportsNews(articles) {
  const sportsContainer = document.getElementById('sports-container');

  articles.forEach(article => {
    const articleDiv = document.createElement('div');
    articleDiv.classList.add('article');

    const title = document.createElement('h2');
    title.textContent = article.title;

    const description = document.createElement('p'); // Fix: Specify the element type
    description.textContent = article.description;

    const source = document.createElement('p');
    source.textContent = `Source: ${article.source.name}`;

    const image = document.createElement('img');
    image.src = article.urlToImage;
    image.alt = article.title;

    const youtubeLink = document.createElement('a');
        youtubeLink.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(article.title)}`;
        youtubeLink.textContent = 'Watch videos ';
        youtubeLink.classList.add("bottom")


    articleDiv.appendChild(title);
    articleDiv.appendChild(description);
    articleDiv.appendChild(source);
    articleDiv.appendChild(image);
    articleDiv.appendChild(youtubeLink)

    sportsContainer.appendChild(articleDiv);
  });
}
