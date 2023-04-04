import './style.scss'
import {useEffect} from "react";

const Modal = ({ imageSrc, imageTag, isActive, setIsActive }) => {

  const onEscClose = (keyEvent) => {
    if (keyEvent.key === 'Escape') {
      setIsActive(false)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', onEscClose);

    return () => {
      window.removeEventListener('keydown', onEscClose)
    }
  // eslint-disable-next-line
  }, []);

  return (
    <>
      {
        isActive && (
          <div className="Overlay" onClick={() => setIsActive(false)}>
            <div className="Modal" onClick={(e) => e.stopPropagation()}>
              <img src={imageSrc} alt={imageTag} />
            </div>
          </div>
        )
      }
    </>
  )
}

export default Modal;
