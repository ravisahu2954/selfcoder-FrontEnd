import React from 'react'

const contact = () => {
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
  };
  return (
    <div>
      <form >
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" rows="4" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default contact;