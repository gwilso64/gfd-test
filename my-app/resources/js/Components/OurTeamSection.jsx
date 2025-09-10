import React from 'react';

const OurTeamSection  = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    // Team member data - This could come from a get call
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

    return (<h1>Our Team</h1>);
}

export default OurTeamSection;
