import React, { useState } from "react"

function Home () {
  
  const [fields, setFields] = useState({});

  const handleChange = (name: any) => (event: any) => {
    setFields({...fields, [name]: event.target.value });
  };

  console.log(fields);
  
  return (
    <Form />
  )
}

export default Home
