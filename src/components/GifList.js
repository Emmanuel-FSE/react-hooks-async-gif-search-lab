import React from "react";

function GifList({ gifData }) {
    console.log(gifData);
    const renderLi = gifData.map((item) => {
        return(
            <li key={item.id}><img src={item.images.original.url} alt={item.images.title}/></li>
        )
    })
    return (
      <ul>
        {renderLi}
      </ul>
    );
  }

export default GifList;