import React from 'react'
import AllCompo from '../Components/AllCompo'
import Footer from '../Components/Footer'
import HeadersContact from './HeaderContact'
import SectionContact from './SectionContact'
function AllContact() {
  return (
    <div>
      <AllCompo/>
     <HeadersContact/>
     <SectionContact/>
      <Footer/>
    </div>
  )
}
export default AllContact;
