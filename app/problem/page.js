'use client'
import Link from 'next/link';
import React,{useState, useEffect} from 'react';
function Problem()
{
 
  const [problems, setProblems] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:8143/selfcoder/v1/problems")
    .then(res=>res.json())
    .then((result)=>{
      setProblems(result.data);
    }
    
    )
  },[]) 
 
  const MyComponent = ( value ) => {
    if (value === 'Easy') {
      return 'green'
    } else if(value === 'Medium') {
      return 'blue';
    }
    else{
      return 'red';
    }
  };

  return (
    <table>
    <thead>
        <tr>
        
          <th>Title</th>
          <th>Tag</th>
          <th>Acceptance</th>
          <th>Difficulty</th>
          <th>Frequency</th>
        </tr>
      </thead>
      <tbody>
        {
       problems.map((value, index) => (
        
        <tr key={index}>
          
          <td> <Link href={value.link} passHref={true} target='_blank' rel='noopener noreferrer' style={{textDecoration:"none",fontWeight:"bold"}}> <span>{" " }{value.title}</span></Link></td>
          <td style={{fontWeight:"bold"}}>{value.tag}</td>
          <td>{value.acceptance}</td>
          <td style={{fontWeight:"bold" ,color:MyComponent(value.difficulty)}}>{value.difficulty}</td>
          <td>{value.frequency}</td>
        </tr>

      ))
      
      
       }
      </tbody>
    </table>
  );
}

export default Problem;