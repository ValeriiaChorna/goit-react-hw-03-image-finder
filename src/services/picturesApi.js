import axios from 'axios';

const myAPIkey = '14835218-5a07f5973194d6dde6acf6e17';
const BASE_URL = 'https://pixabay.com/api/';

const fetchPicturesWithQuery = (searchQuery, page = 1) => {
  return axios
    .get(
      `${BASE_URL}?q=${searchQuery}&page=${page}&key=${myAPIkey}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};

export default {
  fetchPicturesWithQuery,
};
