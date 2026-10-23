import React from 'react'
import AllCompo from '../Components/AllCompo'
import Footer from '../Components/Footer'
import HeaderDetails from './HeaderDetails'
import SinglrProp from './SinglrProp'
import BestDeal from './BestDeal'
function AllDetails() {
  return (
    <div>
      <AllCompo/>
     <HeaderDetails/>
     <SinglrProp/>
     <BestDeal/>

      <Footer/>
    </div>
  )
}
export default AllDetails;
