import React from 'react'
import Car from "./Component/Car"
import MainBody from "./Component/MainBody"
import Search from "./Component/Search"
import "./App.css"
export default function App() {
  return (
    <div className='main-Box'>
      <Search />
      <MainBody render={v=><Car/>}/>
    </div>
  )
}
