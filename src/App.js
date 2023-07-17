import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Services from "./components/services";
import Header from "./components/header";
import About from "./components/about";
import Heroslider from "./components/heroslider";
import Works from "./components/works";
import Teams from "./components/teams";
import Testimonials from "./components/testimonials";
import Pricing from "./components/pricing";
import Blog from "./components/blog";
import Contact from "./components/contact";
import Footer from "./components/footer";
function App() {
  return (
    <div className="App">
      <header id="header">
        <Header />
      </header>
      <main>
        <Heroslider />
        <About/>
        <Services/>
        <Works/>
        <Teams/>
        <Testimonials/>
        <Pricing/>
        <Blog/>
        <Contact/>

      </main>
      <footer id="footer">
      <Footer/>
      </footer>

    </div>
  );
}

export default App;
