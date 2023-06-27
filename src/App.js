import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./Pages/SignIn";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
