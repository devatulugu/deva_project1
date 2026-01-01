import { useState } from "react"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";

function App() {  
  const [isDark, setIsDark] = useState(false);

  return (
    <>
     <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen bg-bg text-text dark:bg-bg-dark dark:text-text-dark transition-colors duration-300">
        <Navbar isDark={isDark} setIsDark={setIsDark} />
        <Home />
        <Skills />
      </div>
    </div>
    </>
   
   
  )
}

export default App
