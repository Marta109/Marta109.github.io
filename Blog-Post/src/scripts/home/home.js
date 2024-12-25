import UI from '../utils/utils.js';
import createHeader from '../header/createHeader.js';
import createPosts from './posts/createPosts.js';
import createBloggerCard from './createBloggerCard.js';
import { createFooter, updateFooter } from '../footer/createFooter.js';
import {
  toggleThem,
  logOutHandler,
  createPostHandler,
} from '../header/headerBtnHandlers.js';
import postHandler from './posts/postHandler.js';

const bloggers = await createBloggerCard();
const posts = await createPosts();

function createHomeLayout() {
  const container = UI.createElement('div', { class: 'container-root' }, [
    createHeader([
      { name: 'Sign In', href: '../../index.html' },
      { name: 'Sign Up', href: './registration.html' },
    ]),
    UI.createElement('main', { class: 'main-section' }, [
      UI.createElement('nav', { class: 'sidebar' }, [
        UI.createElement('div', { class: 'container' }, [...bloggers]),
      ]),
      UI.createElement('div', { class: 'section' }, [...posts, createFooter()]),
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
postHandler();
