
import { useEffect } from 'react'
import { themeChange } from 'theme-change'

import { Route, Routes, Link } from 'react-router-dom';

import { Button, Navbar, Select } from 'react-daisyui';

import { HomePage } from '../pages/home-page/home-page'
import { ProfilePage } from '../pages/profile-page/profile-page'
import { BlankPage } from '../pages/blank-page/blank-page'

export function App() {
  const pageLinks = [
    {
      title:"Home",
      url:"/",
      element: HomePage
    },
    {
      title:"Profile",
      url:"/profile",
      element: ProfilePage
    },
    {
      title:"Blank",
      url:"/blank",
      element: BlankPage
    }
  ]
  const themeNames = [
    "neo4j", "nodes", "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"
  ]
  useEffect( () => {
    themeChange(false)
  }, [])

  return (
    <>

    </>
  );
}

export default App;
