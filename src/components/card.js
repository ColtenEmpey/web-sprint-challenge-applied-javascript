import axios from "axios"
const {topics} = require('../mocks/data')

const Card = (article) => {
  const cardDiv = document.createElement("div")
  const headline = document.createElement("div")
  const author = document.createElement("div")
    const imgctnr = document.createElement("div")
      const img = document.createElement("img")
    const authorSpan = document.createElement("span")
  //add content
  cardDiv.classList.add("card")
  headline.classList.add("headline")
  headline.textContent = article.headline //to do
  author.classList.add("author")
  imgctnr.classList.add("img-container")
  img.src = article.authorPhoto //to do
  authorSpan.textContent = `By ${article.authorName}` //to do

  // appending childern
  cardDiv.appendChild(headline)
  cardDiv.appendChild(author)
  author.appendChild(imgctnr)
  imgctnr.appendChild(img)
  author.appendChild(authorSpan)

  //event listener
  cardDiv.addEventListener("click", () =>{
    console.log(article.headline)
  })
  return cardDiv
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {
  console.log("selector is: " + selector)
  axios.get("http://localhost:5001/api/articles")
  .then((res) =>{
    console.log(res)
    console.log(topics.topics)
    
    topics.topics.forEach((topic) => {
      let articleArray = res.data.articles[topic]
      console.log("Articles" + articleArray)
      
      articleArray.forEach((article) => {
        document.querySelector(selector).appendChild(Card(article));  
      })
    });

  })
  .catch((err) =>{
    console.error(err)
  })
  .finally(() =>{
    console.log("all done.")
  })
};

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //


export { Card, cardAppender }
