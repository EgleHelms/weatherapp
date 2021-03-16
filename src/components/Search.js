import styled from 'styled-components';
import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const RenderDiv = styled.div`
  width: 50%;

  @media (max-width: 550px) {
    width: 100%;
  }
`

const Form = styled.form`
  flex-basis: 100%;
`
const SearchBar = styled.div`
  height: 3rem;
  border-radius: 30px;
  font-family: inherit;
  font-size: 1.5rem;
  background-color: rgba(248,249,250,0.8);
  display: flex;
  justify-content: space-between;


`

const Input = styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  margin-left: 30px;
  font-size: 1.5rem;
  width: 80%;
`

const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  padding-right: 20px;

  &:focus{
    background-color: transparent;
    border: none;
    outline: none
  }
`

const Search = (props) => {

  const { REACT_APP_PLACES_KEY} = process.env
  return (
    <RenderDiv>
        <Form onSubmit={props.submit}>
            <SearchBar>
              {/* <GooglePlacesAutocomplete apiKey={REACT_APP_PLACES_KEY}> */}
            <Input  type="text" value={props.value} placeholder="Enter city" onChange={props.change}></Input>
            {/* </GooglePlacesAutocomplete> */}
            <SearchButton type="submit"><FontAwesomeIcon icon={faSearch} style={{fontSize: "1.5rem", color: "grey"}}/></SearchButton>
            </SearchBar>

        </Form>
    </RenderDiv>
  );
}

export default Search;
