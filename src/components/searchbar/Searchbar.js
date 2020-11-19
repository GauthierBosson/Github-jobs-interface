import { useState } from "react";

import SearchInput from "../../elements/search-input/SearchInput";
import SearchContainer from "../../elements/search-input/SearchContainer";
import FilterButton from "../../elements/search-input/FilterButton";
import SearchButtonMobile from "../../elements/search-input/SearchButtonMobile";
import Modal from "../../components/modal/Modal";

const Searchbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  return (
    <SearchContainer>
      <SearchInput placeholder="Filter by title" />
      <FilterButton onClick={() => setIsOpen(true)} />
      <SearchButtonMobile />
      <Modal closeModal={() => closeModal()} isOpen={isOpen}>
        kdkdkd
      </Modal>
    </SearchContainer>
  );
};

export default Searchbar;
