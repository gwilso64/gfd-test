import React from 'react';

const OurSecondSection = () => {

  // images are either located in companyValues or mobile directory.
  // two grid layout with some items that are only viewable on desktop or mobile.

  return (
    <div>
      <div className="min-h-screen">
        <div className="w-full grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-8 pb-8 pt-20">
          <div>
            <div className="w-full bg-[#F5F5F5]">
                <h2 className="sm:relative sm:top-4 w-1/2 bg-white pl-8 pr-8 text-[20px] sm:text-[50px] max-w-[350px] leading-normal font-bold text-black">
                    Company Values & Ethos
                </h2>
            </div>
            <img className="pb-0 md:pb-6 float-right" src="/images/companyValues/company.png"/>
            <img className="pb-6 float-right hidden sm:block" src="/images/companyValues/thatched-cottage.png" />
          </div>
          <div>
            <img className="pb-6 hidden sm:block" src="/images/companyValues/property-slice-1.png"/>
            <img className="pb-16 hidden sm:block" src="/images/companyValues/property-slice-2.png"/>
            <img className="pb-8 sm:hidden" src="/images/mobile/mobile-4.png"/>
            <div className="hidden sm:block text-brand">
              <p>We know that our continued success is down to our customers, and treating them with respect. Starting from humble beginnings means that we value each and every customer equally, regardless of the order size.</p>
              <p>As the world becomes more automated by the day, we promise never to lose the personal touch with our customers that we built the foundations of the business on. Our staff are friendly, knowledgeable and always happy to assist.</p>
            </div>
            <div className="sm:hidden bg-black text-white p-[20px] my-0">
              <p>As the world becomes more automated by the day, we promise never to lose the personal touch with our customers that we built the foundations of the business on. Our staff are friendly, knowledgeable and always happy to assist.</p>       
            </div>
            <div className="sm:hidden h-[128px] my-8">
              <img className="float-right " src="/images/mobile/mobile-5.png"/>
            </div>
            <div className="sm:hidden bg-black text-white p-[20px] my-0">
              <p>We know that our continued success is down to our customers, and treating them with respect. Starting from humble beginnings means that we value each and every customer equally, regardless of the order size.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSecondSection;