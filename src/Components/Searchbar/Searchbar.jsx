import './Searchbar.css';
import { BiSearchAlt } from "react-icons/bi";

function Searchbar () {
  return(  
    <div className='center-container'>
      <div className='search-container'>
        <h1 className='search-title'>Buy, Sell, Find Your Style, Your Way</h1>
        <p className='search-text'>Where every second-hand treasure discovers a new home.</p>
        <div className='input-container'>
          <input type="text" placeholder='Search here...' />
          <BiSearchAlt size='20px' color='#716b6b' className='search-icon' />
        </div>
      </div>
    </div>
  );
}

export default Searchbar