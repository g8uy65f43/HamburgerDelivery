import React from 'react'
import MainBody from "./MainBody.module.css"
import Buy from "./Buy"
import LastCheck from "./LastCheck"
import { CXL } from "../../redux/actions/car"
import { connect } from "react-redux";
import { ADDCOUNT, MINUSCOUNT, RESETCOUNT } from "../../redux/actions/count"
import BottonC from "../UI/index"
function MainBodyUI(props) {
    const { count, gopay, Search, Gootsinfo } = props
    function employ(id, type, price, title, img) {
        switch (type) {
            case "plus":
                return props.ADDCOUNT({ id, count: 1, price, title, img })
            case 'minus':
                return props.MINUSCOUNT({ id, count: -1, price, title, img })
            default:
                break;
        }

    }
    return (
        <div className={MainBody.gootBox} >
            {gopay !== 0 ? gopay === 1 ? <Buy render={props.render} gopay={props.gopay} Gootsinfo={Gootsinfo} count={count} CXL={props.CXL} /> : <LastCheck CXL={props.CXL} RESETCOUNT={props.RESETCOUNT} Gootsinfo={Gootsinfo} count={count} /> : null}
            {Search !== null & Search !== 0 ? Search.map(v => {
                return (
                    <div className={MainBody.itemBox} key={v.id} >
                        <ul className={MainBody.goots}>
                            <li className={MainBody.gootimg}>
                                <img src={v.img} alt="gootsimg" />
                            </li>
                            <li className={MainBody.gootText}>
                                <span><h3>{v.title}</h3><p>{v['desc:']}</p></span>
                                <span className={MainBody.maney}><h3>$ {v.price}</h3><BottonC {...v} employ={employ} count={count} /></span>
                            </li>
                        </ul>
                    </div>
                )
            }) : Gootsinfo.map(v => {
                return (
                    <div className={MainBody.itemBox} key={v.id} >
                        <ul className={MainBody.goots}>
                            <li className={MainBody.gootimg}>
                                <img src={v.img} alt="gootsimg" />
                            </li>
                            <li className={MainBody.gootText}>
                                <span><h3>{v.title}</h3><p>{v['desc:']}</p></span>
                                <span className={MainBody.maney}><h3>$ {v.price}</h3><BottonC {...v} employ={employ} count={count} /></span>
                            </li>
                        </ul>

                    </div>
                )
            })}
            {props.gopay !== 2 ? props.render() : null}
        </div>
    )
}

export default connect(state => ({ count: state.Count, gopay: state.Gopay, Gootsinfo: state.Gootsinfo, Search: state.Search }), { ADDCOUNT, MINUSCOUNT, CXL, RESETCOUNT })(MainBodyUI)