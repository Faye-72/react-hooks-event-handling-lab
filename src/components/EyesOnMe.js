import React from "react";

function EyesOnMe() {
  const handleFocus = (e) => {
    console.log("Good!", e.target);
  };

  return (
    <div>
      <button
        onFocus={handleFocus}
        onBlur={(e) => {
          console.log("Hey! Eyes on me!", e.target);
        }}
      >
        Eyes on me
      </button>
    </div>
  );
}

export default EyesOnMe;
