import React from "react";

const Coin = (props) => {
  const { name } = props;
  console.log(props);
  return (
    <div>
      {name}
      {props.quote.USD.price}
    </div>
  );
};

export default Coin;