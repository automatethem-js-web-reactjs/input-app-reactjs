import React from 'react';

const App = () => {
  const [message, setMessage] = React.useState("message");
  const [result, setResult] = React.useState();

  const handleSubmit = async (e) => {
      setResult("hello "+ message);
      console.log("hello "+ message); 
  }; 
  
  return <>
    <input value={message} onChange={(e) => { setMessage(e.target.value); }} />
    <button onClick={(e) => { handleSubmit(e); }}>Click</button>
    {result} 
  </>;
};

export default App;
