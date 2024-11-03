import createBloggerCard from './createBloggerCard.js';
import createPosts from './createPosts.js';
import { createFooter, updateFooter } from '../footer/footer.js';
import toggleThem from '../themeToggle.js';

function createHomeLayout() {
  const container = UI.createElement('div', { class: 'container-root' }, [
    UI.createElement('header', { class: 'header' }, [
      UI.createElement(
        'a',
        { class: 'btn btn-dark', href: '../../index.html' },
        'Sign In',
      ),
      UI.createElement(
        'a',
        { class: 'btn btn-dark', href: './registration.html' },
        'Sign Up',
      ),
      UI.createElement('button', { class: 'toggle-theme btn btn-dark' }, [
        UI.createElement('i', { class: 'fas fa-moon' }),
      ]),
    ]),
    UI.createElement('main', { class: 'main-section' }, [
      UI.createElement('nav', { class: 'sidebar' }, [
        UI.createElement('div', { class: 'container' }, [
          ...createBloggerCard(),
        ]),
      ]),
      UI.createElement('div', { class: 'section' }, [
        ...createPosts(),
        createFooter(),
      ]),
    ]),
  ]);

  UI.render(container, document.body);
}

setInterval(() => {
  updateFooter();
}, 1000);

createHomeLayout();
toggleThem();
