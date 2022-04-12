// Import Dependencies
import { Route, Routes, Navigate } from "react-router-dom";


// Pages
import Index from './pages/Index';
import Other from './pages/Other';

// Layout
import Navigation from "./layout/Navigation";
import Footer from "./layout/Footer";

//Components
//HERE

function App() {
  return (

    <div>
       <h1>Alonso's Profile</h1>
     <main>


     <Navigation />
       <Routes>

    {/* Default Initial Page */}
      <Route path="/" element={<Navigate replace to="/index" />} />

      {/* Pages Routed */}
     <Route path="/index" element={<Index />} />
     <Route path="/other" element={<Other />} />


       </Routes>
       </main>


<Footer/>
    </div>
  );
}

export default App;