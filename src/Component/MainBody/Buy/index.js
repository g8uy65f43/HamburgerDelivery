import React from 'react'
import BuyCSS from "./Buy.module.css"
import Backdrop from "../../UI/Backdrop/index"

export default function BuyUI(props) {
    const { count } = props
    return (
        <div>
            <Backdrop onClick={props.CXL} />
            <p className={BuyCSS.cslbt} onClick={props.CXL}><i className={"icofont-brand-nexus"}></i></p>
            <div className={BuyCSS.gootBox} >
                <span className={BuyCSS.gootBoxText}>確認訂單</span>
                <hr />
                {count.map(v => {
                    return (
                        <div key={v.id} >
                            <ul className={BuyCSS.goots}>
                                <li className={BuyCSS.gootimg} >
                                    <img src={v.img} alt="gootsimg" />
                                </li>
                                <li className={BuyCSS.gootText}>
                                    <span className={BuyCSS.maney}><h3>{v.title}</h3><h3>   x {v.count}</h3></span>
                                </li>

                            </ul>

                        </div>
                    )
                })}

            </div>
            {props.gopay !== 2 ? props.render() : null}
        </div>
    )
}

