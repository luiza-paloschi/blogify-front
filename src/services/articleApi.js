import api from './api';

export async function postArticle(body, token) {
  const response = await api.post('/articles', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  return response.data;
}