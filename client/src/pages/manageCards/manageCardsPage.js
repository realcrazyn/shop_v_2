import { useEffect, useState } from 'react'
import { CardManager } from '../../components/CardManager/CardManager'
import { Loader } from '../../components/Loader'
import { useHttp } from '../../hooks/http.hook'

export const ManageCards = () => {
  const [cards, setCards] = useState([])
  const { request } = useHttp()

  useEffect(() => {
    async function getCards() {
      const data = await request('/api/manage/cardslist', 'GET')
      setCards(data)
    }
    getCards()
  }, [request])

  const manageHandler = async () => {
    try {
      await request('/api/manage/manageCards', 'POST', { cards })
    } catch (e) {}
  }

  if (cards.length === 0) {
    return <Loader />
  }

  return (
    <div className="container">
      <CardManager
        cards={cards}
        setCards={setCards}
        manageHandler={manageHandler}
      />
    </div>
  )
}
