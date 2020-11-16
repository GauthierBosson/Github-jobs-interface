import styled from 'styled-components'
import OfferCard from '../offer-card/OfferCard'

const OffersWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 25rem;
  gap: 5rem 3rem;

  @media screen and (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr)
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr)
  }
`

const OffersList = () => {

  return (
    <OffersWrapper>
      <OfferCard />
      <OfferCard />
      <OfferCard />
      <OfferCard />
      <OfferCard />
      <OfferCard />
    </OffersWrapper>
  )
}

export default OffersList;