let _url = "http://localhost:3001/api/photo-gallery-feed-page/page";

export const getFeeds = async (page) => {
  let options = {
    method: "GET",
  };

  let response = await fetch(`${_url}/${page}`, options);
  let data = await response.json();
  return data;
};
