import React, { useState,useEffect } from 'react';

const OurTeamSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);
    
    // Team member data - This could come from a get call
    // we can use the IDs as keys. Good for React to identify items have changed, added, or removed

    // clickable is this a clickable item or a letter
    // selected image for selected user, I have added a placeholder for team members that do not have a photo (https://placehold.co/200x250)
    // hover is for hover state image

    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect runs onload and calls fetchTeams to get the team member data
    useEffect(() => {
        const fetchTeams = async () => {
        try {
            setLoading(true);
            const response = await fetch('/api/team-members');
            
            if (!response.ok) {
            throw new Error('Failed to fetch teams');
            }
            
            const data = await response.json();
            // we use set state to store the teams data
            setTeams(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
        };

        fetchTeams();
    }, []);

    // when loading display simple loading message
    if (loading) return <div>Loading...</div>;
    // when loading display simple error message (message comes from backend)
    if (error) return <div>Error: {error}</div>;

    // calulate slides
    const totalSlides = Math.max(1, Math.ceil(teams.length / 15));
    const mobileSlide = Math.max(1, Math.ceil(teams.length / 6));

    // For selecting our team member that triggers popup
    const handleTeamMemberClick = (member) => {
        if (member.clickable === true) {
            setSelectedMember(member);
            setIsPopupOpen(true);
        }
    };

    // close popup
    const closePopup = () => {
        setIsPopupOpen(false);
        setSelectedMember(null);
    };

    // next arrow button
    const nextSlide = () => {
        const maxSlides = window.innerWidth < 768 ? mobileSlide : totalSlides;
        setCurrentSlide((prev) => (prev + 1) % maxSlides);
    };

    const prevSlide = () => {
        const maxSlides = window.innerWidth < 768 ? mobileSlide : totalSlides;
        setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
    };

    // template for each team member to build the jsx
    // Added !member.clickable ? 'hidden sm:hidden' : '' to make sure not clickable items (text) are not visible on mobile
    const renderTeamMember = (member) => {
        return (
        <div 
            key={member.id}
            className={`overflow-hidden md:block cursor-pointer hover:shadow-lg transition-shadow duration-200 ${
                !member.clickable ? 'hidden sm:hidden' : ''
            }`}
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
            
        const currentIndex = teams.findIndex(member => member.id === originalId);
        
        // just incase
        if (currentIndex === -1) return;
        
        let newIndex;
        
        if (direction === 'next') {
            newIndex = currentIndex < teams.length - 1 ? currentIndex + 1 : 0;
        } else {
            newIndex = currentIndex > 0 ? currentIndex - 1 : teams.length - 1;
        }
        
        setSelectedMember(teams[newIndex]);
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
                                    className="m-auto object-center"
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
            {/* overflow hidden so we do not see the next slide - Desktop slider */}
            <div className="relative overflow-hidden">
                <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {/* Desktop slides (15 items each in 3 rows of 5) */}
                    <div className="hidden md:flex">
                        {[...Array(totalSlides)].map((_, slideIndex) => (
                            <div key={slideIndex} className="w-full flex-shrink-0">
                                <div className="grid grid-cols-5 grid-rows-3 gap-4">
                                    {teams
                                        .slice(slideIndex * 15, slideIndex * 15 + 15)
                                        .map((member) => renderTeamMember(member))
                                    }
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile slides (6 items each) */}
                    <div className="md:hidden flex">
                        {[...Array(mobileSlide)].map((_, slideIndex) => (
                            <div key={slideIndex} className="w-full flex-shrink-0">
                                <div className="grid grid-cols-2 gap-2">
                                    {teams
                                        .slice(slideIndex * 6, slideIndex * 6 + 6)
                                        .map((member) => renderTeamMember(member))
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Popup Modal */}
            <TeamMemberPopup />
        </div>
    );
}

export default OurTeamSection;