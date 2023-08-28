import React, { useState } from "react";

function App() {
  const [header, setHeader] = useState("");
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setHeader(event.target.value);
  };
  const handeClick = (event) => {
    setName(header);
    event.preventDefault();
  };
  return (
    <div className="container">
      <h1>Hello {name} </h1>
      <form onClick={handeClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
