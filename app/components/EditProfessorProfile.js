import React, { useContext, useEffect } from "react"
import { useImmerReducer } from "use-immer"
import Page from "./Page"
import Axios from "axios"
import StateContext from "../StateContext"
import DispatchContext from "../DispatchContext"

function EditProfessorProfile() {
  const groups = ["آمار", "اخلاق", "اقتصاد اسلامي", "تربيت  بدني", "حسابداري", "حقوق  جزا و جرم  شناسي", "حقوق  خصوصي", "حقوق بين الملل", "حقوق عمومي", "حقوق مالكيت فكري", "رياضي", "زبان  و ادبيات  انگليسي", "زبان  و ادبيات  عربي", "زبان  و ادبيات  فارسي", "زيست شناسي", "شيعه شناسي", "شيمي", "علم اطلاعات و دانش شناسي", "علوم  تربيتي", "علوم قرآن و حديث", "علوم كامپيوتر", "فقه  و مباني  حقوق  اسلامي", "فلسفه  و كلام  اسلامي", "فيزيك", "مديريت بازرگاني", "مديريت صنعتي", "معارف", "معماري", "مهندسي  صنايع", "مهندسي برق", "مهندسي شيمي", "مهندسي عمران", "مهندسي كامپيوتر", "مهندسي مكانيك"]
  const ranks = ["استاد تمام", "دانشيار", "استادیار", "مربی"]
  const appState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)

  const originalState = {
    image: {
      value: "",
      hasErrors: false,
      message: ""
    },
    name: {
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
      case "imageChange":
        draft.image.value = action.value
        draft.image.hasErrors = false
        return
      case "nameChange":
        draft.name.value = action.value
        draft.name.hasErrors = false
        return
      case "passwordChange":
        draft.password.value = action.value
        draft.password.hasErrors = false
        return
      case "submitRequest":
        if (!draft.image.hasErrors && !draft.name.hasErrors && !draft.password.hasErrors) {
          draft.sendCount++
        }
        return
      case "saveRequestStarted":
        draft.isSaving = true
        return
      case "saveRequestFinished":
        draft.isSaving = false
        return
      case "imageRules":
        if (!action.value.trim()) {
          draft.image.hasErrors = true
          draft.image.message = "تصویر را انتخاب کنید."
        }
        return
      case "nameRules":
        if (!action.value.trim()) {
          draft.name.hasErrors = true
          draft.name.message = "نام کاربری را وارد کنید."
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
    dispatch({ type: "imageRules", value: state.image.value })
    dispatch({ type: "nameRules", value: state.name.value })
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
            const response = await Axios.put("/professor/update", { image: state.image.value, name: state.name.value, password: state.password.value, token: appState.user.token }, { cancelToken: ourRequest.token })
            dispatch({ type: "saveRequestFinished" })
            appDispatch({ type: "flashMessage", value: "پروفایل ویرایش شد." })
          } catch (e) {
            console.log("There was a problem.")
          }
        } else {
          try {
            const response = await Axios.put("/s/update", { name: state.name.value, password: state.password.value, studentNumber: appState.user.studentNumber, image: state.image.value, token: appState.user.token })
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
        <form className="col-lg-9 offset-lg-1 direction">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="name-register" className="text-muted mb-1">
                <small>نام و نام خانوادگی</small>
              </label>
              <input id="name-register" name="username" className="form-control" type="text" autoComplete="off" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="username-register" className="text-muted mb-1">
                <small>نام کاربری</small>
              </label>
              <input id="username-register" name="username" className="form-control" type="text" autoComplete="off" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="group" className="text-muted mb-1">
                <small>گروه</small>
              </label>
              <select id="group" className="form-control">
                {groups.map((group, index) => (
                  <option key={index} value={group}>
                    {group}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="rank" className="text-muted mb-1">
                <small>مرتبه علمی</small>
              </label>
              <select id="rank" className="form-control">
                {ranks.map((rank, index) => (
                  <option key={index} value={rank}>
                    {rank}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="password-register" className="text-muted mb-1">
                <small>رمز عبور</small>
              </label>
              <input id="password-register" name="password" className="form-control" type="password" />
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="password-register" className="text-muted mb-1">
                <small>تایید رمز</small>
              </label>
              <input id="password-register" name="password" className="form-control" type="password" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="password-register" className="text-muted mb-1">
                <small>شماره تلفن </small>
              </label>
              <input id="password-register" name="password" className="form-control" type="text" />
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="password-register" className="text-muted mb-1">
                <small>ایمیل</small>
              </label>
              <input id="password-register" name="password" className="form-control" type="email" />
            </div>
          </div>

          <button type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block">
            ثبت نام
          </button>
        </form>
      </Page>
    </>
  )
}

export default EditProfessorProfile
