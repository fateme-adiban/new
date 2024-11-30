import React, { useContext, useEffect, useState } from "react"
import { NavLink, Route, Routes, useParams } from "react-router-dom"
import Chat from "./Chat"
import Page from "./Page"
import StateContext from "../StateContext"
import EditStudentProfile from "./EditStudentProfile"
import EditProfessorProfile from "./EditProfessorProfile"
import Program from "./Program"

function Profile() {
  const appState = useContext(StateContext)

  return (
    <Page title="پروفایل" wide="true">
      <h2>
        <img className="avatar-small" src={appState.user.image}></img>
        {"  "}
        {appState.user.student_name}
      </h2>

      <div className="profile-nav nav nav-tabs pt-2 mb-4">
        <NavLink to="" end className="nav-item nav-link">
          حساب کاربری
        </NavLink>
        <NavLink to="messages" className="nav-item nav-link">
          پیام ها
        </NavLink>
        <NavLink to="program" className="nav-item nav-link">
          افزودن برنامه
        </NavLink>
      </div>

      <Routes>
        <Route path="" element={appState.isProfessor ? <EditProfessorProfile /> : <EditStudentProfile />} />
        <Route path="messages" element={<Chat />} />
        {/* <Route path="program" element={<Program />} /> */}
      </Routes>
    </Page>
  )
}

export default Profile
