import React, { useContext, useEffect } from "react"
import Page from "./Page"
import StateContext from "../StateContext"

function Home() {
  const appState = useContext(StateContext)

  return (
    <Page title="اساتید" wide={true}>
      <div className="row">
        <div className="col-12">
          <div className="heading-section">
            <h3>Our Top Sell</h3>
            <h2>Checkout Our Top Sell Burger</h2>
            <div className="heading-borders">
              <span className="selected"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="row direction">
        <div className="col-lg-3 col-md-6">
          <div className="famous-product">
            <h3>امیر جلالی بیدگلی</h3>
            <img className="professor-img" src="../images/profile.jpg" />
            <div className="price">
              <p>دانشیار</p>
              <p>گروه فیزیک</p>
              <button className="btn btn-sm btn-success mr-2">ارسال پیام</button>
              <button className="btn btn-sm btn-success mr-2">نمایش برنامه</button>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="famous-product">
            <h3>امیر جلالی بیدگلی</h3>
            <img className="professor-img" src="../images/profile.jpg" />
            <div className="price">
              <p>دانشیار</p>
              <p>گروه فیزیک</p>
              <button className="btn btn-sm btn-success mr-2">ارسال پیام</button>
              <button className="btn btn-sm btn-success mr-2">نمایش برنامه</button>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="famous-product">
            <h3>امیر جلالی بیدگلی</h3>
            <img className="professor-img" src="../images/profile.jpg" />
            <div className="price">
              <p>دانشیار</p>
              <p>گروه فیزیک</p>
              <button className="btn btn-sm btn-success mr-2">ارسال پیام</button>
              <button className="btn btn-sm btn-success mr-2">نمایش برنامه</button>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="famous-product">
            <h3>امیر جلالی بیدگلی</h3>
            <img className="professor-img" src="../images/profile.jpg" />
            <div className="price">
              <p>دانشیار</p>
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
            <h3>امیر جلالی بیدگلی</h3>
            <img className="professor-img" src="../images/profile.jpg" />
            <div className="price">
              <p>دانشیار</p>
              <p>گروه فیزیک</p>
              <button className="btn btn-sm btn-success mr-2">ارسال پیام</button>
              <button className="btn btn-sm btn-success mr-2">نمایش برنامه</button>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="famous-product">
            <h3>امیر جلالی بیدگلی</h3>
            <img className="professor-img" src="../images/profile.jpg" />
            <div className="price">
              <p>دانشیار</p>
              <p>گروه فیزیک</p>
              <button className="btn btn-sm btn-success mr-2">ارسال پیام</button>
              <button className="btn btn-sm btn-success mr-2">نمایش برنامه</button>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="famous-product">
            <h3>امیر جلالی بیدگلی</h3>
            <img className="professor-img" src="../images/profile.jpg" />
            <div className="price">
              <p>دانشیار</p>
              <p>گروه فیزیک</p>
              <button className="btn btn-sm btn-success mr-2">ارسال پیام</button>
              <button className="btn btn-sm btn-success mr-2">نمایش برنامه</button>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="famous-product">
            <h3>امیر جلالی بیدگلی</h3>
            <img className="professor-img" src="../images/profile.jpg" />
            <div className="price">
              <p>دانشیار</p>
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
