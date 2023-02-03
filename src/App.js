import "./App.css";
import React from 'react';
import {motion} from "framer-motion/dist/framer-motion"

function App() {
  return (
    <motion.form
      initial={{ x: '-200%' }}
      animate={{ x: '0%' }}
      style={{ position: 'absolute', top: '15%', transform: 'translateY(0%)' }}
    >
      {/* Your form fields go here */
      <form>
        <h1>Create An Account</h1>
        <label>
          Email:
          <input name="email" type="email" required />
        </label>
        <label>
          Password:
          <input name="password" type="password" required />
        </label>
        <button>Sign Up!</button>
      </form>
      }
    </motion.form>
  );
};

export default App;