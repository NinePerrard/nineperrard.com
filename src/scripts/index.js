'use strict';
import '../styles/index.scss';

let articleId = 0;

setArticle(articleId);


document.querySelector('#left-arrow').addEventListener('click', () => {
  const oeuvres = document.querySelector('#oeuvres').children;
  const oeuvresSize = oeuvres.length;
  articleId = articleId - 1;
  if (articleId < 0) {
    articleId = oeuvresSize - 1;
  }
  setArticle(articleId);
});
document.querySelector('#right-arrow').addEventListener('click', () => {
  const oeuvres = document.querySelector('#oeuvres').children;
  const oeuvresSize = oeuvres.length;
  articleId++;
  if (articleId >= oeuvresSize) {
    articleId = 0;
  }
  setArticle(articleId);
});

function setOnClickListener() {
  document.querySelector('picture').addEventListener('click', () => {
    const oeuvres = document.querySelector('#oeuvres').children;
    const oeuvresSize = oeuvres.length;
    articleId++;
    if (articleId >= oeuvresSize) {
      articleId = 0;
    }
    setArticle(articleId);
  });
}

function setArticle(articleId) {
  const oeuvres = document.querySelector('#oeuvres').children;
  const articleContainer = document.querySelector('#article-container');
  const legendContainer = articleContainer.querySelector('.legend-container');
  const currentArticle = oeuvres[articleId];
  legendContainer.innerHTML = currentArticle.querySelector('.legend').innerHTML;
  // articleContainer.innerHTML = currentArticle.innerHTML;
  const legendContent = legendContainer.querySelector('.legend-content');
  let legendText = currentArticle.querySelector(
      'lang[code=' + navigator.language + ']');
  if (legendText == null) {
    legendText = currentArticle.querySelector('lang[code=fr-FR]');
  }
  legendContent.innerHTML = legendText.querySelector('p').innerHTML;
  const pictureContainer = articleContainer.querySelector('.picture-container');
  const currentPic = pictureContainer.querySelector('picture');
  if (currentPic != null) {
    pictureContainer.removeChild(currentPic);
  }
  const picture = currentArticle.querySelector('picture').cloneNode(true);
  pictureContainer.insertBefore(picture, pictureContainer.firstChild);
  setOnClickListener();
}
