
import './App.css';
import NavBar from './components/NavBar'; // Adjust the file name and casing here
import Banner from './components/Banner';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Newsletter from './components/Newsletter';
import Projects from './components/Projects';
import Skills from './components/Skills';
function App() {
  return (
    <>
<NavBar />
      <Banner />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer/>

</>
   
  );
}

export default App;
