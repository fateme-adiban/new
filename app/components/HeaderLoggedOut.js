import React, { useEffect, useState, useContext } from "react"
import Axios from "axios"
import DispatchContext from "../DispatchContext"

function HeaderLoggedOut() {
  const appDispatch = useContext(DispatchContext)

  const [studentNumber, setStudentNumber] = useState()
  const [password, setPassword] = useState()

  async function handleLoginStudent() {
    try {
      const response = await Axios.post("/s/login", { studentNumber, password })
      if (response.data) {
        console.log(response.data)
        appDispatch({ type: "login", data: response.data })
        const token = getCookie("student_token")
      } else {
        console.log("Incorrect username / password.")
      }
    } catch (e) {
      console.log("There was an error.")
    }
  }

  async function handleLoginProfessor() {
    try {
      const response = await Axios.post("/professor/login", { username, password })
      if (response.data) {
        appDispatch({ type: "login", data: response.data })
        appDispatch({ type: "isProfessor" })
      } else {
        console.log("Incorrect username / password.")
      }
    } catch (e) {
      console.log("There was an error.")
    }
  }

  return (
    <form onSubmit={e => e.preventDefault()} className="mb-0 pt-2 pt-md-0">
      <div className="row align-items-center">
        <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
          <input onChange={e => setStudentNumber(e.target.value)} name="student-number" className="form-control form-control-sm input-dark" type="text" placeholder="شماره دانشجویی" autoComplete="off" />
        </div>
        <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
          <input onChange={e => setPassword(e.target.value)} name="password" className="form-control form-control-sm input-dark" type="password" placeholder="رمز عبور" />
        </div>
        <div className="col-md-auto">
          <button onClick={handleLoginStudent} className="btn btn-success btn-sm student-login">
            ورود دانشجو
          </button>
          <button onClick={handleLoginProfessor} className="btn btn-success btn-sm teacher-login">
            ورود استاد
          </button>
        </div>
      </div>
    </form>
  )
}

export default HeaderLoggedOut
