import Tilt from 'react-parallax-tilt'
import brain from '../assets/brain.png'

function Logo() {
  return (
    <Tilt tiltMaxAngleX={55} tiltMaxAngleY={55} style={{ height: 150, width: 150 }}>
      <div className="w-25 h-25 md:h-40  md:w-40 bg-gradient-to-r from-fuchsia-600 to-blue-500 p-4 rounded shadow-md ml-10">
        <img src={brain} alt="logo" className="w-full h-full object-contain" />
      </div>
    </Tilt>
  );
}

export default Logo;