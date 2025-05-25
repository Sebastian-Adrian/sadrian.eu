import axios from 'axios';

export const fetchRepos = async () => {
  try {
    const response = await axios.get('/api/github/repos');
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    throw error;
  }
}; 