import logo  from '../../assets/dataleon.svg';

function Header() {
  return (
   <>
    <header className='header'>
      <img src={logo} alt='Logo Dataleon' />
      <h1>Hiring Quiz</h1>
    </header>
   </>
  );
}

export default Header;