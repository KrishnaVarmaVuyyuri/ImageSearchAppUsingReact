import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import Images from './components/Images';

const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const handler = (e) => {
    setSearch(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => setData(response.data.photos.photo))
      .catch((error) => {
        console.log("Unable to reach the API: ", error);
      });
  };

  return (
    <div className="container">
      <h1>
        <span>Image Searcher</span>
      </h1>
      <form onSubmit={submitHandler} className="search-form">
        <input
          type="text"
          onChange={handler}
          value={search}
          className="form-control search-input"
          placeholder="Enter text to search for images"
        />
        <button type="submit" className="btn btn-primary search-btn">
          Search
        </button>
      </form>
      <div className="results">
        {data.length >= 1 ? <Images data={data} /> : <h4>No Images Loaded</h4>}
      </div>
    </div>
  );
}

export default App;
