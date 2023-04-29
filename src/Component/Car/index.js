import React from 'react'
import CarCSS from "./Car.module.css"
import { connect } from "react-redux";
import { GOPAY, LASTCHECK, } from "../../redux/actions/car"

function Car(props) {
  const { count, gopay } = props
  let gootstoto = null
  let alltoto = null
  function paygoots() {
    if (count instanceof Array && count !== 0 && alltoto !== 0) {
      const gootstotoarr = []
      const alltotoarr = []
      count.map(v => {
        gootstotoarr.push(v.count)
        return alltotoarr.push(v.price * v.count)
      })
      if(gootstotoarr instanceof Array && gootstotoarr.length >=1){
      gootstoto = gootstotoarr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      });
    }
    if (alltotoarr instanceof Array &&alltotoarr.length >=1) {
      alltoto = alltotoarr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      })
    }
      return true
    }
    return false
  }
  return (
    <div className={CarCSS.item}>
      <img className={CarCSS.CarImg} alt="carimg" src={require("../../asset/bag.png")} />
      <p className={CarCSS.carState}>
          {(paygoots())}
        <i>
          {gootstoto !== 0 && gootstoto !== null ? "已選擇" + gootstoto + "件，共" + alltoto + "元" : "未勾選商品"}
        </i>
        <button className={CarCSS.Gopay} onClick={v => gootstoto >= 1 ? gopay === 0 ? props.GOPAY() : props.LASTCHECK() : null} >
          {gopay !== 1 ? "去結算" : "確定"}
        </button>
        {gopay !== 2}
      </p>
    </div>
  )
}
export default connect(state => ({ count: state.Count, gopay: state.Gopay }), {
  GOPAY,
  LASTCHECK,
})(Car)
