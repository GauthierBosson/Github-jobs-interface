import styled from "styled-components";

import {
  CardContainer,
  GeneralInfos,
  JobTitle,
  Tags,
} from "../../components/offer-card/OfferCard";
import Button from "../../elements/button/Button";

const TextContainer = styled.div`
  margin-top: 3rem;
  color: var(--text);
`;

const BtnApply = styled(Button)`
  @media screen and (min-width: 640px) {
    position: absolute;
    right: 4rem;
    top: 8rem;
  }
`;

const BodyDetails = ({ offer }) => {
  const currentDate = new Date();
  const jobDate = new Date(offer.created_at);
  const dateDiff = currentDate.getTime() - jobDate.getTime();
  const days = Math.ceil(dateDiff / (1000 * 360 * 24));
  return (
    <CardContainer>
      <GeneralInfos>{days}d • {offer.type}</GeneralInfos>
      <JobTitle>{offer.title}</JobTitle>
      <Tags>{offer.location}</Tags>
      <a target="_blank" rel="noreferrer" href={offer.company_url}>
        <BtnApply type="primary">Apply Now</BtnApply>
      </a>
      <TextContainer dangerouslySetInnerHTML={{ __html: offer.description }} />
    </CardContainer>
  );
};

export default BodyDetails;
