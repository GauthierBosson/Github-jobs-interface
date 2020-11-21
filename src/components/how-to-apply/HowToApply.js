import styled from "styled-components";

import { CardContainer } from "../offer-card/OfferCard";

const HowToContainer = styled(CardContainer)`
  background-image: url("/assets/desktop/bg-pattern-detail-footer.svg");
  background-size: cover;
`;

const HowToTitle = styled.h3`
  color: white;
`;

const HowToBody = styled.p`
  color: white;
`;

const HowToApply = ({ offer }) => (
  <div style={{padding: '3rem 0'}}>
    <HowToContainer>
      <HowToTitle>How to Apply</HowToTitle>
      <HowToBody dangerouslySetInnerHTML={{ __html: offer.how_to_apply }} />
    </HowToContainer>
  </div>
);

export default HowToApply;
