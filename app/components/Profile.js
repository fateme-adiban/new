import React, { useContext, useEffect, useState } from "react"
import { NavLink, Route, Routes, useParams } from "react-router-dom"
import Chat from "./Chat"
import Page from "./Page"
import StateContext from "../StateContext"
import EditProfile from "./EditProfile"
import Program from "./Program"

function Profile() {
  const appState = useContext(StateContext)
  const [profileData, setProfileData] = useState({
    profileUsername: "...",
    profileAvatar: "../images/profile.jpg"
  })

  return (
    <Page title="پروفایل">
      <h3>
        <img className="avatar-small" src={profileData.profileAvatar}></img>
        {profileData.profileUsername}
      </h3>

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
        <Route path="" element={<EditProfile />} />
        <Route path="messages" element={<Chat />} />
        {/* <Route path="program" element={<Program />} /> */}
      </Routes>
    </Page>
  )
}

export default Profile
