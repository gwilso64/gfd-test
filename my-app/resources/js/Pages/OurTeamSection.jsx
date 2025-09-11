import React, { useState } from 'react';

const OurTeamSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);
    
    // Team member data - This could come from a get call
    // we can use the IDs as keys. Good for React to identify items have changed, added, or removed

    // clickable is this a clickable item or a letter
    // selected image for selected user, I have added a placeholder for team members that do not have a photo (https://placehold.co/200x250)
    // hover is for hover state image
    const teamMembers = [
        {
            id: 1,
            clickable:true,
            image: '/images/team/team-member-1.png',
            name: 'Team Member 1',
            selected: '/images/team/selected/team-member-1s.png',
            hover: '/images/team/hover/team-member-1h.png',
            title: 'Job Title',
            description: "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        },
        {
            id: 2,
            clickable:false,
            image: '/images/team/team-g.png',
            name: 'Team Member G',
            title: 'Job Title',
            description: "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        },
        {
            id: 3,
            clickable:true,
            image: '/images/team/team-member-2.png',
            name: 'Team Member 2',
            selected: 'https://placehold.co/200x250',
            title: 'Job Title',
            description: "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        },
        {
            id: 4,
            clickable:true,
            image: '/images/team/team-member-1.png',
            name: 'Team Member 1',
            selected: '/images/team/selected/team-member-1s.png',
            hover: '/images/team/hover/team-member-1h.png',
            title: 'Job Title',
            description: "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        },
        {
            id: 5,
            clickable:true,
            image: '/images/team/team-member-2.png',
            name: 'Team Member 2',
            selected: 'https://placehold.co/200x250',
            title: 'Job Title',
            description: "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        },
        {
            id: 6,
            clickable:true,
            image: '/images/team/team-member-1.png',
            name: 'Team Member 1',
            selected: '/images/team/selected/team-member-1s.png',
            hover: '/images/team/hover/team-member-1h.png',
            title: 'Job Title',
            description: "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        },
        {
            id: 7,
            clickable:true,
            image: '/images/team/team-member-2.png',
            name: 'Team Member 2',
            selected: 'https://placehold.co/200x250',
            title: 'Job Title',
            description: "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        },
        {
            id: 8,
            clickable:false,
            image: '/images/team/team-f.png',
            name: 'Team Member F',
            title: 'Job Title',
            description: "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        },
        {
            id: 9,
            clickable:true,
            image: '/images/team/team-member-1.png',
            name: 'Team Member 1',
            selected: '/images/team/selected/team-member-1s.png',
            hover: '/images/team/hover/team-member-1h.png',
            title: 'Job Title',
            description: "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        },
        {
            id: 10,
            clickable:true,
            image: '/images/team/team-member-2.png',
            name: 'Team Member 2',
            selected: 'https://placehold.co/200x250',
            title: 'Job Title',
            description: "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        },
        {
            id: 11,
            clickable:true,
            image: '/images/team/team-member-1.png',
            name: 'Team Member 1',
            selected: '/images/team/selected/team-member-1s.png',
            hover: '/images/team/hover/team-member-1h.png',
            title: 'Job Title',
            description: "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        },
        {
            id: 12,
            clickable:true,
            image: '/images/team/team-member-2.png',
            name: 'Team Member 2',
            selected: 'https://placehold.co/200x250',
            title: 'Job Title',
            description: "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        },
        {
            id: 13,
            clickable:true,
            image: '/images/team/team-member-1.png',
            name: 'Team Member 1',
            selected: '/images/team/selected/team-member-1s.png',
            hover: '/images/team/hover/team-member-1h.png',
            title: 'Job Title',
            description: "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        },
        {
            id: 14,
            clickable:false,
            image: '/images/team/team-d.png',
            name: 'Team Member D',
            title: 'Job Title',
            description: "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        },
        {
            id: 15,
            clickable:true,
            image: '/images/team/team-member-2.png',
            name: 'Team Member 2',
            selected: 'https://placehold.co/200x250',
            title: 'Job Title',
            description: "Our aim is to offer the industry's best quality products at a competitive price, direct to homeowners. More and more customers are now looking for the most cost-effective way to get the same quality products at a fraction of the high street price, and we are happy to advise and liaise with your builders, fitters or project managers throughout your order. For customers who want the full survey and installation service, we truly believe we offer the best package in the business. Our nationwide installation service is unrivalled by any other online company - click here to read more."
        },
    ];

    const totalSlides = teamMembers.length / 5;

    // For selecting our team member that triggers popup
    const handleTeamMemberClick = (member) => {
        if (member.clickable === true) {
            setSelectedMember(member);
            setIsPopupOpen(true);
        }
    };

    // colose popup
    const closePopup = () => {
        setIsPopupOpen(false);
        setSelectedMember(null);
    };

    // next arrow button
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    // prev arrow button
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    // template for each team member to build the jsx
    const renderTeamMember = (member) => {
        return (
            <div 
                key={member.id}
                className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-200"
                onClick={() => handleTeamMemberClick(member)}
            >
                <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                    onMouseEnter={(e) => {
                        if (member.hover) {
                            e.target.src = member.hover;
                        }
                    }}
                    onMouseLeave={(e) => {
                        e.target.src = member.image;
                    }}
                />
            </div>
        );
    };

    // Navigation functions for popup
    const navigateTeamMember = (direction) => {
        // Extract original ID if it contains slide prefix
        const originalId = selectedMember.id.toString().includes('-') 
            ? parseInt(selectedMember.id.toString().split('-').pop())
            : selectedMember.id;
            
        const currentIndex = teamMembers.findIndex(member => member.id === originalId);
        
        // just incase
        if (currentIndex === -1) return;
        
        let newIndex;
        
        if (direction === 'next') {
            newIndex = currentIndex < teamMembers.length - 1 ? currentIndex + 1 : 0;
        } else {
            newIndex = currentIndex > 0 ? currentIndex - 1 : teamMembers.length - 1;
        }
        
        setSelectedMember(teamMembers[newIndex]);
    };

    const TeamMemberPopup = () => {
        if (!isPopupOpen || !selectedMember) return null;
        // Popup item with slider
        return (
            <div className="fixed inset-0 bg-black flex items-center justify-center z-50 p-4">
                <div className="bg-white max-w-[327px] w-full max-h-[90vh] overflow-y-auto">

                    <div className="flex justify-between items-center text-black pr-6 pt-6 border-black border-b ml-6">
                        <h3 className="text-xl"><strong>Meet</strong>, {selectedMember.name}</h3>
                        <button 
                            onClick={closePopup}
                            className="hover:text-gray-700 transition-colors"
                        >
                            <svg className="w-6 h-6  -top-2.5 -right-2.5 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    
                    <div className="pl-6 pt-4 pr-6 pb-6">
                        <div className="pb-4 flex justify-start gap-2">
                            <button 
                                onClick={() => navigateTeamMember('prev')}
                                className="w-5 h-5 bg-black text-white rounded-full hover:bg-gray-800 flex items-center justify-center transition-colors duration-200"
                                aria-label="Previous slide"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button 
                                onClick={() => navigateTeamMember('next')}
                                className="w-5 h-5 bg-black text-white rounded-full hover:bg-gray-800 flex items-center justify-center transition-colors duration-200"
                                aria-label="Next slide"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="w-full">
                                <img 
                                    src={selectedMember.selected}
                                    alt={selectedMember.name}
                                    class="m-auto object-center"
                                />
                            </div>

                            <div className="w-full">
                        
                                {selectedMember.title && (
                                    <div className="flex justify-between items-center text-black pr-6 mb-2 border-black border-b ml-1">
                                        <p className="text-lg ">{selectedMember.title}</p>
                                    </div>
                                )}
                                {selectedMember.description && (
                                    <p className="mb-4">{selectedMember.description}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="pl-4 pb-8 pr-4 max-w-6xl mx-auto">
            <div className="justify-between items-center mb-8 w-full block">
                <div>
                    <h2 className="text-4xl font-bold text-black mb-2 ">Our Team</h2>
                    {/* line below title */}
                    <div className="w-full h-px bg-black"></div>
                </div>
                {/* nav sliders. added hover state, positioning and created rounded svg for button */}
                <div className="flex gap-2 justify-end pt-4">
                    <button 
                        onClick={prevSlide}
                        className="w-10 h-10 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
                        aria-label="Previous slide"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button 
                        onClick={nextSlide}
                        className="w-10 h-10 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
                        aria-label="Next slide"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* overflow hidden so we do not see the next slide */}
            <div className="relative overflow-hidden">
                {/* added some styling for smoother transtion */}
                <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {/* Loop each page of slides, shrink on smaller screen, use renderTeamMember to display member's image */}
                    {[...Array(totalSlides)].map((_, slideIndex) => (
                        <div key={slideIndex} className="w-full flex-shrink-0">
                            {/* 5 cols in each slide, 4 spacing */}
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4">
                                {teamMembers.map((member) => renderTeamMember({
                                    ...member,
                                    id: `${slideIndex}-${member.id}` // make sure we have a unique id for each item
                                }))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Popup Modal */}
            <TeamMemberPopup />
        </div>
    );
}

export default OurTeamSection;