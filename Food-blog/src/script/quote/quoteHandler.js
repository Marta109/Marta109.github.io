import RecipeApi from '../../data/data.js';
import getRandomQuoteByXML from '../../data/dataXml.js';

const quoteHandler = () => {
  const quoteWrapper = document.querySelector('.quote-wrapper');
  quoteWrapper.addEventListener('click', (e) => {
    console.log('jjj');
    if (e.target.id === 'new-quote') {
      // RecipeApi.getRandomQuote().then((data) => {   
      getRandomQuoteByXML((data) => {
        console.log('data xml', data);
        const quoteWrapper = document.querySelector('.quote-wrapper');
        const quoteTitle = quoteWrapper.querySelector('.card-title');
        quoteTitle.textContent = data.author;
        const quoteText = document.querySelector('.card-text');
        quoteText.textContent = data.quote;
      });
    } else if (e.target.id === 'share-quote') {
      const url = e.target.getAttribute('href');
      const author = quoteWrapper.querySelector('.card-title').textContent;
      const quote = quoteWrapper.querySelector('.card-text').textContent;
      const fullQuote = `"${quote}" — ${author}`;
      console.log(fullQuote);
      const shareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(fullQuote)}`;
      window.open(shareURL, 'facebook-share-dialog', 'width=626,height=436');
    }
  });
};

export default quoteHandler;
