import React from 'react'
import './MainContainer.css'

import {Navbar, SearchContainer, CompanyContainer, Footer} from '../../components';

function MainContainer() {
  return (
    <div className='MainContainer'>
        <Navbar />
        <SearchContainer />
        <div className="company-searches">
          <CompanyContainer role={"Front End Developer"} company={"Google LLC"} keywords={"Web Development, Software Engineering"} requirements={"React JS, Node JS, JQuery"} salary={"₹ 45,000 - ₹ 50,000"} worktime={"2 - 3 Months"} />
          <CompanyContainer role={"Back End Developer"} company={"Google LLC"} keywords={"Web Development, Software Engineering"} requirements={"React JS, Node JS, JQuery"} salary={"₹ 45,000 - ₹ 50,000"} worktime={"2 - 3 Months"} />
          <CompanyContainer role={"Full Stack Developer"} company={"Google LLC"} keywords={"Web Development, Software Engineering"} requirements={"React JS, Node JS, JQuery"} salary={"₹ 45,000 - ₹ 50,000"} worktime={"2 - 3 Months"} />
        </div>
        <Footer />
    </div>
  )
}

export default MainContainer