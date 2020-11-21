import SearchOffersList from "../../components/offers-list/search-offers-list/SearchOffersList";
import { useQuery } from "react-query";
import axios from "axios";
import qs from "qs";
import { useHistory } from "react-router-dom";

import Searchbar from "../../components/searchbar/Searchbar";
import PlaceholderList from "../../components/offers-list/placeholder-list/PlaceholderList";

const Search = (props) => {
  const history = useHistory();

  const { title, location, fulltime } = qs.parse(props.location.search, {
    ignoreQueryPrefix: true,
  });

  console.log(title, location, fulltime);

  const { data, status, refetch } = useQuery("customJob", async () => {
    const titleStr =
      title === undefined ? "" : `description=${encodeURI(title)}&`;
    const locationStr =
      location === undefined ? "" : `location=${encodeURI(location)}&`;

    const { data } = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?${titleStr}${locationStr}full_time=${fulltime}`
    );

    return data
  });

  function onSubmit(data, e) {
    if (e.target.elements.submit) {
      if (data.title.trim() !== "" && data.location.trim() !== "") {
        history.push(
          `/search?title=${data.title}&location=${data.location}&fulltime=${data.fullTime}`
        );

        refetch()
      } else if (data.title.trim() !== "" && data.location.trim() === "") {
        history.push(`/search?title=${data.title}&fulltime=${data.fullTime}`);
        refetch()
      } else if (data.title.trim() === "" && data.location.trim() !== "") {
        history.push(
          `/search?location=${data.location}&fulltime=${data.fullTime}`
        );
        refetch()
      } else {
        return;
      }
    } else {
      if (data.title.trim() !== "" && data.locationMobile.trim() !== "") {
        history.push(
          `/search?title=${data.title}&location=${data.locationMobile}&fulltime=${data.fullTimeMobile}`
        );
        refetch()
      } else if (
        data.title.trim() !== "" &&
        data.locationMobile.trim() === ""
      ) {
        history.push(
          `/search?title=${data.title}&fulltime=${data.fullTimeMobile}`
        );
        refetch()
      } else if (
        data.title.trim() === "" &&
        data.locationMobile.trim() !== ""
      ) {
        history.push(
          `/search?location=${data.locationMobile}&fulltime=${data.fullTimeMobile}`
        );
        refetch()
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

      {status === "success" && <SearchOffersList offers={data} />}
    </>
  );
};

export default Search;
