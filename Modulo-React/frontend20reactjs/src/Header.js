import './Header.css';

export default function Header(props) {
  return (
    <div className="Header">
        <div className="headerLogo">
            <h2>logo</h2>
        </div>
      <div className="headerMenu">
          <a href="">Home</a>
          <a href="">Sobre</a>
      </div>
    </div>
  );
}

 