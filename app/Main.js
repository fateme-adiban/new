import React, { useState, useReducer, useEffect } from "react"
import ReactDOM from "react-dom/client"
import { useImmerReducer } from "use-immer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Axios from "axios"
Axios.defaults.baseURL = "http://localhost:3005"

import StateContext from "./StateContext"
import DispatchContext from "./DispatchContext"

// My Components
import Header from "./components/Header"
import HomeGuest from "./components/HomeGuest"
import RegisterTeacher from "./components/RegisterTeacher"
import Home from "./components/Home"
import Footer from "./components/Footer"
import About from "./components/About"
import Terms from "./components/Terms"
import FlashMessages from "./components/FlashMessages"
import Profile from "./components/Profile"

function Main() {
  const initialState = {
    loggedIn: Boolean(localStorage.getItem("token")),
    flashMessages: [],
    user: {
      token: localStorage.getItem("token"),
      id: localStorage.getItem("id"),
      username: localStorage.getItem("username")
    },
    isProfessor: false
  }

  function ourReducer(draft, action) {
    switch (action.type) {
      case "login":
        draft.loggedIn = true
        draft.user = action.data
        return
      case "logout":
        draft.loggedIn = false
        return
      case "flashMessage":
        draft.flashMessages.push(action.value)
        return
      case "isProfessor":
        draft.isProfessor = true
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState)

  useEffect(() => {
    if (state.loggedIn) {
      localStorage.setItem("token", state.user.token)
      localStorage.setItem("id", state.user.id)
      localStorage.setItem("username", state.user.username)
    } else {
      localStorage.removeItem("token")
      localStorage.setItem("id", state.user.id)
      localStorage.setItem("username", state.user.username)
    }
  }, [state.loggedIn])

  return (
    <>
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <BrowserRouter>
            <FlashMessages messages={state.flashMessages} />
            <Header />
            <Routes>
              <Route path="/profile/:id/*" element={<Profile />} />
              <Route path="/" element={state.loggedIn ? <Home /> : <HomeGuest />} />
              <Route path="/register-teacher" element={<RegisterTeacher />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </DispatchContext.Provider>
      </StateContext.Provider>
    </>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#app"))
root.render(<Main />)

if (module.hot) {
  module.hot.accept()
}
