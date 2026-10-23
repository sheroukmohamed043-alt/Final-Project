import React, { useState, useContext } from 'react';
import AllCompo from '../Components/AllCompo';
import Footer from '../Components/Footer';
import { CartProvider } from 'react-use-cart';
import {apiValue} from '../Data/AllData';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
 


function Page (){
  const {addItem} = useCart();
    const data = useContext(apiValue);
    const [search,setSearch] = useState("All");

    const getValue = (sherouk) => {
       setSearch(sherouk);
    }
    return(
        <div>
            <div className='section properties'> 
               <div className='container'>
                  <ul className="properties-filter">
      <li>
        <button className={search=="All"?"is_active":""} onClick={()=>getValue("All")}>
          Show All
        </button>
      </li>
      <li>
        <button className={search=="beauty"?"is_active":""} onClick={()=>getValue("beauty")}>
          beauty
        </button>
      </li>
      <li>
        <button className={search=="fragrances"?"is_active":""} onClick={()=>getValue("fragrances")}>
          fragrances
        </button>
      </li>
      <li>
        <button className={search=="furniture"?"is_active":""} onClick={()=>getValue("furniture")}>
          furniture
        </button>
      </li>
                 </ul> 
                 <div className="row properties-box">
                    {data.map( (item)=> {
                        return search =="All"?(
                              <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 adv">
        <div className="item">
          <a href="property-details.html">
            <img src={item.images[0]} alt="" />
          </a>
          <span className="category">{item.category}</span>
          <h6>${item.price}</h6>
          <h4>
            <a href="property-details.html">{item.title}</a>
          </h4>
          <ul>
            <li>
              Brand: <span>{item.brand}</span>
            </li>
            <li>
              Stock: <span>{item.stock}</span>
            </li>
            
            <li>
              id: <span>{item.id}</span>
            </li>
            
          </ul>
          <div className="main-button">
            <Link to={`/singleproduct/${item.id}`}>Details</Link>
            <button onClick={()=>addItem(item)}>Add To Cart</button>
          </div>
        </div>
                               </div>
                        ):item.category == search?(
                          <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 adv">
        <div className="item">
          <a href="property-details.html">
            <img src={item.images[0]} alt="" />
          </a>
          <span className="category">{item.category}</span>
          <h6>${item.price}</h6>
          <h4>
            <a href="property-details.html">{item.title}</a>
          </h4>
          <ul>
            <li>
              Brand: <span>{item.brand}</span>
            </li>
            <li>
              Stock: <span>{item.stock}</span>
            </li>
            
            <li>
              id: <span>{item.id}</span>
            </li>
            
          </ul>
          <div className="main-button">
             <Link to={`/singleproduct/${item.id}`}>Details</Link>
          </div>
        </div>
                               </div>
                        ):null
                    } )}
                 </div>
               </div>
           </div>
         </div>
    )
}
function AllProducts() {
  return(
   <CartProvider>
      <AllCompo/>
      <Page/>

      <Footer/>
   </CartProvider>
    )
}

export default AllProducts;
