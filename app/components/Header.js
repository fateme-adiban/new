import React, { useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom"
import HeaderLoggedOut from "./HeaderLoggedOut"
import HeaderLoggedIn from "./HeaderLoggedIn"
import StateContext from "../StateContext"

function Header() {
  const appState = useContext(StateContext)

  return (
    <>
      <header className="header-bar bg-primary mb-3">
        <div className="d-flex flex-column flex-md-row align-items-center p-3">
          <img className="logo" src="../images/white-logo.png"></img>
          <h4 className="my-0 mr-md-auto font-weight-normal">
            <Link to="/" className="text-white">
              {" "}
              برنامه اساتید دانشگاه قم{" "}
            </Link>
          </h4>
          {appState.loggedIn ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
        </div>
      </header>
    </>
  )
}

export default Header
