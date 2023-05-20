'use client'
import { useState } from 'react';

function ProblemForm() {
  const [formData, setFormData] = useState({
    title: '',
    link: '',
    tag: '',
    acceptance: '',
    difficulty: '',
    frequency: '',
  });
 

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const res = await fetch('http://localhost:8143/selfcoder/v1/problems', {
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
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </label>
      <label>
        Link:
        <input
          type="text"
          name="link"
          value={formData.link}
          onChange={handleChange}
        />
      </label>
      <label>
        Tag:
        <input
          type="text"
          name="tag"
          value={formData.solution}
          onChange={handleChange}
        />
      </label>
      <label>
        Acceptance:
        <input
          type="text"
          name="acceptance"
          value={formData.acceptance}
          onChange={handleChange}
        />
      </label>
      <label>
        Difficulty:
        <input
          type="text"
          name="difficulty"
          value={formData.difficulty}
          onChange={handleChange}
        />
      </label>
      <label>
        Frequency:
        <input
          type="text"
          name="frequency"
          value={formData.frequency}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
   </div>
  );

}

export default ProblemForm;
