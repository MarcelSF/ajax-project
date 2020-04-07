import Typed from 'typed.js';

const initTyped = () => {
  const options = {
    strings: ['Any movie you want!', 'Type a name and search!'],
    typeSpeed: 50,
    loop: true
  };

  const typed = new Typed('#typed', options);
}

export { initTyped }
