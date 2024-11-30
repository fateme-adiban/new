import React, { useContext, useEffect, useState } from "react"

function HomeCards(props) {
  return (
    <>
      <div className="row direction home">
        {props.cards.map(card => {
          return (
            <>
              <div key={card._id} className="col-lg-4 col-md-6">
                <div className="professor-card">
                  <div className="professor-img">
                    <img src={`http://localhost:3005/${card.image_profile}`} />
                  </div>
                  <h3>{card.name}</h3>
                  <p>{card.rank}</p>
                  <p>{card.group}</p>
                  <button className="btn btn-sm btn-success mr-2">ارسال پیام</button>
                  <button className="btn btn-sm btn-success mr-2">نمایش برنامه</button>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default HomeCards
