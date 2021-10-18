import React, { useState } from 'react';
import s from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [text, setText] = useState('');

  const hendleChange = e => setText(e.currentTarget.value.toLowerCase());

  const hendleSubmit = e => {
    e.preventDefault();

    if (text.trim() === '') {
      alert('Введите имя картинки');
      return;
    }
    onSubmit(text);
    setText('');
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={hendleSubmit}>
        <button type="submit" className={s.button}>
          <span className={s.lable}></span>
        </button>
        <input
          value={text}
          onChange={hendleChange}
          className={s.input}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

// class Searchbar extends Component {
//   static propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//   };

//   state = {
//     text: '',
//     webformatURL: '',
//     largeImageURL: '',
//     id: '',
//   };

//   hendleChange = e => {
//     this.setState({ text: e.currentTarget.value.toLowerCase() });
//   };

//   hendleSubmit = e => {
//     e.preventDefault();

//     if (this.state.text.trim() === '') {
//       alert('Введите имя картинки');
//       return;
//     }
//     this.props.onSubmit(this.state.text);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ text: '' });
//   };
//   render() {
//     return (
//       <header className={s.Searchbar}>
//         <form className={s.SearchForm} onSubmit={this.hendleSubmit}>
//           <button type="submit" className={s.button}>
//             <span className={s.lable}></span>
//           </button>
//           <input
//             value={this.state.text}
//             onChange={this.hendleChange}
//             className={s.input}
//             type="text"
//             autocomplete="off"
//             autofocus
//             placeholder="Search images and photos"
//           />
//         </form>
//       </header>
//     );
//   }
// }

// export default Searchbar;
