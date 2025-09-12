import React, { useState, useEffect } from 'react';
import locations from '../data/locations';
import ImageWithCaption from '../Components/OurStorySection/ImageWithCaption';

/** 
 * ImageWithCaption could be used as an alternative to images with captions. 
 * This would allow us to move the captions to a more suitable location (and increase text size) on screen sizes
 * <ImageWithCaption
    src="/images/ourStory/door-side-bar.png"
    caption="Aluminium Entrance Doors"
    x1="60%"
    y1="30%"
    x2="95%"
    y2="28%"
    cx="95%"
    cy="28%"
  />
 * 
 * 
*/
const OurStorySection = () => {
  const [currentLocationId, setCurrentLocationId] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const currentLocation = locations[currentLocationId];

  // NOTES
  /** 
   * Image Placement:
   * 
   *    The images on the bottom placement was a little off due to the screen size. I think a scrollbar would be useful here so large
   *    descriptions do not cause images to overlap

   * Background:  
   * 
   * My approach for the background is to provide a gradient to create the black and white, the images can then be placed on top.
   * The thatched house background needs to be center to the content, so this needs to be a background for the main content.
   * 
   * Animate:  
   * 
   * I went for a image fade in fade out with text included. 
   * alternative would be to use ImageWithCaption mentioned above.
   */

  // Auto-cycle with fade animation
  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade out
      setIsTransitioning(true);
      setTimeout(() => {
       setCurrentLocationId(prev => (prev + 1) % locations.length);
      setIsTransitioning(false);
      }, 300); // 300ms fade out duration
      
    }, 5000); // 5 seconds total cycle time
    return () => clearInterval(interval);
  }, []);

  return (
    <>

      {/* Top left image, separate from main body of content. I am thinking responsive-image could be used to animate image later */}  
      <img 
        className={`hidden md:block lg:z-[2] md:z-[-1] responsive-image transition-opacity duration-700 ${
                  isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
        src={currentLocation.images.desktop.sidebar}
        alt="Sidebar"
      />
      {/* Includes black/white background. Black background is 65% of the background */}
      <div className="main-block relative bg-[#F5F5F5] md:bg-gradient-to-l md:from-black md:via-black md:to-[#F5F5F5] md:from-0% md:via-65% md:to-65% min-h-[calc(100vh)] flex items-start md:pt-4 md:pt-0 px-4">
        
        {/* Positioning for main content */}
        <div className="relative max-w-4xl w-full mx-auto">
          
          {/* Mobile: Image above on right */}
          <div className="md:hidden flex justify-end relative top-[30px] z-[9]">
            <div className="overflow-hidden w-full">
              <img 
                src={currentLocation.images.mobile.top}
                alt="Mobile top image" 
                className={`w-3/4 h-full object-cover transition-opacity duration-700 ml-auto ${
                  isTransitioning ? 'opacity-0' : 'opacity-100'
                }`}
              />
            </div>
          </div>
          {/* Text content and image placement. I will add the thatched house background to this */}
          <div className="text-content main-box relative flex sm:justify-start justify-center lg:pl-12 pr-12 pb-24 pt-10 bg-cover bg-center sm:ml-6 bg-no-repeat">
            <div className="relative text-content">
              <div className="bg-white lg:ml-0 sm:ml-4 sm:pt-4 pr-8 w-full max-w-4xl z-10 relative flex">
                <div className="lg:w-4/5 pr-6 bg-white p-8 pt-4 ">
                  <div className={`max-w-[720px] w-full text-lg leading-normal`} >
                    <h2 className="text-[45px] font-bold text-gray-800 mb-4 pb-4 border-b-2 border-gray-800">
                      Our Story
                    </h2>
                    {/* Main text - enhanced for mobile responsiveness */}
                    <p className="mb-4">
                      Coming from a lifelong background in the double glazing industry, we began trading online in 2008. Our core product offering was composite doors, and we were one of the first companies in the UK to pioneer online ordering for this product.
                    </p>
                    <p className="hidden md:block mb-4 last:mb-0">
                     Over the past 15 years, we have expanded our portfolio of products across a range of composite, aluminium, uPVC and security products. Our goal was always to offer a complete home improvement solution, which we now carry out nationwide through GFD Homes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main desktop image, positioned left of mainbox */}
            <img 
              src={currentLocation.images.desktop.main} 
              alt="Desktop main image" 
              width="433" 
              height="245" 
              style={{ left: "655px" }}
              className={`max-w-[433px] top-10 object-cover p-2 z-50 absolute transform origin-left transition-opacity duration-700 responsive-abs-image hidden lg:block  ${
                  isTransitioning ? 'opacity-0' : 'opacity-100'
                }`}
            />
          </div>
        </div>

        {/* Bottom aligned image - desktop only */}
        <div className={`absolute -left-[20px] right-0 bottom-0 max-w-[1200px] w-full mx-auto z-[10] hidden md:block md:w-[100%] md:-left-[0px] lg:w-full transition-opacity duration-700 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}>
          <img 
            className="left-bottom w-full object-contain"
            src={currentLocation.images.desktop.leftBottom}
            alt="Left bottom image"
          />        
        </div>    
      </div>

      {/* Mobile text */}
      <div className="md:hidden">
        {/* Remove negative margin, use gap or padding instead */}
        <div className="relative">
          <img 
            src={currentLocation.images.mobile.bottom}
            alt="Mobile bottom image"
            className={`transition-opacity duration-700 relative -left-[22px] h-auto -mt-[115px] ${
                  isTransitioning ? 'opacity-0' : 'opacity-100'
                }`}
          />
        </div>
        
        {/* Uses flexbox to prevent overlap */}
       <div class="relative bg-[#F5F5F5] px-5 pt-5 pb-20 mt-4 sm:ml-4 w-[calc(100%-20px)] float-right">
          <p class="font-['Red_Hat_Text'] text-[14.4px] font-semibold  ">
            Over the past 15 years, we have expanded our portfolio of products across a range of composite, aluminium, uPVC and security products. Our goal was always to offer a complete home improvement solution, which we now carry out nationwide through GFD Homes.
          </p>
          <img
            class="absolute bottom-[-220px] right-0"
            src="/images/mobile/mobile-3-b.png"
            alt="Mobile side image"
          />
        </div>
      </div>
    </>
  );
};

export default OurStorySection;