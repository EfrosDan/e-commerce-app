import { useState, useEffect } from 'react'
import { PRODUCTS } from '../../../products'
import Product from './product'
import { Link } from 'react-router-dom';
import "./shop.css"
import Products from '../../Products/Products';
import Nav from './Nav';
import Sidebar from '../sidebar/Sidebar';


const Shop = (props) => {
  const [selectedCategory, setSelectedCategory] = useState(null)

  //----------------Sort Option-----------------

  const [sortedType, setSortedType] = useState('ascending')
  
  const handleSortChange = event => {
    (setSortedType(event.target.value));
  };

  
  // useEffect(()=>{
  //   const sortedArray = [...sortedData].sort((a, b) => {
  //     return sortedType === 'ascending' ? (a.brand - b.id) : (b.id - a.id);
  //   })
  
  //   setSortedData([...sortedArray])
  // },[sortedType])

   
  // const sortArray = type => {
  //     const types = {
  //       ascending : 'ascending',
  //       descending : 'descending',
  //     };
  //     const sortProperty = types[type];
  //     const sorted = [...PRODUCTS].sort((a,b) => b[sortProperty] - a[sortProperty]);
  //     console.log(sorted);
  //     setSortData(sorted)
  //   };

  //-----------Input Filter----------
    const [query,setQuery] = useState("");

    const handleInputChange = event => {
        setQuery(event.target.value);
    }

    const filteredItems = PRODUCTS.filter((product) => 
        product.brand.toLowerCase().indexOf(query.toLowerCase())!== -1);

    //-----------Radio Filter---------------
    const handleChange = event => {
        setSelectedCategory(event.target.value)
    }

    //------------Button Filtering---------
    const handleClick = (event) =>{
        setSelectedCategory(event.target.value)
    };

    function filteredSortedData(products, selected, query, sorted) {
        let filteredSortedProducts = products;

        //Filtering Input Items
        if (query) {
          filteredSortedProducts = filteredItems;
        }

        if (selected) {
          filteredSortedProducts = filteredSortedProducts.filter(
                ({type, brand, price}) =>
                type === selected ||
                brand === selected ||
                price === selected
            );
        }

        if (sorted) {
          filteredSortedProducts = sortedType === 'price-ascending'
          ? [...filteredSortedProducts].sort((a, b) => a.price - b.price)
          : sortedType === 'price-descending'
          ? [...filteredSortedProducts].sort((a, b) => b.price - a.price)
          : sortedType === 'ascending'
          ? [...filteredSortedProducts].sort((a, b) => (a.brand - b.brand ? -1 : 1))
          : [...filteredSortedProducts].sort((a, b) => (a.brand - b.brand ? 1 : -1))
        }

        return filteredSortedProducts.map(
            ({type,brand,model,price,productImg,color}) => (
                <Product
                key={Math.random()}
                type={type}
                brand={brand}
                model={model}
                price={price}
                productImg={productImg}
                color={color}
                />
            )
        );
    }
    const result = filteredSortedData(PRODUCTS, selectedCategory, query, sortedType);
    
  const {title} = props;
  
  return (
     <div className='shop'>
      <div className="bar">
      <p> <Link to="/"> Home</Link> / {title}</p>
      </div>
      <div className="shopTitle">
        <h1>All Products </h1>
      </div>
      <div className="grid-container">
        <Sidebar handleChange={handleChange} handleClick={handleClick}/>
        <div className="form-options">
          <Nav query={query} handleInputChange={handleInputChange} handleSortChange={handleSortChange} sortedType={sortedType}/>
          <Products result={result} />
        </div>
      </div>
    </div>
  )
}

export default Shop
