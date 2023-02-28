import ImageGalleryItem from "components/ImageGalleryItem";
import Button from 'components/Button'

import './style.scss';

const ImageGallery = ({ images, loadMore }) => {
  return (
    <div className="ImageGallery">
      <ul className="ImageGallery-list">
        {
          images.map((image) => (
            <ImageGalleryItem imageSrc={image.largeImageURL}  imageTag={image.tags} key={image.id} />
          ))
        }
      </ul>
      {
        images.length > 0 && (
          <div className="btn-container">
            <Button typeButton='load-button' textContent='Load more' onUpload={loadMore} />
          </div>
        )
      }
    </div>
  )
}

export default ImageGallery;
