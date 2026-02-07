import "./App.css";
import Footer from "./components/footer/footer.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Intro from "./components/ui/intro.jsx";
import Crypto from "./components/ui/crypto.jsx";
import Landing from "./components/ui/landing.jsx";
import Manage from "./components/ui/manage.jsx";
import Names from "./components/ui/names.jsx";
import Choose from "./components/ui/choose.jsx";


function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Crypto />
      <Landing />
      <Manage />
      <Names />
      <Choose />
      <Footer />
    </div>
  );
}

export default App;
