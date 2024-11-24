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
    photo: {
      value: "",
      hasErrors: false,
      message: ""
    },
    username: {
      value: "",
      hasErrors: false,
      message: ""
    },
    password: {
      value: "",
      hasErrors: false,
      message: ""
    },
    sendCount: 0,
    isSaving: false,
    NotFound: false
  }

  function ourReducer(draft, action) {
    switch (action.type) {
      case "photoChange":
        draft.photo.value = action.value
        draft.photo.hasErrors = false
        return
      case "usernameChange":
        draft.username.value = action.value
        draft.username.hasErrors = false
        return
      case "passwordChange":
        draft.password.value = action.value
        draft.password.hasErrors = false
        return
      case "submitRequest":
        if (!draft.photo.hasErrors && !draft.username.hasErrors && !draft.password.hasErrors) {
          draft.sendCount++
        }
        return
      case "saveRequestStarted":
        draft.isSaving = true
        return
      case "saveRequestFinished":
        draft.isSaving = false
        return
      case "photoRules":
        if (!action.value.trim()) {
          draft.photo.hasErrors = true
          draft.photo.message = "تصویر را انتخاب کنید."
        }
        return
      case "usernameRules":
        if (!action.value.trim()) {
          draft.username.hasErrors = true
          draft.username.message = "نام کاربری را وارد کنید."
        }
        return
      case "passwordRules":
        if (!action.value.trim()) {
          draft.password.hasErrors = true
          draft.password.message = "رمز عبور را وارد کنید."
        }
        return
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, originalState)

  function submitHandler(e) {
    e.preventDefault()
    dispatch({ type: "photoRules", value: state.photo.value })
    dispatch({ type: "usernameRules", value: state.username.value })
    dispatch({ type: "passwordRules", value: state.password.value })
    dispatch({ type: "submitRequest" })
  }

  useEffect(() => {
    if (state.sendCount) {
      dispatch({ type: "saveRequestStarted" })
      const ourRequest = Axios.CancelToken.source()
      async function editProfile() {
        if (appState.isProfessor) {
          try {
            const response = await Axios.post("/professor/update", { photo: state.photo.value, username: state.username.value, password: state.password.value, token: appState.user.token }, { cancelToken: ourRequest.token })
            dispatch({ type: "saveRequestFinished" })
            appDispatch({ type: "flashMessage", value: "پروفایل ویرایش شد." })
          } catch (e) {
            console.log("There was a problem.")
          }
        } else {
          try {
            const response = await Axios.post("/s/update", { username: state.username.value, password: state.password.value, photo: state.photo.value, token: appState.user.token })
            dispatch({ type: "saveRequestFinished" })
            appDispatch({ type: "flashMessage", value: "پروفایل ویرایش شد." })
            alert("post updated")
          } catch (e) {
            console.log("There was a problem.")
          }
        }
      }
      editProfile()
      return () => {
        ourRequest.cancel
      }
    }
  }, [state.sendCount])

  return (
    <>
      <Page title="ویرایش پروفایل">
        <form onSubmit={submitHandler} className="col-lg-6 offset-lg-3 direction">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="email-register" className="text-muted mb-1">
                <small>عکس پروفایل</small>
              </label>
              <input onBlur={e => dispatch({ type: "photoRules", value: e.target.value })} onChange={e => dispatch({ type: "photoChange", value: e.target.value })} id="photo-register" name="photo" className="form-control" type="file" autoComplete="off" />
              {state.photo.hasErrors && <div className="alert alert-danger small liveValidateMessage">{state.photo.message}</div>}
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="username-register" className="text-muted mb-1">
                <small>نام کاربری</small>
              </label>
              <input onBlur={e => dispatch({ type: "usernameRules", value: e.target.value })} onChange={e => dispatch({ type: "usernameChange", value: e.target.value })} id="username-register" name="username" className="form-control" type="text" autoComplete="off" />
              {state.username.hasErrors && <div className="alert alert-danger small liveValidateMessage">{state.username.message}</div>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="password-register" className="text-muted mb-1">
                <small>رمز عبور</small>
              </label>
              <input onBlur={e => dispatch({ type: "passwordRules", value: e.target.value })} onChange={e => dispatch({ type: "passwordChange", value: e.target.value })} id="password-register" name="password" className="form-control" type="password" />
              {state.password.hasErrors && <div className="alert alert-danger small liveValidateMessage">{state.password.message}</div>}
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
