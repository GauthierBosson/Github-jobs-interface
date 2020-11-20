import { useState } from "react";
import styled from "styled-components";
import { useForm } from 'react-hook-form';

import SearchInput from "../../elements/search-input/SearchInput";
import FilterButton from "../../elements/search-input/FilterButton";
import SearchButtonMobile from "../../elements/search-input/SearchButtonMobile";
import Modal from "../../components/modal/Modal";
import Checkbox from "../../elements/checkbox/Checkbox";
import Button from "../../elements/button/Button";

const SearchContainer = styled.div`
  position: relative;
  transform: translateY(-1.8rem);

  form {
    width: 100%;
    display: flex;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

const BaseSearchInput = styled(SearchInput)`
  @media screen and (min-width: 1024px) {
    flex-basis: 33.33333%;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

const LocationInput = styled(SearchInput)`
  display: none;

  @media screen and (min-width: 1024px) {
    display: block;
    flex-basis: 33.33333%;
    border-radius: 0;
  }
`;

const TypeContainer = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: block;
    position: relative;
    flex-basis: 33.33333%;
    height: 100%;
    border-top-right-radius: 0.6rem;
    border-bottom-right-radius: 0.6rem;
    background-color: var(--elements-bg);

    label {
      position: absolute;
      left: 2rem;
      top: 50%;
      transform: translateY(-50%);
    }

    button {
      position: absolute;
      right: 2rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;

const Searchbar = ({ onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  const { register, handleSubmit } = useForm();

  return (
    <SearchContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BaseSearchInput name="title" placeholder="Filter by title" ref={register} />
        <LocationInput name="location" placeholder="Filter by Location" ref={register} />
        <FilterButton type="button" onClick={() => setIsOpen(true)} />
        <TypeContainer>
          <Checkbox name="fullTime" label="Full Time Only" ref={register} />
          <Button name="submit" type="submit">Search</Button>
        </TypeContainer>
        <SearchButtonMobile />
        <Modal closeModal={() => closeModal()} isOpen={isOpen}>
          <SearchInput
            name="locationMobile"
            frontIcon="/assets/desktop/icon-location.svg"
            placeholder="Filter by location"
            ref={register}
          />
          <Checkbox name="fullTimeMobile" label="Full Time Only" ref={register} />
          <Button name="submitMobile" type="submit">Search</Button>
        </Modal>
      </form>
    </SearchContainer>
  );
};

export default Searchbar;
