import React from 'react'
import UI from "./UI.module.css"
export default function index(props) {
  const { count, id, price, employ, title, img } = props
  function addOrMinus(id, type) {
    employ(id, type, price, title, img)
  }
  function judgeCount() {
    if (count instanceof Array) {
      let data = count.find(v => {
        return v.id === props.id
      })
      return data ? data.count : ""
    }
    return
  }
  return (
    <ul className={UI.ulbox}>
      {count instanceof Array && count !== 0 ? judgeCount() !== "" && judgeCount() !== 0 ? <>
        <li onClick={v => addOrMinus(id, "minus")}><i className="icofont-minus-circle"></i></li>
        <li> {judgeCount()}</li>
      </>
        : "" : ""}
      <li onClick={v => { addOrMinus(id, "plus") }} ><i className="icofont-plus-circle"></i></li>
    </ul>
  )
}
