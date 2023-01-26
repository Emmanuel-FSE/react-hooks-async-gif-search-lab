import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifData, setGifData] = useState([]);
  const [search, setSearch] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=sp22K5jJAkKcwbwxOJgZR3sPMTcXyF6y&limit=3&rating=g`
      );
      const responseData = await response.json();
      setGifData(responseData.data);
    };
    fetchData();
  }, [search]);

  function updateFetch(data){
    setSearch(data)
  }
  return (
    <div className="container">
      <div>
        <GifSearch passSearch={updateFetch} />
      </div>
      <div>
        <GifList gifData={gifData} />
      </div>
    </div>
  );
}

export default GifListContainer;
