import React, { useContext, useEffect } from "react"
import { useImmer } from "use-immer"
import Page from "./Page"
import Axios from "axios"

function Home() {
  const groups = ["آمار", "اخلاق", "اقتصاد اسلامي", "تربيت  بدني", "حسابداري", "حقوق  جزا و جرم  شناسي", "حقوق  خصوصي", "حقوق بين الملل", "حقوق عمومي", "حقوق مالكيت فكري", "رياضي", "زبان  و ادبيات  انگليسي", "زبان  و ادبيات  عربي", "زبان  و ادبيات  فارسي", "زيست شناسي", "شيعه شناسي", "شيمي", "علم اطلاعات و دانش شناسي", "علوم  تربيتي", "علوم قرآن و حديث", "علوم كامپيوتر", "فقه  و مباني  حقوق  اسلامي", "فلسفه  و كلام  اسلامي", "فيزيك", "مديريت بازرگاني", "مديريت صنعتي", "معارف", "معماري", "مهندسي  صنايع", "مهندسي برق", "مهندسي شيمي", "مهندسي عمران", "مهندسي كامپيوتر", "مهندسي مكانيك"]
  const [state, setState] = useImmer({
    searchTerm: "",
    results: [],
    groupSearch: "",
    show: "nither",
    requestCount: 0
  })

  useEffect(() => {
    const delay = setTimeout(() => {
      setState(draft => {
        draft.requestCount++
        console.log(state.searchTerm, state.groupSearch)
      })
    }, 3000)

    return () => clearTimeout(delay)
  }, [state.searchTerm])

  useEffect(() => {
    if (state.requestCount) {
      const ourRequest = Axios.CancelToken.source()
      async function fetchResults() {
        try {
          if (state.groupSearch) {
            const response = await Axios.post(`/professor/search?query=${state.searchTerm}&group=${state.groupSearch}`, { searchTerm: state.searchTerm, group: state.groupSearch })
            // console.log(response.data)
            setState(draft => {
              draft.results = response.data
            })
          } else {
            const response = await Axios.post(`/professor/search?query=${state.searchTerm}`, { searchTerm: state.searchTerm })
            // console.log(response.data)
            setState(draft => {
              draft.results = response.data
            })
          }
        } catch (e) {
          console.log("There was a problem or the request was cancelled.")
        }
      }
      fetchResults()
      return () => ourRequest.cancel()
    }
  }, [state.requestCount])

  function handleInput(e) {
    const value = e.target.value
    setState(draft => {
      draft.searchTerm = value
    })
  }

  function handleGroup(e) {
    const value = e.target.value
    alert(value)
    setState(draft => {
      draft.groupSearch = value
    })
  }

  return (
    <Page title="اساتید" wide={true}>
      <div className="row">
        <div className="col-12">
          <div className="heading-section">
            <div className="row height d-flex justify-content-center align-items-center">
              <span className="close-live-search">
                <i className="fas fa-times-circle"></i>
              </span>
              <span className="search-overlay-icon">
                <i className="fas fa-search"></i>
              </span>
              <div className="col-md-3 direction">
                <select onChange={handleGroup} id="group" className="form-control select-bar">
                  {groups.map((group, index) => (
                    <option key={index} value={group}>
                      {group}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-6">
                <div className="form direction">
                  <i className="fa fa-search direction"></i>
                  <input onChange={handleInput} type="text" className="form-control form-input" placeholder="نام استاد را وارد کنید..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"circle-loader " + (state.show == "loading" ? "circle-loader--visible" : "")}></div>
      {state.show != "loading" && (
        <>
          <div className="row direction">
            <div className="col-lg-3 col-md-6">
              <div className="famous-product">
                <img className="professor-img" src="../images/profile.jpg" />
                <h3>امیر جلالی بیدگلی</h3>
                <div className="price">
                  <p className="p-2">دانشیار</p>
                  <p>گروه فیزیک</p>
                  <button className="btn btn-sm btn-success mr-2">ارسال پیام</button>
                  <button className="btn btn-sm btn-success mr-2">نمایش برنامه</button>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="famous-product">
                <img className="professor-img" src="../images/profile.jpg" />
                <h3>امیر جلالی بیدگلی</h3>
                <div className="price">
                  <p className="p-2">دانشیار</p>
                  <p>گروه فیزیک</p>
                  <button className="btn btn-sm btn-success mr-2">ارسال پیام</button>
                  <button className="btn btn-sm btn-success mr-2">نمایش برنامه</button>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="famous-product">
                <img className="professor-img" src="../images/profile.jpg" />
                <h3>امیر جلالی بیدگلی</h3>
                <div className="price">
                  <p className="p-2">دانشیار</p>
                  <p>گروه فیزیک</p>
                  <button className="btn btn-sm btn-success mr-2">ارسال پیام</button>
                  <button className="btn btn-sm btn-success mr-2">نمایش برنامه</button>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="famous-product">
                <img className="professor-img" src="../images/profile.jpg" />
                <h3>امیر جلالی بیدگلی</h3>
                <div className="price">
                  <p className="p-2">دانشیار</p>
                  <p>گروه فیزیک</p>
                  <button className="btn btn-sm btn-success mr-2">ارسال پیام</button>
                  <button className="btn btn-sm btn-success mr-2">نمایش برنامه</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row direction">
            <div className="col-lg-3 col-md-6">
              <div className="famous-product">
                <img className="professor-img" src="../images/profile.jpg" />
                <h3>امیر جلالی بیدگلی</h3>
                <div className="price">
                  <p className="p-2">دانشیار</p>
                  <p>گروه فیزیک</p>
                  <button className="btn btn-sm btn-success mr-2">ارسال پیام</button>
                  <button className="btn btn-sm btn-success mr-2">نمایش برنامه</button>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="famous-product">
                <img className="professor-img" src="../images/profile.jpg" />
                <h3>امیر جلالی بیدگلی</h3>
                <div className="price">
                  <p className="p-2">دانشیار</p>
                  <p>گروه فیزیک</p>
                  <button className="btn btn-sm btn-success mr-2">ارسال پیام</button>
                  <button className="btn btn-sm btn-success mr-2">نمایش برنامه</button>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="famous-product">
                <img className="professor-img" src="../images/profile.jpg" />
                <h3>امیر جلالی بیدگلی</h3>
                <div className="price">
                  <p className="p-2">دانشیار</p>
                  <p>گروه فیزیک</p>
                  <button className="btn btn-sm btn-success mr-2">ارسال پیام</button>
                  <button className="btn btn-sm btn-success mr-2">نمایش برنامه</button>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="famous-product">
                <img className="professor-img" src="../images/profile.jpg" />
                <h3>امیر جلالی بیدگلی</h3>
                <div className="price">
                  <p className="p-2">دانشیار</p>
                  <p>گروه فیزیک</p>
                  <button className="btn btn-sm btn-success mr-2">ارسال پیام</button>
                  <button className="btn btn-sm btn-success mr-2">نمایش برنامه</button>
                </div>
              </div>
            </div>
          </div>{" "}
        </>
      )}
    </Page>
  )
}

export default Home
