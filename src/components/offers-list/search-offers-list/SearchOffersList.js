import React from "react";
import styled from "styled-components";
import OfferCard from "../../offer-card/OfferCard";

export const OffersWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 5rem 3rem;
  margin-top: 4rem;
  min-width: 0;

  @media screen and (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SearchOffersList = ({ offers }) => {
  const currentDate = new Date();

  return (
    <>
      <OffersWrapper>
        {offers.map((job) => {
          const jobDate = new Date(job.created_at);
          const dateDiff = currentDate.getTime() - jobDate.getTime();
          const days = Math.ceil(dateDiff / (1000 * 360 * 24));
          return (
            <OfferCard
              key={job.id}
              id={job.id}
              type={job.type}
              title={job.title}
              company={job.company}
              location={job.location}
              companyLogo={job.company_logo}
              createdAt={days}
            />
          );
        })}
      </OffersWrapper>
    </>
  );
};

export default SearchOffersList;
