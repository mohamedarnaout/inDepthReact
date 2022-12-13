import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/nav";
import Logo from "./media/Logo.png";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Logo2 from "./media/Logo2.png";

function App() {
  return (
    <div className="body">
      <Header image={Logo} />
      <Nav first="Home" second="Products" third="Contact" fourth="About" />
      <Main />
      <Footer image={Logo2} text="copyright Mangata Gallo" />
    </div>
  );
}

export default App;
