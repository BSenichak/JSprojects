import React from 'react'
import { connect } from 'react-redux'
import s from "./products.module.css"

export const ProductList = (props) => {
  return (
    <div className={s.wrapper}>
        <div className={s.itemWrapper}>
            <img src="https://static.nike.com/a/images/t_default/72953e97-f852-48e7-b58e-ffb532fc50fd/wearallday-womens-shoes-knM7Ct.png" alt="" />
            <div className={s.discWrapper}>
                <div className={s.companyName}>nike</div>
                <div className={s.staffName}>wearallday woman</div>
                <div className={s.starsCounter}>⁜⁜⁜⁜⁜</div>
                <div className={s.priseBar}>$100</div>
            </div>
        </div>
        <div className={s.itemWrapper}>
            <img src="https://static.nike.com/a/images/t_default/72953e97-f852-48e7-b58e-ffb532fc50fd/wearallday-womens-shoes-knM7Ct.png" alt="" />
            <div className={s.discWrapper}>
                <div className={s.companyName}>nike</div>
                <div className={s.staffName}>wearallday woman</div>
                <div className={s.starsCounter}>⁜⁜⁜⁜⁜</div>
                <div className={s.priseBar}>$100</div>
            </div>
        </div>
        <div className={s.itemWrapper}>
            <img src="https://static.nike.com/a/images/t_default/72953e97-f852-48e7-b58e-ffb532fc50fd/wearallday-womens-shoes-knM7Ct.png" alt="" />
            <div className={s.discWrapper}>
                <div className={s.companyName}>nike</div>
                <div className={s.staffName}>wearallday woman</div>
                <div className={s.starsCounter}>⁜⁜⁜⁜⁜</div>
                <div className={s.priseBar}>$100</div>
            </div>
        </div>
        <div className={s.itemWrapper}>
            <img src="https://static.nike.com/a/images/t_default/72953e97-f852-48e7-b58e-ffb532fc50fd/wearallday-womens-shoes-knM7Ct.png" alt="" />
            <div className={s.discWrapper}>
                <div className={s.companyName}>nike</div>
                <div className={s.staffName}>wearallday woman</div>
                <div className={s.starsCounter}>⁜⁜⁜⁜⁜</div>
                <div className={s.priseBar}>$100</div>
            </div>
        </div>
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)