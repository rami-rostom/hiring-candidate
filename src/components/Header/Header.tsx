import logo  from '../../assets/dataleon.svg';
import './Header.css';

function Header() {
  return (
   <>
    <header className='header'>
      <a href="https://www.dataleon.ai/" target='_blank' className='header__logo'>
        <img src={logo} alt='Logo Dataleon'/>
      </a>
      <h1 className='header__title'>Hiring Quiz</h1>
      <a href="https://github.com/rami-rostom" target='_blank' className='header__name'>
        <p>Rami Rostom</p>
      </a>
    </header>
   </>
  );
}

export default Header;