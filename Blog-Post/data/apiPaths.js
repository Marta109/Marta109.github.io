class ApiPaths {
  static baseUrl = 'https://simple-blog-api-red.vercel.app/api';

  static paths = {
    auth: {
      register: 'auth/register',
      login: 'auth/login',
    },
    posts: 'posts',
    users: 'users',
  };

  static getFullPath(path, other) {
    if (other) return `${this.baseUrl}/${path}/${other}`;
    return `${this.baseUrl}/${path}`;
  }
}

export default ApiPaths;
