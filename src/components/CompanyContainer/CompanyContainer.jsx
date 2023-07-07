import React from 'react'
import './CompanyContainer.css'

import CompanyProfile from "../../images/company-profile.png";

function CompanyContainer({role, company, keywords, requirements, salary, worktime}) {
  return (
    <div className='CompanyContainer'>
        <div className="company-profile-photo">
            <img src={CompanyProfile} alt="" />
        </div>
        <div className="company-content">
            <div className="company-content-information">
                <div className="company-content-information-heading">
                    <p>{role}, {company}</p>
                </div>
                <div className="company-content-information-keywords">
                    <p>{keywords}</p>
                </div>
                <div className="company-content-information-requirements">
                    <p>Requirements: {requirements}</p>
                </div>
                <div className="company-content-information-apply">
                    <button type='submit'>Apply Now</button>
                    <p>View More</p>
                </div>
            </div>
            <div className="company-content-terms">
                <div className="company-content-terms-salary">
                    <p>Salary</p>
                    <p>{salary}</p>
                </div>
                <div className="company-content-terms-workTime">
                    <p>Work Time</p>
                    <p>{worktime}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CompanyContainer