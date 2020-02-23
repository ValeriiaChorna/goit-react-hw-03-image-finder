import axios from 'axios';

const fetchPicturesWithQuery = (searchQuery, page = 1) => {
  const myAPIkey = '14835218-5a07f5973194d6dde6acf6e17';
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${myAPIkey}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};

export default {
  fetchPicturesWithQuery,
};
