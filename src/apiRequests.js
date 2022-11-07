const API_KEY = process.env.REACT_APP_API_KEY;

export const apiRequests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US&append_to_response=videos`,
};
