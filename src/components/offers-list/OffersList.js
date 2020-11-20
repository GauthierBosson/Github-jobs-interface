import React from "react";
import styled from "styled-components";
import Button from "../../elements/button/Button";
import OfferCard from "../offer-card/OfferCard";

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

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 3rem;
`;

const OffersList = ({ offers, canFetchMore, fetchMore, isFetchingMore }) => {
  const currentDate = new Date();

  return (
    <>
      <OffersWrapper>
        {offers.map((group, i) => (
          <React.Fragment key={i}>
            {group.data.map((job) => {
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
          </React.Fragment>
        ))}
      </OffersWrapper>
      <BtnWrapper>
        <Button
          type="primary"
          onClick={() => fetchMore()}
          disabled={!canFetchMore || isFetchingMore}
        >
          Load More
        </Button>
      </BtnWrapper>
    </>
  );
};

export default OffersList;
