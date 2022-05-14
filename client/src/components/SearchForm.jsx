import { useState } from "react";

function SearchForm() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter a search");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Search...'
        value={text}
        onChange={handleChange}
      />
      <button type='submit'>Search</button>
    </form>
  );
}

export default SearchForm;
