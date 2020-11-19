import { useQuery } from "react-query";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";

import BodyDetails from "../../components/body-details/BodyDetails";
import HeaderDetails from "../../components/header-details/HeaderDetails";
import HowToApply from "../../components/how-to-apply/HowToApply";

const DetailsContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const Details = () => {
  const { id } = useParams();

  const { data, status, isLoading } = useQuery("job", async () => {
    const { data } = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json`
    );

    return data
  });


  return (
    <>
      {status === "loading" && <p>Loading...</p>}

      {status === "error" && <p>Error while fetching data</p>}

      {status === "success" && (
        <DetailsContainer>
          <HeaderDetails offer={data} />
          <BodyDetails offer={data} />
          <HowToApply offer={data} />
        </DetailsContainer>
      )}
    </>
  );
};

export default Details;
