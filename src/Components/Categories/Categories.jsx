
import './Categories.css';

import dress from '../Assets/dress.jpg';
import top from '../Assets/top.jpg';
import bottom from '../Assets/bottom.jpg';
import jacket from '../Assets/jacket.jpg';
import accessories from '../Assets/accessories.jpg';
import shoes from '../Assets/shoes.jpg';

const CategoryItem = ({ imageSrc, categoryTitle }) => {
  return (
    <div>
      <img src={imageSrc} alt={categoryTitle} className='items-img'/>
      <p className='items-name'>{categoryTitle}</p>
    </div>
  );
};

function Categories () {
  const categoryData = [
    { image: dress, title: 'Dresses' },
    { image: top, title: 'Tops' },
    { image: bottom, title: 'Bottoms' },
    { image: jacket, title: 'Jackets' },
    { image: accessories, title: 'Accessories' },
    { image: shoes, title: 'Shoes' },
  ];
  return (
    <div className='categories-container'>
      <h1 className='title'>Women’s Categories</h1>
    <div className='categorie-items'>
      {categoryData.map((category, index) => (
        <CategoryItem key={index} imageSrc={category.image} categoryTitle={category.title} />
      ))}
    </div>  
    </div>
  );
};

export default Categories;
