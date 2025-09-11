import React from 'react';

const OurStorySection = () => {

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
   */
  
  return (
    <>
      {/* Top left image, separate from main body of content. I am thinking responsive-image could be used to animate image later */}
      <img 
        className="hidden md:block lg:z-[2] md:z-[-1] responsive-image transition-opacity duration-300"
        src="images/ourStory/door-side-bar.png"
        alt="Sidebar"
      />
      {/* Includes black/white background. Black background is 65% of the background */}
      <div className="main-block relative bg-white md:bg-gradient-to-l md:from-black md:via-black md:to-white md:from-0% md:via-65% md:to-65% min-h-[calc(100vh)] flex items-start md:pt-4 md:pt-0 px-4">
        {/* Positioning for main content */}
        <div className="relative max-w-4xl w-full" style={{ margin: '0px auto' }}>
          {/* Mobile: Image above on right */}
          <div className="image-text-container md:hidden flex justify-end relative top-[30px] z-[9] md:static md:top-auto md:z-auto">
            <div className="overflow-hidden w-full">
              <img 
                src="/images/mobile/mobile-1.png"  
                alt="Mobile top image" 
                className="w-3/4 h-full object-cover transition-opacity duration-300 ml-auto"
              />
            </div>
          </div>
          {/* Text content and image placement. I will add the thatched house background to this */}
          <div className="text-content main-box relative flex sm:justify-start justify-center lg:pl-12 pr-12 pb-24 pt-12 bg-cover bg-center sm:ml-6 bg-no-repeat">
            <div className="relative text-content">
              <div className="bg-white pl-4 pt-4 pr-8 w-full max-w-4xl z-10 relative flex">
                <div className="lg:w-4/5 pr-6 bg-white p-8">
                  <div className="story-text-container transition-opacity duration-300">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-6 border-b-2 border-gray-800">
                      Our Story
                    </h2>
                    {/* Main text - enhanced for mobile responsiveness */}
                    <p className="mb-4">
                      Coming from a lifelong background in the double glazing industry, we began trading online in 2008. Our core product offering was composite doors, and we were one of the first companies in the UK to pioneer online ordering for this product.
                    </p>
                    <p className="md:block hidden mb-4 last:mb-0">
                      Over the past 15 years, we have expanded our portfolio of products across a range of composite, aluminium, uPVC and security products. Our goal was always to offer a complete home improvement solution, which we now carry out nationwide through GFD Homes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Main desktop image, positioned left of mainbox */}
            <img 
              src="/images/ourStory/main.png" 
              alt="Desktop main image" 
              width="433" 
              height="245" 
              style={{ left: "655px" }}
              className="max-w-[433px] top-10 object-cover p-2 z-50 absolute transform origin-left transition-opacity duration-300 responsive-abs-image hidden lg:block"
            />
          </div>
        </div>
        {/* Bottom aligned image - desktop only */}
        <div className="bottom-images w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto transition-opacity duration-300 hidden lg:block hidden md:block">
          <img 
            className="left-bottom w-full object-contain"
            src="/images/ourStory/bottom-images.png"
            alt="Left bottom image"
          />        
        </div>     
      </div>
      {/* Mobile text */}
      <div className="md:hidden">
      {/* Remove negative margin, use gap or padding instead */}
      <div className="relative">
        <img 
          src="/images/mobile/mobile-2.png" 
          alt="Mobile bottom image"
          className="transition-opacity duration-300 relative -left-[22px] w-full h-auto"
        />
      </div> 
    {/* Use flexbox to prevent overlap */}
    <div className="bg-[#F5F5F5] px-5 pt-5 pb-5 mt-4">
      <p className="font-['Red_Hat_Text'] text-[14.4px] font-semibold mb-4">
        Over the past 15 years, we have expanded our portfolio of products across a range of composite, aluminium, uPVC and security products. Our goal was always to offer a complete home improvement solution, which we now carry out nationwide through GFD Homes.
      </p>
      <img 
        className="ml-auto block"
        src="/images/mobile/mobile-3.png"
        alt="Mobile side image"
      />
    </div>
  </div>
    </>
  );
};

export default OurStorySection;