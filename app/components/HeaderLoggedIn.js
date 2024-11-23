import React, { useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContext"

function HeaderLoggedIn(props) {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  function handleLogout() {
    appDispatch({ type: "logout" })
  }

  return (
    <div className="flex-row my-3 my-md-0">
      <span className="mr-2 header-chat-icon text-white">
        <i className="fas fa-comment"></i> <span className="chat-count-badge text-white"> </span>
      </span>
      <Link to={`/profile/${appState.user.id}`} className="mr-2">
        <img className="small-header-avatar" src="../images/profile.jpg" />
      </Link>{" "}
      <Link to={`/profile/${appState.user.id}`} className="btn btn-sm btn-success mr-2" href="/create-post">
        پروفایل
      </Link>
      <button onClick={handleLogout} className="btn btn-sm btn-secondary signout">
        خروج
      </button>
    </div>
  )
}

export default HeaderLoggedIn
