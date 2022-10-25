import React from 'react'
import { connect } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import s from "./App.module.css"
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home/Home'

export const App = (props) => {
  return (
    <div className={s.wrapper}>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      <Footer/>
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) =>{
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
