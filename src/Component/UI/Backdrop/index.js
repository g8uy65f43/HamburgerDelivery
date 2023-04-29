import React from 'react'
import Backdrop from './Backdrop.module.css'
export default function index(props) {
  return (
    <div className={Backdrop.Backdrop} {...props} ></div>
  )
}
