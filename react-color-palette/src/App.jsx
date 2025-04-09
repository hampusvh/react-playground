import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("");

  return (
    <div className="App">

<h2>type a color:</h2>
<h2>↓</h2>


      {/* */}
      
      <input
        type="text"
        placeholder="..."
        value={color}
        onChange={(e) => setColor(e.target.value)}

        />

      <div className="color-box"
      style={{ backgroundColor: color }} >
      </div>
    </div>
  );
}

export default App;
