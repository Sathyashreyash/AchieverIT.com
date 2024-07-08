// import React from 'react'
import '../css/achieverEdge.css'
import { FaCheck, FaInfinity, FaChartLine  } from "react-icons/fa";
import cognizant from '../assets/img/cognizant.png'
import accenture from '../assets/img/accenture.png'
import infosys from '../assets/img/infosys.png'
import dell from '../assets/img/dell.png'
import hcl from '../assets/img/hcl.png'
import ibm from '../assets/img/ibm.png'
import oracle from '../assets/img/oracle.png'
import visa from '../assets/img/visa.png'
import amazon from '../assets/img/amazon.png'
import flipkart from '../assets/img/flipkart.png'
import { FaLocationPin } from "react-icons/fa6";
import achieverit_jobs from '../data/achieverIt_jobs'
import ourClient from '../data/img'
import allBranches from '../data/OurBranches';


const companyLogos = [
    cognizant, 
    accenture,
    infosys,
    dell,
    hcl,
    ibm,
    oracle,
    visa,
    amazon,
    flipkart
]


const achieverEdge = () => {
  return (
    <div className='achievEdge'>
            <h4 >Acheivers IT Edge</h4>
        <div className='edgeList'>    
        <div className='list'>
        <p className='icon icon-1'><FaCheck /></p>
        <p className='doubt'>Real Time Doubt Resolution</p>
        <p>With Live Instructors</p>
        </div>
        <div className='list'>
        <p className='icon icon-2'><FaInfinity/></p>
        <p className='doubt'>Real Time Doubt Resolution</p>
        <p>With Live Instructors</p>
        </div>
        <div className='list'>
        <p className='icon icon-3'>24/7</p>
        <p className='doubt'>Real Time Doubt Resolution</p>
        <p>With Live Instructors</p>
        </div>
        <div className='list'>  
        <p className='icon icon-4'><FaChartLine /></p>
        <p className='doubt'>Real Time Doubt Resolution</p>
        <p>With Live Instructors</p>
        </div>
        </div>
        <div className='course-trend'>
            <h3>Why We are on TOP 1</h3>
            <p>More people train with AcheiversIT because of ourcommitment to quality, Placement Support, and Real-time Training.</p>
            <div className='group-container'>
            <div className='group'>
                <p className='score'>135 + </p>
                <p className='group-d'>TRENDING COURSES</p>
            </div>
            <div className='group'>
                <p className='score'>60 + </p>
                <p className='group-d' >IT Companies are tied-UP to hire our trained students</p>
            </div>
            <div className='group'>
                <p className='score'>25 + </p>
                <p className='group-d'>Students attend Interviews every day through our Placement Cell</p>
            </div>
            <div className='group'>
                <p className='score'>3 + </p>
                <p className='group-d'>Of our students Get Jobs every day in Bangalore and India</p>
            </div>
            </div>
        </div>
        <div className='achievEdge'>
            <h4>Our Trainers From</h4>
            <div className=''>
                {
                    companyLogos.map((img, i)=> (
                        <div key={i} className='logo-container'>
                            <img src={img} alt="companyLogos" width={200} height={100}/>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className='latest-job-container'>
            <h4>Latest Job Openings</h4>
            <div className='job-list'>
                    {
                        achieverit_jobs.map((item, i) => (
                            <div key={i} className='job-heading'>
                                <div className='job-title'>
                                <h4>{item.jobTitle}</h4>
                                <p>{item.location}</p>
                                </div>
                                <div className='ul-toggle'>
                                <ul className='ul-details'>
                                    <li className='job-roles'>{item.detailesOfJob.jobRoles1}</li>
                                    <p>{item.detailesOfJob.jobRolesInDetails1}</p>
                                    <li className='job-roles'>{item.detailesOfJob.jobRoles2}</li>
                                    <p>{item.detailesOfJob.jobRolesInDetails2}</p>
                                    <li className='job-roles'>{item.detailesOfJob.jobRoles3}</li>
                                    <p>{item.detailesOfJob.jobRolesInDetails3}</p>
                                    <li className='job-roles'>{item.detailesOfJob.jobRoles4}</li>
                                    <p>{item.detailesOfJob.jobRolesInDetails4}</p>
                                    <li className='job-roles'>{item.detailesOfJob.jobRoles5}</li>
                                    <p>{item.detailesOfJob.jobRolesInDetails5}</p>
                                </ul>
                                </div>
                            </div>
                        ))
                    }
            </div>
        </div>
        <div>
            <div className='achieverEdge-3'>
                <p><b>Acheivers IT !</b> for business</p>
                <h3>No more dull edges in your company.Make your employees into masters....</h3>
                <h4>Nurture talent with instructor-led courses on trending technologies</h4>
                <button  type="button">BUSINESS CONTACT</button>
            </div>
        </div>
        <div className="our-clients">
            <div>
                <h4>Our Corporate Clients</h4>
                <div className='ourClients'>
                    {ourClient.map((list, index) => (
                        <div key={index} className='ourClientLogo'>
                            <img src={list} alt="client-Logo" width={140}/>
                        </div>
                    )) }
                </div>
            </div>
        </div>
        <div className="toKnowUsBetterFuture">
            <div className="toAbout">
                <h1>KNOW US BETTER FOR YOUR FUTURE !</h1>
                <p>We, AchieversIT are here to assist you in gaining the best deal of knowledge and landing at your dream job. Fresher or experienced, we always have a hope to hop into new domains and fields to quicken up the pace in our career growth. AchieversIT is dedicated to its services to enhance your skills to make a better move towards a better future in your career.</p>
                <p>AchieversIT has been delivering outstanding quality training in IT sector courses. 8 years of experience in furnishing qualitative training, AchieversIT has gained its own fame in leading an individual to land at their dream job.</p>
                <p>Are you looking out for a job or job switch? Despite the fact that your background relates to technical or non-technical, you can always find a choice for you with us. AchieversIT is your best training partner to help you move forward in your career with confidence and ample amount of knowledge. AchieversIT provides different trainings to boost up your vocation, namely :</p>
            </div>
            <div className='contact-us' >
                <h3>Impressed by Us? Enroll Now</h3>
                <p>Structure your learning and get a certificate to prove it.</p>
                <form>
                    <div className='input'>
                    <label htmlFor="">EMAIL</label>
                    <input type="email" placeholder='Email' required/>
                    </div>
                    <div className='input'>
                    <label htmlFor="">CONTACT NUMBER</label>
                    <input type="number" placeholder='Contact Number' required/>
                    </div>
                    <div>
                    {/* <label htmlFor=""> </label>
                    <input type="button" value="REACH US" /> */}
                    <button type="button">REACT US</button>
                    </div>
                </form>
            </div>
        </div>
        <div>
            <div className='brache-container'>
                <h4>Locations</h4>
                <p>Come and discuss with us about your goals ,We transform your goals into success!!!</p>
                <div className='branches'>
                   {allBranches.map((item, index) =>(
                    <div key={index} className='location'>
                         <p className='location-names'><FaLocationPin />{item.location}</p>
                         <p>{item.address}</p>
                    </div>
                   ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default achieverEdge