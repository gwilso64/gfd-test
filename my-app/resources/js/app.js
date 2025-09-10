
// App.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import OurStorySection from './components/OurStorySection';
import OurSecondSection from './components/OurSecondSection';
import OurTeamSection from './components/OurTeamSection';


function App() {
  return (
<div className="App">
  <>
    <OurStorySection />
  </>
  <>
    <OurSecondSection />
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