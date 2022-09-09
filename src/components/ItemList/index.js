import React from "react";

export const ItemList = ({items, title}) => {
  return (
    <div>
      <h3>{title && title}</h3>
      <ul>{items && items.map((item) => {
        return <ListItem key={item} listItemProp={item} />
      })}</ul>
    </div>
  );
};

const ListItem = ({listItemProp}) => {
  return <li>{listItemProp}</li>;
};
