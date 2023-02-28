import './style.scss'

const Modal = ({ imageSrc, imageTag, isActive, setIsActive }) => {
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
