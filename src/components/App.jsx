import {useEffect, useState} from "react";

import SearchBar from "./SearchBar";
import ImageGallery from "./ImageGallery";

import { getImagesByCategory, uploadMoreImages } from "../api/gellary-api";

import { QUERY } from "../api/common";
import Loader from "./Loader";

import 'react-toastify/dist/ReactToastify.css';
import '../index.css';

export const App = () => {
  const [images, setImages] = useState([]);
  const [isUpdated, setIsUpdated] = useState(true);
  const [query, setQuery] = useState(null);
  const [page, setPage] = useState(1);

  const uploadMore = () => {
    setPage(page + 1);
  }

  const getSearchData = (text) => {
    setIsUpdated(false)
    getImagesByCategory(text, page).then(res => {
      setImages(res.hits);
      setIsUpdated(true)
    });
    setQuery(`${QUERY}&category=${text}`);
  }

  useEffect(() => {
    if (query) {
      setIsUpdated(false);
      uploadMoreImages(query, page).then(res => {
        setImages([...images, ...res.hits]);
        setIsUpdated(true)
      });
    }
  }, [page]);

  return (
    <div className="app">
      <SearchBar getSearchData={getSearchData} />
      {
        !isUpdated && (
          <Loader />
        )
      }
      <ImageGallery images={images} loadMore={uploadMore} />
    </div>
  );
};
