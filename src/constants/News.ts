import image1 from '../assets/images/hero.png';
import image2 from '../assets/images/img10.png';
import image3 from '../assets/images/img4.png';
import image4 from '../assets/images/img24.png';
import image5 from '../assets/images/img19.png';
import image6 from '../assets/images/0.03.png';
import image7 from '../assets/images/n4.png';

export interface NewsItem {
    id: number;
    title: string;
    date: string;
    subTitle: string;
    description: string;
    image: string;
  }
export const NEWS_INFO = [
    { 
        id: 1,
        title: "Ward 21 0.01v is Here!", 
        date:"2025-02-11",
        subTitle: "Play the First Test Version for Free!",
        description:"The wait is over! The first testing version of Ward 21 (0.01v) is now available for download. Get a first look at the horror, survival mechanics, and upgraded AI as you step into the eerie halls of the abandoned hospital. This is just the beginning, and we can’t wait to hear your feedback. Download and play it now for free if you dare! ",
        image: image1,
    },
     { 
        id: 2,
        title: " Save Your Nightmare", 
        date:"2025-01-09",
        subTitle: "Pick Up Right Where You Left Off",
        description:"Survival just got more manageable! Ward 21 now features a save system, allowing you to save your progress and load the game exactly where you left off. No more starting over whether you’re escaping zombies or uncovering hidden secrets, you can now continue your journey anytime. Stay alive, keep exploring, and don’t let the horrors catch you off guard! ",
        image: image2,
    },
    { 
        id: 3,
        title: "0.02v Now Available!", 
        date:"2025-01-09",
        subTitle: "Major Bug Fixes & Improvements",
        description:"Thanks to your feedback and bug reports, we’ve rolled out Ward 21 - Version 0.02v with major bug fixes and updates for a smoother and scarier experience. We truly appreciate your support in making the game better! You can download and play the latest version right now keep surviving, keep exploring, and watch out for what lurks in the shadows! ",
        image: image3,
    },
    { 
        id: 4,
        title: " NEW Easter Eggs ", 
        date:"2025-01-09",
        subTitle: "TV Show & Meme References Now in Ward 21.",
        description:"Get ready for some fun discoveries! We've added new Easter eggs hidden throughout Ward 21, featuring references to popular TV shows and internet memes. Whether you're a sharp eyed explorer or just casually wandering the eerie halls, these surprises will bring a smile (or a shiver) to your face. Can you spot them all? Keep your eyes peeled and share your findings with the community!",
        image: image4,
    },
    { 
        id: 5,
        title: " Zombie AI 2.0", 
        date:"2025-01-09",
        subTitle: "Five New Zombie Types with Advanced AI Behavior.",
        description:"The undead just got an upgrade! Ward 21 now features five unique zombie types, each with distinct animations, movement speeds, and hit resistance. These terrifying creatures relentlessly chase you wherever you go, making survival even more intense. But here is the twist if you manage to escape and hide, they will lose sight of you and wander away, adding a new layer of stealth and strategy to the game. Are you ready to outsmart the evolved horrors lurking in the shadows?",
        image: image5,
    },
    {
        id: 6,
        title: "Version 0.03 Update",
        date: "2025-02-15",
        subTitle: "Improved Stability, Multiple Endings, and a New Room!",
        description: "Ward 21 just got even better! The latest update addresses key bugs and improves overall stability. The save system has been updated, ensuring smoother progress tracking. Players can now experience multiple endings, making each playthrough more immersive and unpredictable. Additionally, a newly designed Doctor’s Office has been added, bringing more depth to the eerie hospital environment. Will you uncover its secrets? Jump in and explore the latest horrors!",
        image: image6
    },
       {
        id: 7,
        title: "Version 0.04 Update",
        date: "2025-06-11",
        subTitle: "Bug fixes, brightness tweaks, VFX balancing, and improved zombie animations.",
        description: "This update brings several core improvements to enhance your gameplay experience. I've fixed known bugs that affected progression and performance, adjusted overall brightness for better visibility in dark areas, and fine tuned the visual effects for a more balanced horror atmosphere. Zombie animations have also been polished to deliver smoother, more realistic movements that heighten the fear factor. Thank you to everyone who shared feedback",
        image: image7
    }
    
   
  ];