import React from "react";

const Number = ({ num, show }) => {
  React.useEffect(() => {
    return () => {
      console.log("component is unmounted");
    };
  }, [show]);

  return <div>{num} times</div>;
};

export default Number;
