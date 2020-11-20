import OffersList from "../../components/offers-list/OffersList";
import { useInfiniteQuery } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import axios from "axios";

import Searchbar from "../../components/searchbar/Searchbar";
import PlaceholderList from '../../components/offers-list/placeholder-list/PlaceholderList';

const Home = () => {
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

    } else {
      
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
      <ReactQueryDevtools initialIsOpen />
    </>
  );
};

export default Home;
