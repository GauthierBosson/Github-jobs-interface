import styled from "styled-components";

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 3rem 2rem 1.5rem 2rem;
  background-color: var(--elements-bg);
  border-radius: 0.6rem;
`;

const Logo = styled.span`
  position: absolute;
  top: 0;
  left: 2rem;
  width: 50px;
  height: 50px;
  border: 1px solid black;
  border-radius: 15px;
  transform: translateY(-50%);
`

const GeneralInfos = styled.p`
  color: var(--text)
`;

const JobTitle = styled.h3`
  margin: 0;
  color: var(--h3-color);
`;

const Tags = styled.p`
  color: var(--tags);
  font-size: 1.4rem;
  font-weight: bold;
`

const OfferCard = () => (
  <CardContainer>
    <Logo />
    <GeneralInfos>2d ago • Full time</GeneralInfos>
    <JobTitle>Senior Application Engineer</JobTitle>
    <GeneralInfos>Extreme Division</GeneralInfos>
    <Tags>Anywhere</Tags>
  </CardContainer>
);

export default OfferCard;
