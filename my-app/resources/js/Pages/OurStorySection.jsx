import React from 'react';

const OurStorySection = () => {
  return (
    <div className="bg-white min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-8">
          <h2 className="text-2xl font-bold mb-4 pb-6 border-b-2">
            Our Story
          </h2>
          <p className="mb-4">
            Coming from a lifelong background in the double glazing industry, we began trading online in 2008. Our core product offering was composite doors, and we were one of the first companies in the UK to pioneer online ordering for this product.
          </p>
          <p className="mb-4">
            Over the past 15 years, we have expanded our portfolio of products across a range of composite, aluminium, uPVC and security products. Our goal was always to offer a complete home improvement solution, which we now carry out nationwide through GFD Homes.
          </p>
        </div>
        <div className="mt-8">
          <img 
            src="/images/ourStory/main.png" 
            alt="Desktop main image" 
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default OurStorySection;