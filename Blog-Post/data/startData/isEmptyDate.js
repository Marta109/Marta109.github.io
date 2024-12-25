import PostApi from '../postApi.js';
import { posts } from './startData.js';

const isEmptyDate = async function () {
  try {
    const data = await PostApi.getAllPosts();

    if (data.length >= 1) {
      return data;
    }

    const promises = posts.map((post) => PostApi.createPost(post));
    const createdPosts = await Promise.all(promises);
    return createdPosts;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

export default isEmptyDate;
