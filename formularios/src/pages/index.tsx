import React, { useState } from "react"
import {Form, InputForm} from "@/components";

function Home () {
  
  const [fields, setFields] = useState({});

  console.log(fields, 'Fields')
  
  return (
    <Form 
      state={fields}
      setState={setFields}
    />
  )
}

export default Home
