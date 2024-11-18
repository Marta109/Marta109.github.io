import createHeader from '../header/createHeader.js';
import createBloggerCard from './createBloggerCard.js';
import createPosts from './createPosts.js';
import { createFooter, updateFooter } from '../footer/createFooter.js';
import {
  toggleThem,
  logOutHandler,
  createPostHandler,
} from '../header/headerBtnHandlers.js';

function createHomeLayout() {
  const container = UI.createElement('div', { class: 'container-root' }, [
    createHeader([
      { name: 'Sign In', href: '../../index.html' },
      { name: 'Sign Up', href: './registration.html' },
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
logOutHandler();
createPostHandler();
