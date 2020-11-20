import styled, { keyframes } from "styled-components";

import { CardContainer } from "../../offer-card/OfferCard";
import { OffersWrapper } from "../OffersList";

const PlaceholderWrapper = styled(OffersWrapper)``;

const load = keyframes`
  from {
        left: -150px;
    }
    to   {
        left: 100%;
    }
`;

const PlaceholderCard = styled(CardContainer)`
  overflow: hidden;
  min-height: 25rem;

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: -150px;
    top: 0;
    height: 100%;
    width: 150px;
    background: linear-gradient(
      to right,
      transparent 0%,
      #e8e8e8 50%,
      transparent 100%
    );
    animation: ${load} 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
`;

const PlaceholderList = () => (
  <PlaceholderWrapper>
    <PlaceholderCard />
    <PlaceholderCard />
    <PlaceholderCard />
    <PlaceholderCard />
    <PlaceholderCard />
    <PlaceholderCard />
    <PlaceholderCard />
    <PlaceholderCard />
    <PlaceholderCard />
    <PlaceholderCard />
    <PlaceholderCard />
  </PlaceholderWrapper>
);

export default PlaceholderList;
