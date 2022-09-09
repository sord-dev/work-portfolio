import React from "react";

export const ItemList = ({items, title}) => {
  return (
    <>
      <h3>{title && title}</h3>
      <ul>{items && items.map((item) => {
        return <ListItem key={item} listItemProp={item} />
      })}</ul>
    </>
  );
};

const ListItem = ({listItemProp}) => {
  return <li>{listItemProp}</li>;
};
