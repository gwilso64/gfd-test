import React from 'react';

const OurStorySection = () => {

  // NOTES

  /** 
   * Image Placement:
   * 
   *    The images on the bottom placement was a little off due to the screen size. I think a scrollbar would be usful here so large
   *    descriptions do not cause images to overlap

   * Backgorund:  
   * 
   * My approach for the background is to provide a gradiant to create the black and white, the images can then be placed on top.
   * The thatched house background needs to be center to the content, so this needs to be a background for the main content.
   */
  
  return (
    <>
    {/*top left image, seperate from main body of content. I am thinking responsive-image could be used to animate image later */}
      <img 
        className="hidden md:block z-[2] responsive-image"
        src="images/ourStory/door-side-bar.png"
        alt="Sidebar"
      />
      {/* includes black/white background. black background is 65% of the background */ }
      <div className="main-block relative bg-white md:bg-gradient-to-l md:from-black md:via-black md:to-white md:from-0% md:via-65% md:to-65% min-h-[calc(100vh-15px)] flex items-start md:pt-4 px-4">
        {/* positioning for main content */ }
        <div className="relative max-w-4xl w-full" style={{ margin: '0px auto' }}> 
          {/* text content and image placement. I will added the thatched house background to this */ } 
          <div className="text-content main-box relative flex justify-center lg:pl-12 pr-12 pb-24 pt-12 bg-cover bg-center sm:pl-6 bg-no-repeat">
            <div className="relative text-content">
              <div className="bg-white pl-4 pt-4 pr-8 w-full max-w-4xl z-10 relative flex">
                <div className="lg:w-4/5 pr-6 bg-white p-8">
                  <div className="story-text-container">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-6 border-b-2 border-gray-800">
                      Our Story
                    </h2>
                    <p className="mb-4">
                      Coming from a lifelong background in the double glazing industry, we began trading online in 2008. Our core product offering was composite doors, and we were one of the first companies in the UK to pioneer online ordering for this product.
                    </p>
                    <p className="mb-4">
                      Over the past 15 years, we have expanded our portfolio of products across a range of composite, aluminium, uPVC and security products. Our goal was always to offer a complete home improvement solution, which we now carry out nationwide through GFD Homes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Main desktop image, positioned left of mainbox  */ }
            <img 
              src="/images/ourStory/main.png" 
              alt="Desktop main image" 
              width="433" 
              height="245" 
              style={{ left: "655px" }}
              className="max-w-[433px] top-10 object-cover p-2 z-50 absolute transform origin-left responsive-abs-image hidden lg:block"
            />
          </div>
        </div>
        <div className="bottom-images w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto hidden lg:block">
          <img 
            className="left-bottom w-full object-contain"
            src="/images/ourStory/bottom-images.png"
            alt="Left bottom image"
          />        
        </div>
      </div>
    </>
  );
};

export default OurStorySection;