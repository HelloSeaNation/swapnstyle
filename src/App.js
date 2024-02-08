
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Searchbar from './Components/Searchbar/Searchbar';
import Categories from './Components/Categories/Categories';
import Popular from './Components/Popular/Popular';
import Footer from './Components/Footer/Footer';





function App() {
  return (
    <div>
      <Navbar/>

      {/* main */}
      <Searchbar/>
      <Categories/>
      <Popular/>
      <Footer/>

   
    </div>
  );
}

export default App;
