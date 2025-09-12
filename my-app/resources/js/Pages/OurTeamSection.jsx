import React, { useState,useEffect } from 'react';
import TeamMemberPopup from '../Components/OurTeamSection/TeamMemberPopup';
import TeamMemberOverlay from '../Components/OurTeamSection/TeamMemberOverlay';
import TeamMember from '../Components/OurTeamSection/TeamMember';

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
        // gets set value, updates with copy and then replaces
        setCurrentSlide((prev) => (prev + 1) % maxSlides);
    };

    // prev arrow button
    const prevSlide = () => {
        const maxSlides = window.innerWidth < 768 ? mobileSlide : totalSlides;
        // gets set value, updates with copy and then replaces
        setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
    };

    // Navigation functions for popup
    const navigateTeamMember = (direction) => {
        // Extract original ID if it contains slide prefix
        const originalId = selectedMember.id.toString().includes('-') 
            ? parseInt(selectedMember.id.toString().split('-').pop())
            : selectedMember.id;
        
        // find what page we are currently on    
        const currentIndex = teams.findIndex(member => member.id === originalId);
        
        // just incase
        if (currentIndex === -1) return;
        
        let newIndex;
        
        if (direction === 'next') {
            newIndex = currentIndex < teams.length - 1 ? currentIndex + 1 : 0;
        } else {
            newIndex = currentIndex > 0 ? currentIndex - 1 : teams.length - 1;
        }
        // Skip over non clickable items (letters)
        if (teams[newIndex].clickable===false) {
            newIndex = newIndex+1;
        }
        setSelectedMember(teams[newIndex]);
    };

    return (
        <div className="pl-4 pb-8 pr-4 mx-auto">
            <div className="justify-between items-center mb-4 w-full block">
                <div>
                    <h2 className=" m-auto text-4xl font-bold text-black mb-2 ">Our Team</h2>
                    {/* line below title */}
                    <div class="relative max-w-6xl">
                        <div className="relative">
                            <div className="absolute bottom-0 left-0 w-screen border-b border-gray-800"></div>
                        </div>
                    </div>
                </div>
                {/* Desktop nav sliders. added hover state, positioning and created rounded svg for button */}
                <div className=" m-auto hidden md:flex gap-2 justify-end pt-4">
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
            <div className=" m-auto relative overflow-hidden">
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
                                    .map((member) => (
                                        <TeamMemberOverlay 
                                            key={member.id}
                                            member={member} 
                                            onMemberClick={handleTeamMemberClick} 
                                        />
                                    ))
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
                                    .map((member) => (
                                        <TeamMember 
                                            key={member.id}
                                            member={member} 
                                            onMemberClick={handleTeamMemberClick} 
                                        />
                                    ))
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