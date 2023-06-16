import React from "react";

function SearchNotFound({ refer, title }) {
  return (
    <div
      ref={refer}
      style={{
        marginTop: "50px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>No result for "{title}"</h1>
    </div>
  );
}

export default SearchNotFound;
