import React from "react";

const List = ({ items, Component }) => (
  <ul>
    {items.map(item => {
      return <Component key={item.id} {...item} />;
    })}
  </ul>
);

export default List;
