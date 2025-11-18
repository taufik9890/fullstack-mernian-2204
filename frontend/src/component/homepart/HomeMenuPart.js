'use client'
import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




 function HomeMenuBar() {
    const [posts, setPosts] = useState([])
    const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/product/viewcart`)
        const data = await res.json()
        setPosts(data)
      } catch (err) {
        console.error('Error fetching data:', err)
      }
    }
    fetchData()
  }, [])
    if (!isClient) return null
  return (
    <div className='menubar'>
        <div className='prjt-name'>
            <h2>Tronix</h2>
        </div>
        <div className='all-menu'>
                <Navbar expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse  className='menu-list'>
                    <Nav className="mx-auto">
                        <Nav.Link href="/" className='list-type'>Home</Nav.Link>
                        <Nav.Link href="/pages/about" className='list-type'>About</Nav.Link>
                        <Nav.Link href="/pages/product" className='list-type'>Product</Nav.Link>
                        <NavDropdown title="Blog" id="basic-nav-dropdown" className='list-type'>
                        <NavDropdown.Item href="/pages/blog">
                            Blog List
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/pages/blogdetails">
                            Blog Details
                        </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/" className='list-type'>Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
        </div>
        <div className='search-bar'>
            <div className='search-box'>
                <input type='text' placeholder='Search your item..'/>
                <div className='search-icon'>
                    <FaSearch/>
                </div>
            </div>
        </div>
        <div className='shopping-element'>
            <div className='shopping-icon'> 
                <MdOutlineShoppingBag/>
                
                <div className='number'><p>{isClient ? posts.length : 0}</p></div>
                {/* {
                    posts.map(()=>{
                        
                    })
                } */}
            </div>
            <div className='shopping-icon'>
                <MdMailOutline/>
            </div>
        </div>
    </div>
  )
}

export default HomeMenuBar
