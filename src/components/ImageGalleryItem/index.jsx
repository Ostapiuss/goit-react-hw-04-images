import {useState} from "react";

import Modal from "components/Modal";

import './style.scss';

const ImageGalleryItem = ({ imageSrc, imageTag }) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <li className="ImageGalleryItem" onClick={() => setActive(true)}>
        <img src={imageSrc} alt={imageTag} className="ImageGalleryItem-image"/>
      </li>
      <Modal imageSrc={imageSrc} imageTag={imageTag} isActive={active} setIsActive={setActive}/>
    </>
  )
}

export default ImageGalleryItem;
