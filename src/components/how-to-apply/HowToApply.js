import styled from "styled-components";

import { CardContainer } from "../offer-card/OfferCard";

const HowToContainer = styled(CardContainer)`
  background-image: url("/assets/desktop/bg-pattern-detail-footer.svg");
  background-size: cover;
  margin-top: 3rem;
`;

const HowToTitle = styled.h3`
  color: white;
`;

const HowToBody = styled.p`
  color: white;
`;

const HowToLink = styled.a`
  color: white;
  font-size: 1.6rem;
`;

const HowToApply = ({ offer }) => (
  <HowToContainer>
    <HowToTitle>How to Apply</HowToTitle>
    <HowToBody dangerouslySetInnerHTML={{__html: offer.how_to_apply}} />
  </HowToContainer>
);

export default HowToApply;
