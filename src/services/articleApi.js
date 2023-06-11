import api from './api';

export async function postArticle(body, token) {
  const response = await api.post('/articles', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  return response.data;
}

export async function getArticles() {
    const response = await api.get('/articles');
    return response.data;
}

export async function getArticleById(articleId) {
  const response = await api.get(`/articles/${articleId}`);
  return response.data;
}