import React from 'react';

const OurTeamSection  = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    // Team member data - This could come from a get call
    // we can use the IDs as keys. Good for React to identify items have changed, added, or removed
    const teamMembers = [
        { id: 1, image: '/images/team-member-1.png', name: 'Team Member 1', hover: '/images/team-member-1-hover-state.png' },
        { id: 2, image: '/images/team-g.png', name: 'Team Member G'},
        { id: 3, image: '/images/team-member-2.png', name: 'Team Member 2' },
        { id: 4, image: '/images/team-member-1.png', name: 'Team Member 1', hover: '/images/team-member-1-hover-state.png' },
        { id: 5, image: '/images/team-member-2.png', name: 'Team Member 2' },
        
        { id: 6, image: '/images/team-member-1.png', name: 'Team Member 1', hover: '/images/team-member-1-hover-state.png' },
        { id: 7, image: '/images/team-member-2.png', name: 'Team Member 2' },
        { id: 8, image: '/images/team-f.png', name: 'Team Member F'},
        { id: 9, image: '/images/team-member-1.png', name: 'Team Member 1', hover: '/images/team-member-1-hover-state.png' },
        { id: 10, image: '/images/team-member-2.png', name: 'Team Member 2' },
        
        { id: 11, image: '/images/team-member-1.png', name: 'Team Member 1', hover: '/images/team-member-1-hover-state.png' },
        { id: 12, image: '/images/team-member-2.png', name: 'Team Member 2' },
        { id: 13, image: '/images/team-member-1.png', name: 'Team Member 1', hover: '/images/team-member-1-hover-state.png' },
        { id: 14, image: '/images/team-d.png', name: 'Team Member D'},
        { id: 15, image: '/images/team-member-2.png', name: 'Team Member 2' },
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

    return (<h1>Our Team</h1>);
}

export default OurTeamSection;
