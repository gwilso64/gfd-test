
// App.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import OurStorySection from './Pages/OurStorySection';
import CompanyValuesSection from './Pages/CompanyValuesSection';
import OurTeamSection from './Pages/OurTeamSection';


function App() {
  return (
<div className="App">
  <>
    <OurStorySection />
  </>
  <>
    <CompanyValuesSection />
  </>
  <>
    <OurTeamSection />
  </>
</div>);
}

// Mount the React app to the DOM
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('react-app');
    if (container) {
        const root = createRoot(container);
        root.render(<App />);
    }
});