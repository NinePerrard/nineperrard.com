'use strict';
import '../styles/index.scss';

let articleId = 0;

setArticle(articleId);

function setOnClickListener() {
  document.querySelector('.article-img').addEventListener('click', () => {
    const oeuvres = document.querySelector('#oeuvres').children;
    const oeuvresSize = oeuvres.length;
    articleId++;
    if (articleId >= oeuvresSize) {
      articleId = 0;
    }
    console.log(articleId);
    setArticle(articleId);
  });
}

function setArticle(articleId) {
  console.log(articleId);
  const oeuvres = document.querySelector('#oeuvres').children;
  const articleContainer = document.querySelector('#article-container');
  const currentArticle = oeuvres[articleId];
  articleContainer.innerHTML = currentArticle.innerHTML;
  const legendContent = articleContainer.querySelector('.legend-content');
  let legendText = currentArticle.querySelector(
      'lang[code=' + navigator.language + ']');
  if (legendText == null) {
    legendText = currentArticle.querySelector('lang[code=fr-FR]');
  }
  legendContent.innerHTML = legendText.querySelector('p').innerHTML;
  setOnClickListener();
}
