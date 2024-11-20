import React, { useContext, useEffect } from "react"
import { useImmerReducer } from "use-immer"
import Page from "./Page"
import Axios from "axios"
import StateContext from "../StateContext"
import DispatchContext from "../DispatchContext"

function EditProfile() {
  const appState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)

  const originalState = {
    profilePhoto: {
      value: "",
      hasErrors: false
    },
    username: {
      value: "",
      hasErrors: false
    },
    password: {
      value: "",
      hasErrors: false
    },
    passwordConfirmation: {
      value: "",
      hasErrors: false
    },
    sendCount: 0,
    isSaving: false
  }

  function ourReducer(draft, action) {
    switch (action.type) {
      case "photoChange":
        draft.ProfilePhoto.value = action.value
        return
      case "usernameChange":
        draft.username.value = action.value
        return
      case "passwordChange":
        draft.password.value = action.value
        return
      case "passwordConfirm":
        draft.passwordConfirmation.value = action.value
        return
      case "submitRequest":
        draft.sendCount++
        return
      case "saveRequestStarted":
        draft.isSaving = true
        return
      case "saveRequestFinished":
        draft.isSaving = false
        return
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, originalState)

  function submitHandler(e) {
    e.preventDefault()
    dispatch({ type: "submitRequest" })
  }

  useEffect(() => {
    if (state.sendCount) {
      dispatch({ type: "saveRequestStarted" })
      const ourRequest = Axios.CancelToken.source()
      async function editProfile() {
        if (appState.isProfessor) {
          try {
            const responce = await Axios.post("/professor/update", { photo: state.profilePhoto.value, username: state.username.value, password: state.password.value, token: appState.user.token }, { cancelToken: ourRequest.token })
            dispatch({ type: "saveRequestFinished" })
            appDispatch({ type: "flashMessage", value: "پروفایل ویرایش شد." })
          } catch (e) {
            console.log("There was a problem.")
          }
        } else {
          try {
            const responce = await Axios.post("/s/update", { photo: state.profilePhoto.value, username: state.username.value, password: state.password.value, token: appState.user.token }, { cancelToken: ourRequest.token })
            appDispatch({ type: "flashMessage", value: "پروفایل ویرایش شد." })
            dispatch({ type: "saveRequestFinished" })
          } catch (e) {
            console.log("There was a problem.")
          }
        }
      }
    }
  }, [state.sendCount])

  return (
    <>
      <Page title="ویرایش پروفایل">
        <form onSubmit={submitHandler} class="col-lg-6 offset-lg-3 direction">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="email-register" className="text-muted mb-1">
                <small>عکس پروفایل</small>
              </label>
              <input onChange={e => dispatch({ type: "photoChange", value: e.target.value })} id="email-register" name="email" className="form-control" type="file" autocomplete="off" />
            </div>

            <div className="form-group col-md-6">
              <label for="username-register" className="text-muted mb-1">
                <small>نام کاربری</small>
              </label>
              <input onChange={e => dispatch({ type: "usernameChange", value: e.target.value })} id="username-register" name="username" className="form-control" type="text" autocomplete="off" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="password-register" className="text-muted mb-1">
                <small>رمز عبور</small>
              </label>
              <input onChange={e => dispatch({ type: "passwordChange", value: e.target.value })} id="password-register" name="password" className="form-control" type="password" />
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="password-register" className="text-muted mb-1">
                <small>تایید رمز</small>
              </label>
              <input onChange={e => dispatch({ type: "passwordConfirm", value: e.target.value })} id="password-register" name="password" className="form-control" type="password" />
            </div>
          </div>

          <button disabled={state.isSaving} type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block">
            ویرایش
          </button>
        </form>
      </Page>
    </>
  )
}

export default EditProfile
