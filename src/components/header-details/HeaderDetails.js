import styled from 'styled-components';

import { Logo, CardContainer, GeneralInfos, JobTitle } from '../offer-card/OfferCard'
import Button from '../../elements/button/Button';

const HeaderContainer = styled(CardContainer)`
  flex-basis: 100%;
  justify-content: center;
  align-items: center;
  min-height: 20rem;
  margin-bottom: 3rem;
`;

const HeaderLogo = styled(Logo)`
  transform: translateY(-50%) translateX(-50%);
  left: 50%;
`;


const HeaderDetails = ({ offer }) => (
  <HeaderContainer>
    <HeaderLogo companyLogo={offer.company_logo} />
    <JobTitle>{offer.company}</JobTitle>
    <GeneralInfos>{offer.company}</GeneralInfos>
    <a target="_blank" href={offer.company_url}>
      <Button type="secondary">Company Site</Button>
    </a>
  </HeaderContainer>
)

export default HeaderDetails;
