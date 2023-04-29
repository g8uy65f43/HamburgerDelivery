import React from 'react'
import SearchCSS from "./Search.module.css"
import { connect } from 'react-redux'
import { SEARCHGOOTS } from "../../redux/actions/search"
function Search(props) {
  const { Gootsinfo } = props
  const SearchRef = React.useRef()

  function SearchData() {
    const { value } = SearchRef.current
    const SreachArr = Gootsinfo.filter(v => {
      var reg = new RegExp("[" + v.title + "]")
      return reg.test(value)
    })
    props.SEARCHGOOTS(SreachArr)
  }
  return (
    <div className={SearchCSS.Mainsearch} >
      <div className={SearchCSS.searchBox}><i className="icofont-search-2"></i>
        <input type="text" placeholder='請輸入要查找的商品關鍵字' ref={SearchRef} onChange={SearchData} ></input>
      </div>
    </div>
  )
}


export default connect(
  state => ({ Searchdata: state.Search, Gootsinfo: state.Gootsinfo }), {
  SEARCHGOOTS
}
)(Search)