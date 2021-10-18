import {  useEffect } from 'react';
// import PropTypes from 'prop-types';
import m from '../Modal/Modal.module.css';
// import ModalItem from './ModalItem';

export default function Modal({onClose,largeImageURL }) {
 useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
const handleKeyClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
   return (
      <div className={m.Overlay} onClick={handleKeyClick}>
        <div className={m.Modal}>
          <img src={largeImageURL} alt="" />
        </div>
      </div>
    );
}

// export default class Modal extends Component {
//   static propTypes = {
//     onClose: PropTypes.func.isRequired,
//     largeImageURL: PropTypes.string.isRequired,
//   };
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }
//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };
//   handleKeyClick = e => {
//     if (e.currentTarget === e.target) {
//       this.props.onClose();
//     }
//   };
//   render() {
//     return (
//       <div className={m.Overlay} onClick={this.handleKeyClick}>
//         <div className={m.Modal}>
//           <img src={this.props.largeImageURL} alt="" />
//         </div>
//       </div>
//     );
//   }
// }
