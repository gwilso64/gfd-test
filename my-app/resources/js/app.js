
// App.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import OurStorySection from './components/OurStorySection';
import CompanyValuesSection from './components/CompanyValuesSection';
import OurTeamSection from './components/OurTeamSection';


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