import React from 'react';


const CompanyValuesSection = () => {

  // images are either located in companyValues or mobile directory.
  // two grid layout with some items that are only viewable on desktop or mobile.

  return (
    <div>
      <div className="min-h-screen">
        <div className="w-full grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-8 pb-8 lg:pt-20 md:pt-20 sm:pt-0">
          <div>
            <div className="w-full bg-[#F5F5F5] sm:bg-transparent">
                <h2 className="pl-8 pr-8 text-[20px] leading-normal font-bold text-black sm:col-span-1 md:col-span-full sm:relative md:static sm:top-4 md:top-0 sm:w-1/2 md:w-auto sm:text-[50px] md:text-[50px] md:pb-4 max-w-[250px] sm:max-w-none bg-white sm:bg-transparent">
                    Company Values & Ethos
                </h2>
            </div>
            <img className="pb-0 md:pb-6 float-right" src="/images/companyValues/company.png"/>
            <img className="pb-6 float-right hidden sm:block" src="/images/companyValues/thatched-cottage.png" />
          </div>
          <div className="float-right">
            <img className="pb-6 hidden sm:block ml-auto" src="/images/companyValues/property-slice-1.png"/>
            <img className="pb-16 hidden sm:block ml-auto" src="/images/companyValues/property-slice-2.png"/>
            <img className="pb-8 sm:hidden" src="/images/mobile/mobile-4.png"/>
            <div className="hidden sm:block text-brand pr-5 max-w-[932px] w-full ml-auto">
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

export default CompanyValuesSection;