import React, { useEffect, useState } from "react"
import LoadingDotsIcon from "./LoadingDotsIcon"
import Axios from "axios"
import Pagination from "./Pagination"

function HomeCards() {
  const [currentPage, setCurrentPage] = useState(1)
  const [cardsPerPage, setCardsPerPage] = useState(9)

  useEffect(() => {
    async function fetchCards() {
      try {
        const response = await Axios.get("/professor/all")
        console.log(response.data)
        setCards(response.data)
        setIsLoading(false)
      } catch (e) {
        console.log("There was a problem.")
      }
    }
    fetchCards()
  }, [])

  if (isLoading) return <LoadingDotsIcon />

  const lastCardIndex = currentPage + cardsPerPage
  const firstCardIndx = lastCardIndex - cardsPerPage
  const currentCard = cards.slice(firstCardIndx, lastCardIndex)

  return (
    <>
      <div className="row direction">
        {currentCard.map(card => {
          return (
            <>
              <div key={card._id} className="col-lg-4 col-md-6">
                <div className="professor-card">
                  <img className="professor-img" src={"../images/profile.jpg"} />
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
      <Pagination totalCards={cards.length} cardsPerPage={cardsPerPage} setCurrentPage={setCardsPerPage} />
    </>
  )
}

export default HomeCards
