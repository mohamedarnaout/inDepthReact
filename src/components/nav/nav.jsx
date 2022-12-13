import "./nav.css";
function Nav(props) {
  return (
    <nav className="nav">
      <ul className="nav_elements">
        <li className="nav_element">
          <a href="#home" className="nav_link">
            {props.first}
          </a>
        </li>
        <li className="nav_element">
          <a href="#product" className="nav_link">
            {props.second}
          </a>
        </li>
        <li className="nav_element">
          <a href="#contact" className="nav_link">
            {props.third}
          </a>
        </li>
        <li className="nav_element">
          <a href="#about" className="nav_link">
            {props.fourth}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
