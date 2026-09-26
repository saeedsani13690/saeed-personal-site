import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Link } from 'react-router-dom'
import { useTheme } from '../contaxt/Themecontaxt'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useEffect, useState } from 'react';


function Headeritem () {


  const expand = 'md'
  const { darkMode, toggleTheme } = useTheme()


  const[scrolled, setScrolled]=useState(false)
  useEffect(()=>{
const handlescroll=()=>{
if(window.scrollY>30){
  setScrolled(true)
}
else{
  setScrolled(false)
}
}

window.addEventListener("scroll",handlescroll)
return ()=>window.removeEventListener("scroll",handlescroll)


  },[])







  return (
    <>

    
<header className='bg-white text-black dark:bg-gray-900 dark:text-white'>
<Navbar
  key={expand}
  expand={expand}
  className={`transition-all duration-300 ease-in-out z-50 h-[64px] ${
    scrolled
      ? 'fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-md'
      : darkMode
      ? 'bg-gray-900 text-white'
      : 'bg-red-100 text-black'
  }`}
>


         <Container
  fluid
  className={`flex justify-between items-center transition-all duration-700 ${
    scrolled ? 'py-2' : 'py-4'
  }`}
>

            <Navbar.Brand href='#' className='fw-bold'>
              saeed sani <strong className='text-blue-500'>developer</strong>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

            <div>
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement='end'
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title
                    className='mx-4'
                    id={`offcanvasNavbarLabel-expand-${expand}`}
                  >
                    saeed sani
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className='justify-content-end flex-grow-1 pe-3 gap-2'>
                    <Link
                      to='/'
                      className='px-4 font-bold py-2 rounded-lg font-vazirmatn text-lg text-gray-800 dark:text-white hover:text-blue-600 transition'
                    >
                      صفحه اصلی
                    </Link>

                    <Link
                      to='/about'
                      className='px-4 font-bold py-2 rounded-lg font-vazirmatn text-lg text-gray-800 dark:text-white hover:text-blue-600 transition'
                    >
                      درباره من
                    </Link>

                    <Link
                      to='/article'
                      className='px-4  font-bold py-2 rounded-lg font-vazirmatn text-lg text-gray-800 dark:text-white hover:text-blue-600 transition'
                    >
                      مقالات
                    </Link>

                  
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </div>

            <div className='flex flex-nowrap items-center gap-x-4 sm:gap-x-2 '>
              <Link
                to='/callme'
                className='inline-flex items-center  bg-black text-white rounded-3xl px-4 py-2 font-vazirmatn hover:bg-gray-800 transition'
              >
               
                تماس با من
              </Link>
              <button
                onClick={toggleTheme}
                className='px-4 py-2 mx-2 rounded-full  bg-red-500 text-white '
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
            </div>
          </Container>
        </Navbar>
      </header>
      {scrolled && <div className="h-[64px]"></div>}

    </>
  )
}
export default Headeritem
