import React, { useState,useEffect } from 'react';
import TeamMemberPopup from '../Components/OurTeamSection/TeamMemberPopup';

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
    // Because letters are not viewable on mobille I will remove them
    const clickableTeams = teams.filter(member => member.clickable === true);
    // Update the count for team without letters
    const clickableCount = teams.filter(member => member.clickable === true).length;
    const mobileSlide = Math.max(1, Math.ceil(clickableCount / 6)); // 6 clickable items per mobile slide

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

const renderTeamOverlayMember = (member) => {

    return (
        <div 
            key={member.id}
            className={`overflow-hidden relative md:block cursor-pointer group ${
                !member.clickable ? 'hidden sm:hidden' : ''
            }`}
            onClick={() => handleTeamMemberClick(member)}
            onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector('img');
                if (member.hover && img) {
                    img.src = member.hover;
                }
            }}
            onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector('img');
                if (img) {
                    img.src = member.image;
                }
            }}
        >
            <img 
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover filter"
            />
         {/* Hover Overlay Content - Only visible on hover */}
        {member.clickable && (
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none">
            {/* Role Name at Top */}
            <div className="absolute top-0 left-0 right-0 bg-black text-white p-2 text-left text-sm">
                {member.title || 'Team Member'}
            </div>
            <div 
                className="absolute bottom-0 left-0 right-0 bg-black text-white p-2 flex items-right justify-right gap-2 text-sm pointer-events-auto"
                onClick={(e) => {
                    e.stopPropagation();
                    handleTeamMemberClick(member);
                }}
            >
                <span className="ml-auto -top-[2px] relative">View Profile</span>
                <img 
                    src="images/team/profile-icon.png" 
                    alt="Profile icon"
                    className="w-4 h-4"
                />
            </div>
            </div>
        )}
        </div>
    );
};
    // template for each team member to build the jsx
 // Added !member.clickable ? 'hidden sm:hidden' : '' to make sure not clickable items (text) are not visible on mobile
const renderTeamMember = (member) => {
    return (
        <div 
            key={member.id}
            className={`overflow-hidden relative md:block cursor-pointer hover:shadow-lg transition-shadow duration-200 group ${
                !member.clickable ? 'hidden sm:hidden' : ''
            }`}
            onClick={() => handleTeamMemberClick(member)}
        >
            <img 
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
            />
            
            {/* Show hover image on group hover */}
            {member.hover && (
                <img 
                    src={member.hover}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-300"
                />
            )}
            
            {/* Hover Overlay Content - Only visible on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {/* Role Name at Top */}
                <div className="absolute top-0 left-0 right-0 bg-black text-white p-2 text-center text-sm">
                    {member.role || 'Team Member'}
                </div>
                
                {/* Profile Icon above View Profile */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <img 
                        src="/images/team/profile/profile-1.png" 
                        alt="Profile icon"
                        className="w-8 h-8"
                    />
                </div>
                
                {/* View Profile at Bottom */}
                <div 
                    className="absolute bottom-0 left-0 right-0 bg-black text-white p-2 text-center text-sm pointer-events-auto hover:bg-gray-800 transition-colors"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleTeamMemberClick(member);
                    }}
                >
                    View Profile
                </div>
            </div>
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
        // Skip over non clickable items
        if (teams[newIndex].clickable===false) {
            newIndex = newIndex+1;
        }
        setSelectedMember(teams[newIndex]);
    };

    return (
        <div className="pl-4 pb-8 pr-4 max-w-6xl mx-auto">
            <div className="justify-between items-center mb-4 w-full block">
                <div>
                    <h2 className="text-4xl font-bold text-black mb-2 ">Our Team</h2>
                    {/* line below title */}
                    <div className="w-full h-px bg-black"></div>
                </div>
                {/* Desktop nav sliders. added hover state, positioning and created rounded svg for button */}
                <div className="hidden md:flex gap-2 justify-end pt-4">
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
                {/* Mobile nav sliders. black and aligned to the left */}
                <div className="flex md:hidden gap-2 justify-start pt-4">
                    <button 
                        onClick={prevSlide}
                        className="w-5 h-5 bg-black text-white rounded-full hover:bg-gray-800 flex items-center justify-center transition-colors duration-200"
                        aria-label="Previous slide"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button 
                        onClick={nextSlide}
                        className="w-5 h-5 bg-black text-white rounded-full hover:bg-gray-800 flex items-center justify-center transition-colors duration-200"
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
                                        .map((member) => renderTeamOverlayMember(member))
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
                                    {clickableTeams
                                        .slice(slideIndex * 6, slideIndex * 6 + 6)
                                        .map((member) => renderTeamMember(member))
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Mobile Page Dots */}
            <div className="md:hidden flex justify-start gap-1.5 mt-4">
                {[...Array(mobileSlide)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                            currentSlide === index 
                                ? 'bg-black w-6' 
                                : 'bg-gray-400 hover:bg-gray-600'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
            {/* Popup Modal */}
            <TeamMemberPopup 
                isOpen={isPopupOpen}
                member={selectedMember}
                onClose={closePopup}
                onNavigate={navigateTeamMember}
            />

        </div>
    );
}
export default OurTeamSection;