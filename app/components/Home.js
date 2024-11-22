import React, { useContext, useEffect } from "react"
import Page from "./Page"
import StateContext from "../StateContext"

function Home() {
  const appState = useContext(StateContext)
  const groups = ["آمار", "اخلاق", "اقتصاد اسلامي", "تربيت  بدني", "حسابداري", "حقوق  جزا و جرم  شناسي", "حقوق  خصوصي", "حقوق بين الملل", "حقوق عمومي", "حقوق مالكيت فكري", "رياضي", "زبان  و ادبيات  انگليسي", "زبان  و ادبيات  عربي", "زبان  و ادبيات  فارسي", "زيست شناسي", "شيعه شناسي", "شيمي", "علم اطلاعات و دانش شناسي", "علوم  تربيتي", "علوم قرآن و حديث", "علوم كامپيوتر", "فقه  و مباني  حقوق  اسلامي", "فلسفه  و كلام  اسلامي", "فيزيك", "مديريت بازرگاني", "مديريت صنعتي", "معارف", "معماري", "مهندسي  صنايع", "مهندسي برق", "مهندسي شيمي", "مهندسي عمران", "مهندسي كامپيوتر", "مهندسي مكانيك"]

  return (
    <Page title="اساتید" wide={true}>
      <div className="row">
        <div className="col-12">
          <div className="heading-section">
            <div class="row height d-flex justify-content-center align-items-center">
              <div class="col-md-3 direction">
                <select id="group" className="form-control select-bar">
                  {groups.map((group, index) => (
                    <option key={index} value={group}>
                      {group}
                    </option>
                  ))}
                </select>
                <span class="close-live-search">
                  <i class="fas fa-times-circle"></i>
                </span>
                <span class="search-overlay-icon">
                  <i class="fas fa-search"></i>
                </span>
              </div>
              <div class="col-md-6">
                <div class="form direction">
                  <i class="fa fa-search direction"></i>
                  <input type="text" class="form-control form-input" placeholder="نام استاد را وارد کنید..." />
                </div>
              </div>
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
      </div>
    </Page>
  )
}

export default Home
