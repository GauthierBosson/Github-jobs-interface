import { useState } from "react";

import SearchInput from "../../elements/search-input/SearchInput";
import SearchContainer from "../../elements/search-input/SearchContainer";
import FilterButton from "../../elements/search-input/FilterButton";
import SearchButtonMobile from "../../elements/search-input/SearchButtonMobile";
import Modal from "../../components/modal/Modal";
import Checkbox from "../../elements/checkbox/Checkbox";
import Button from "../../elements/button/Button";

const Searchbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  function onSubmit(e) {
    e.preventDefault()
  }

  return (
    <SearchContainer>
      <form onSubmit={onSubmit}>
        <SearchInput placeholder="Filter by title" />
        <FilterButton type="button" onClick={() => setIsOpen(true)} />
        <SearchButtonMobile />
        <Modal closeModal={() => closeModal()} isOpen={isOpen}>
          <SearchInput frontIcon="/assets/desktop/icon-location.svg" placeholder="Filter by location" />
          <Checkbox name="fullTime" label="Full Time Only" />
          <Button type="primary">Search</Button>
        </Modal>
      </form>
    </SearchContainer>
  );
};

export default Searchbar;
