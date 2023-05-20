'use client'
import { useState } from 'react';

function sign() {
  const [formData, setFormData] = useState({
    email: '',
    userName: '',
    password: '',
    country: '',
    linkedin: '',
  });


  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const res = await fetch('http://localhost:8143/selfcoder/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      const data = await res.json();
      console.log(data);
     
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={formData.title}
          onChange={handleChange}
        />
      </label>
      <label>
        UserName:
        <input
          type="text"
          name="userName"
          value={formData.solution}
          onChange={handleChange}
        />
      </label>
      <label>
      Password:
        <input
          type="text"
          name="password"
          value={formData.acceptance}
          onChange={handleChange}
        />
      </label>
      <label>
      Country:
        <input
          type="text"
          name="country"
          value={formData.difficulty}
          onChange={handleChange}
        />
      </label>
      <label>
      Linkedin:
        <input
          type="text"
          name="linkedin"
          value={formData.frequency}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
   </div>
  )
  
}

export default sign;
