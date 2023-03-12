import { HTTP, QUERY } from "./common";

export async function getImagesByCategory (category, page) {
  try {
    return await HTTP.get(`${QUERY}&page${page}&per_page=12&q=${category}`);
  } catch (e) {
    console.log(e)
  }
}

export async function uploadMoreImages(query, page) {
  try {
    return await HTTP.get(`${query}&page=${page}&per_page=12`);
  } catch (e) {
    console.log(e)
  }
}
