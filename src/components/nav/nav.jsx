import "./nav.css";
function Nav(props) {
  return (
    <nav class="nav">
      <ul class="nav_elements">
        <li class="nav_element">
          <a href="#home" class="nav_link">
            {props.first}
          </a>
        </li>
        <li class="nav_element">
          <a href="#product" class="nav_link">
            {props.second}
          </a>
        </li>
        <li class="nav_element">
          <a href="#contact" class="nav_link">
            {props.third}
          </a>
        </li>
        <li class="nav_element">
          <a href="#about" class="nav_link">
            {props.fourth}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
