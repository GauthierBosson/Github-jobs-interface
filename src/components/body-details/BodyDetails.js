import styled from 'styled-components';

import { CardContainer, GeneralInfos, JobTitle, Tags } from '../../components/offer-card/OfferCard'
import Button from '../../elements/button/Button';

const TextContainer = styled.div`
  margin-top: 3rem;
  color: var(--text);
`

const BodyDetails = ({ offer }) => (
  <CardContainer>
    <GeneralInfos>kdkdkdkd • {offer.type}</GeneralInfos>
    <JobTitle>{offer.title}</JobTitle>
    <Tags>{offer.location}</Tags>
    <Button type="primary">Apply Now</Button>
    <TextContainer dangerouslySetInnerHTML={{__html: offer.description}} />
  </CardContainer>
)

export default BodyDetails