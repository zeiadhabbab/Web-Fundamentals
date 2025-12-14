import { useEffect, useState } from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Outlet from './layout/Outlet'
import Home from './pages/Home'
import Forget from './pages/Forget'
import Login from './pages/Login'

function Router() {
  const [currentPage, setCurrentPage] = useState('home')

  const  changeRout = function(page:string){
    setCurrentPage(page);
    //We need to chnage the url in broser
     window.history.replaceState({}, page, window.location.origin + '/' + page);
  }


  useEffect(()=>{
    let url = window.location.pathname;
    url = url.replace('/', '');
    setCurrentPage(url);

  }, [])

  return (
    <>
      <Header handleRoutChange={changeRout}/>
        <Outlet>
          {currentPage == 'home' && <Home/>}
          {currentPage == 'forget' && <Forget/>}
          {currentPage == 'login' && <Login/>}
        </Outlet>
      <Footer/>
    </>
  )
}

export default Router
