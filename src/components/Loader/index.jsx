import DotLoader from 'react-spinners/ClipLoader';

export default function Loader() {
  return (
    <div className="Overlay">
      <DotLoader size={250} color={'#3f51b5'} className="loader" />
    </div>
  );
}
