import { Input } from "antd";
import React, { useState } from "react";

export default function Search({ onUpdate }) {
  const [search, setSearch] = useState();

  const change = (ev) => {
    const value = ev.target.value;
    setSearch(value);
    onUpdate(value);
  };

  return (
    <Input
      placeholder="Search"
      name="search"
      type="text"
      onChange={change}
      value={search}
    />
  );
}
