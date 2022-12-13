import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/nav";
import Logo from "./media/Logo.png";

function App() {
  return (
    <div className="body">
      <Header image={Logo} />
      <Nav first="Home" second="Products" third="Contact" fourth="About" />
    </div>
  );
}

export default App;
