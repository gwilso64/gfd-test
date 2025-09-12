// Locations data structure
const locations = [
  { 
    id: 1, 
    title: "Our Story",
    images: {
      mobile: {
        top: "/images/mobile/mobile-1.png",
        bottom: "/images/mobile/mobile-2.png", 
        side: "/images/mobile/mobile-3.png"
      },
      desktop: {
        main: "/images/ourStory/main.png",
        leftBottom: "images/ourStory/bottom-images.png",
        rightBottom: "/images/ourStory/composite-doors.png",
        sidebar: "images/ourStory/door-side-bar.png"
      }
    },
    content: {
      mainText: [
        "Coming from a lifelong background in the double glazing industry, we began trading online in 2008. Our core product offering was composite doors, and we were one of the first companies in the UK to pioneer online ordering for this product.",
        "Over the past 15 years, we have expanded our portfolio of products across a range of composite, aluminium, uPVC and security products. Our goal was always to offer a complete home improvement solution, which we now carry out nationwide through GFD Homes."
      ],
      mobileText: "Over the past 15 years, we have expanded our portfolio of products across a range of composite, aluminium, uPVC and security products. Our goal was always to offer a complete home improvement solution, which we now carry out nationwide through GFD Homes."
    }
  },
  { 
    id: 2, 
    title: "Composite Doors",
    images: {
      mobile: {
        top: "/images/mobile/mobile-1-b.png",
        bottom: "/images/mobile/mobile-2-b.png",
        side: "/images/mobile/mobile-3-b.png"
      },
      desktop: {
        main: "/images/ourStory/main-b.png",
        leftBottom: "images/ourStory/bottom-images-2.png",
        rightBottom: "/images/ourStory/composite-doors-b.png",
        sidebar: "images/ourStory/door-side-bar-b.png"
      }
    },
    content: {
      mainText: [
        "Proin sagittis lacus lectus. In convallis euismod luctus. Sed aliquet facilisis pulvinar. Duis nec blandit enim. Praesent et interdum nunc. Nulla tincidunt eleifend massa. Donec porta consequat eros at porttitor. placerat hendrerit. Nulla tinci",
        "tincidunt sem, commodo bibendum nunc hendrerit id. Proin egestas, velit ut faucibus placerat, augue lacus egestas nisl, in congue tellus erat sit amet turpis. Mauris ultricies facilisis diam, ut suscipit lorem. Proin molestie metus nec nibh rhoncus, ut hendrerit tellus rutrum."
      ],
      mobileText: "urna nec pretium aliquet, velit libero efficitur odio, eu faucibus magna augue vitae turpis. Proin commodo nulla vitae placerat hendrerit. Nulla tincidunt eleifend massa. Donec porta consequat eros at porttitor. Nulla tincidunt eleifend massa. Donec porta consequat eros at porttitor."
    }
  }
];

// Usage example:
// Current location index
let currentLocationId = 0;

// Get current location data
const currentLocation = locations[currentLocationId];

// Access specific elements:
// currentLocation.title
// currentLocation.images.desktop.main
// currentLocation.content.mainText[0]

export default locations;