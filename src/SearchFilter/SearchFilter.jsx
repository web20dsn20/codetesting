import React, { useState } from "react";

const SearchFilter = () => {
  const [query, setQuery] = useState("");
  const items = ["Apple", "Banana", "Orange", "Grapes", "Pineapple"];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h3>Search Filter</h3>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a fruit"
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
