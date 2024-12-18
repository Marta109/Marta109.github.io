import RecipeApi from '../../data/data.js';

const createRandomQuote = (selector = '#info-container') => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('card', 'quote-wrapper');
  RecipeApi.getRandomQuote().then((data) => {
    console.log(data);
    wrapper.innerHTML = ` 
    <div class="card-body">
    <h5 class="card-title">${data.author}</h5>
    <p class="card-text">
     ${data.quote}
    </p>
    <div class="links">
    <button type="button" id="new-quote" class="card-link">
    New Quote
    </button >
    
    <button type="button"  id="share-quote" class="card-link"
    href="${data.url}" target="_blank">
      Share
    </button >
    </div>
  </div>
    `;
  });

  const container = document.querySelector(selector);
  container.append(wrapper);
};

export default createRandomQuote;
