import styled, {createGlobalStyle} from 'styled-components';
import React, { useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const Search = (props) => {

   // apiKey="AIzaSyA_AjQ7cFvu7CC_hZ1w4W0dqzVF9GRFiLQ"
  return (
    <div>
        <form onSubmit={props.submit}>
            <input type="text" value={props.value} placeholder="Enter city" onChange={props.change}></input>
        </form>
    </div>
  );
}

export default Search;
