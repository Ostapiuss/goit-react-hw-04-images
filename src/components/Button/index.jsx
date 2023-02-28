import './style.scss';

const Button = ({ typeButton, textContent, onUpload }) => {
  return (
    <>
      <button type="button" className={`Button ${typeButton}`} onClick={onUpload}>
        { textContent }
      </button>
    </>
  )
}

export default Button;
