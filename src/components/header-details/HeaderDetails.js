import styled from "styled-components";

import {
  Logo,
  CardContainer,
  GeneralInfos,
  JobTitle,
} from "../offer-card/OfferCard";
import Button from "../../elements/button/Button";

const HeaderContainer = styled(CardContainer)`
  flex-basis: 100%;
  justify-content: center;
  align-items: center;
  min-height: 20rem;
  margin-bottom: 3rem;

  @media screen and (min-width: 640px) {
    flex-direction: column;
    padding-left: 25rem;
    justify-content: center;
    align-items: flex-start;
  }
`;

const HeaderLogo = styled(Logo)`
  transform: translateY(-50%) translateX(-50%);
  left: 50%;

  @media screen and (min-width: 640px) {
    margin: 0;
    left: 0;
    transform: none;
    height: 100%;
    width: 20rem;
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

const HeaderJobTitle = styled(JobTitle)`
  @media screen and (min-width: 640px) {
  }
`;

const LinkHeader = styled.a`
  @media screen and (min-width: 640px) {
    position: absolute;
    top: 50%;
    right: 3rem;
    transform: translateY(-50%);
  }
`;

const HeaderDetails = ({ offer }) => (
  <HeaderContainer>
    <HeaderLogo companyLogo={offer.company_logo} />
    <HeaderJobTitle>{offer.company}</HeaderJobTitle>
    <GeneralInfos>{offer.company}</GeneralInfos>
    <LinkHeader target="_blank" href={offer.company_url}>
      <Button type="secondary">Company Site</Button>
    </LinkHeader>
  </HeaderContainer>
);

export default HeaderDetails;
