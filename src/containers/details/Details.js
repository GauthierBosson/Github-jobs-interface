import { useQuery } from "react-query";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";

import BodyDetails from "../../components/body-details/BodyDetails";
import HeaderDetails from "../../components/header-details/HeaderDetails";
import HowToApply from "../../components/how-to-apply/HowToApply";
import HeaderPlaceholder from "../../components/header-details/header-placeholder/HeaderPlaceholder";
import BodyPlaceholder from "../../components/body-details/body-placeholder/BodyPlaceholder";

const DetailsContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const Details = () => {
  const { id } = useParams();

  const { data, status } = useQuery("job", async () => {
    const { data } = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json`
    );

    return data
  }, { cacheTime: 0 });


  return (
    <>
      {status === "loading" && (
        <DetailsContainer>
          <HeaderPlaceholder />
          <BodyPlaceholder />
        </DetailsContainer>
      )}

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
