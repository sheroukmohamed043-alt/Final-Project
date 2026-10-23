
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter ,RouterProvider } from 'react-router';
import { AllData } from './Data/AllData';
import AllCart from './Cart/AllCart';
import ScrollToTop from 'react-scroll-to-top';
import AllProp from './Properties/ALLProp';
import AllDetails from './Details/AllDetails';
import AllContact from './Contact/AllContact';
import AllProducts from './Products/AllProducts';
import AllSingleProduct from './SingleProduct/AllSingleProduct';
var sherouk = createBrowserRouter([
{
  path:"/",
  element:<App />
},
{
  path:"properties",
  element:<AllProp/>
},
{
  path:"details",
  element:<AllDetails />
},
{
  path:"contact",
  element:<AllContact />
},
{
  path:"products",
  element:<AllProducts />
},
{
  path:"singleproduct/:id",
  element:<AllSingleProduct />
},
{
  path:"cart",
  element:<AllCart />
},

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AllData>
    <ScrollToTop/>
  <RouterProvider router={sherouk} />
  </AllData>
);

 