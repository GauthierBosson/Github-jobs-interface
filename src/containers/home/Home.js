import OffersList from "../../components/offers-list/OffersList";
import { useInfiniteQuery } from "react-query";
import axios from "axios";
import { useHistory } from 'react-router-dom'

import Searchbar from "../../components/searchbar/Searchbar";
import PlaceholderList from '../../components/offers-list/placeholder-list/PlaceholderList';

const Home = () => {
  const history = useHistory();

  const {
    status,
    data,
    isFetchingMore,
    fetchMore,
    canFetchMore,
  } = useInfiniteQuery(
    "jobs",
    async (key, cursor = 0) => {
      const { data } = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=" +
          cursor
      );

      return {
        data: data,
        cursor: cursor + 1,
      };
    },
    {
      getFetchMore: (lastGroup, allGroups) => {
        const morePagesExist = lastGroup?.data.length === 50;
        if (morePagesExist) {
          return lastGroup.cursor;
        } else {
          return false;
        }
      },
    }
  );

  function onSubmit(data, e) {
    if(e.target.elements.submit) {
      if (data.title.trim() !== "" && data.location.trim() !== "") {
        history.push(`/search?title=${data.title}&location=${data.location}&fulltime=${data.fullTime}`)
      } else if (data.title.trim() !== "" && data.location.trim() === "") {
        history.push(`/search?title=${data.title}&fulltime=${data.fullTime}`)
      } else if (data.title.trim() === "" && data.location.trim() !== "") {
        history.push(`/search?location=${data.location}&fulltime=${data.fullTime}`)
      } else {
        return;
      }
    } else {
      if (data.title.trim() !== "" && data.locationMobile.trim() !== "") {
        history.push(`/search?title=${data.title}&location=${data.locationMobile}&fulltime=${data.fullTimeMobile}`)
      } else if (data.title.trim() !== "" && data.locationMobile.trim() === "") {
        history.push(`/search?title=${data.title}&fulltime=${data.fullTimeMobile}`)
      } else if (data.title.trim() === "" && data.locationMobile.trim() !== "") {
        history.push(`/search?location=${data.locationMobile}&fulltime=${data.fullTimeMobile}`)
      } else {
        return;
      }
    }
  }

  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      {status === "loading" && <PlaceholderList />}

      {status === "error" && <div>Error while fetching data</div>}

      {status === "success" && (
        <OffersList
          offers={data}
          isFetchingMore={isFetchingMore}
          fetchMore={fetchMore}
          canFetchMore={canFetchMore}
        />
      )}
      {/* <ReactQueryDevtools initialIsOpen /> */}
    </>
  );
};

export default Home;
