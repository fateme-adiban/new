import React, { useContext, useEffect, useState } from "react"
import Page from "./Page"
import DispatchContext from "../DispatchContext"

function RegisterTeacher() {
  const groups = ["آمار", "اخلاق", "اقتصاد اسلامي", "تربيت  بدني", "حسابداري", "حقوق  جزا و جرم  شناسي", "حقوق  خصوصي", "حقوق بين الملل", "حقوق عمومي", "حقوق مالكيت فكري", "رياضي", "زبان  و ادبيات  انگليسي", "زبان  و ادبيات  عربي", "زبان  و ادبيات  فارسي", "زيست شناسي", "شيعه شناسي", "شيمي", "علم اطلاعات و دانش شناسي", "علوم  تربيتي", "علوم قرآن و حديث", "علوم كامپيوتر", "فقه  و مباني  حقوق  اسلامي", "فلسفه  و كلام  اسلامي", "فيزيك", "مديريت بازرگاني", "مديريت صنعتي", "معارف", "معماري", "مهندسي  صنايع", "مهندسي برق", "مهندسي شيمي", "مهندسي عمران", "مهندسي كامپيوتر", "مهندسي مكانيك"]
  const ranks = ["استاد تمام", "دانشيار", "استادیار", "مربی"]

  const [name, setName] = useState()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const appDispatch = useContext(DispatchContext)

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await Axios.post("/professor/register", { username, password })
      console.log("User was successfully created.")
    } catch (e) {
      console.log("There was an error.")
    }
  }

  return (
    <>
      <Page title="خوش آمدید">
        <form onSubmit={handleSubmit} className="col-lg-9 offset-lg-1 direction">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="name-register" className="text-muted mb-1">
                <small>نام و نام خانوادگی</small>
              </label>
              <input onChange={e => setName(e.target.value)} id="name-register" name="username" className="form-control" type="text" autoComplete="off" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="username-register" className="text-muted mb-1">
                <small>نام کاربری</small>
              </label>
              <input onChange={e => setUsername(e.target.value)} id="username-register" name="username" className="form-control" type="text" autoComplete="off" />
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
              <input onChange={e => setPassword(e.target.value)} id="password-register" name="password" className="form-control" type="password" />
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

export default RegisterTeacher
