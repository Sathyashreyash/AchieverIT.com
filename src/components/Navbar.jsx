import { useState } from 'react'
import '../css/navbar.css'
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const [hamburgerMenu, setHamburgerMenu] = useState(false)

  return (
    <div>
        <nav>
                <div className='hamburger-menu' onClick={() => setHamburgerMenu(!hamburgerMenu)}>
                < RxHamburgerMenu />
                </div>
            <ul className={hamburgerMenu ? 'showMenu' : 'hideMenu'}>
                <li>All Courses</li>
                {/* <ul>
                    <li>Front End Courses</li>
                    <ul>
                        <li>Angular Course Training</li>
                        <li>React Course Training</li>
                        <li>Web Development Course Training</li>
                    </ul>
                    <li>Full stack Course</li>
                    <li>Cloud Computing</li>
                    <li>Data Science</li>
                    <li>Artificial Intalligence</li>
                </ul> */}
                <li>Corporate Training</li>
                <li>Placements</li>
                <li>Internship</li>
                <li>Reviews</li>
                <li>Blog</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar