import React, { useState }  from 'react';

const OurTeamSection  = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    // Team member data - This could come from a get call
    // we can use the IDs as keys. Good for React to identify items have changed, added, or removed
    const teamMembers = [
        { id: 1, image: '/images/team/team-member-1.png', name: 'Team Member 1', hover: '/images/team/hover/team-member-1h.png' },
        { id: 2, image: '/images/team/team-g.png', name: 'Team Member G'},
        { id: 3, image: '/images/team/team-member-2.png', name: 'Team Member 2' },
        { id: 4, image: '/images/team/team-member-1.png', name: 'Team Member 1', hover: '/images/team/hover/team-member-1h.png' },
        { id: 5, image: '/images/team/team-member-2.png', name: 'Team Member 2' },
        
        { id: 6, image: '/images/team/team-member-1.png', name: 'Team Member 1', hover: '/images/team/hover/team-member-1h.png' },
        { id: 7, image: '/images/team/team-member-2.png', name: 'Team Member 2' },
        { id: 8, image: '/images/team/team-f.png', name: 'Team Member F'},
        { id: 9, image: '/images/team/team-member-1.png', name: 'Team Member 1', hover: '/images/team/hover/team-member-1h.png' },
        { id: 10, image: '/images/team/team-member-2.png', name: 'Team Member 2' },
        
        { id: 11, image: '/images/team/team-member-1.png', name: 'Team Member 1', hover: '/images/team/hover/team-member-1h.png' },
        { id: 12, image: '/images/team/team-member-2.png', name: 'Team Member 2' },
        { id: 13, image: '/images/team/team-member-1.png', name: 'Team Member 1', hover: '/images/team/hover/team-member-1h.png' },
        { id: 14, image: '/images/team/team-d.png', name: 'Team Member D'},
        { id: 15, image: '/images/team/team-member-2.png', name: 'Team Member 2' },
    ];

    // This will work out our pages (5 to a page)
    const totalSlides = teamMembers.length / 5; 

    // For selecting our member (possible add a popup feature?)
    const handleTeamMemberClick = (member) => {
        console.log('Team member clicked:', member);
    };
    // next arrow button
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    // prev arrow button
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const renderTeamMember = (member) => {

    const [isHovered, setIsHovered] = useState(false);
    const imageSrc = isHovered && member.hover ? member.hover : member.image;

    return (
        <div 
            key={member.id}
            className=" rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-200"
            onClick={() => handleTeamMemberClick(member)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img 
            src={imageSrc}
            alt={member.name}
            className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
            />
        </div>);
    };

    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-4xl font-bold text-black mb-4">Our Team</h2>
                     {/* line below title */}
                    <div className="w-full h-px bg-black"></div>
                </div>
                {/*nav sliders. added hover state, positioning and created rounded svg for button */}
                <div className="flex gap-2">
                    <button 
                        onClick={prevSlide}
                        className="w-10 h-10 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
                        aria-label="Previous slide"
                    >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    </button>
                    <button 
                        onClick={nextSlide}
                        className="w-10 h-10 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
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
            { /* added some styling for smoother transtion */ }
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
        </div>
    );
}

export default OurTeamSection;
