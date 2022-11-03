import React, { useState } from "react";


const App = () => {
    let [count,setCount] = useState(0);


    function increament() {
      setCount(count+ 1)
    }


    return (
        <>
            <h1>{count}</h1>
            <button onClick={increament}>Click Me</button>
        </>
    )
}


export default App;