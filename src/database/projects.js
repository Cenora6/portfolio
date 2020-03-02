import project1 from "./../assets/projects/project1.png";
import project2 from "./../assets/projects/project2.png";
import project3 from "./../assets/projects/project3.png";
import project4 from "./../assets/projects/project4.png";
import project5 from "./../assets/projects/project5.png";
import project6 from "./../assets/projects/project6.png";
import project7 from "./../assets/projects/project7.png";
import project8 from "./../assets/projects/project8.png";
import project9 from "./../assets/projects/project9.png";
import project10 from "./../assets/projects/project10.png";
import project11 from "./../assets/projects/project11.png";
import project12 from "./../assets/projects/project12.png";

import desktop2 from "./../assets/projects/desktop2.png";
import desktop3 from "./../assets/projects/desktop3.png";
import desktop4 from "./../assets/projects/desktop4.png";
import desktop5 from "./../assets/projects/desktop5.png";
import desktop6 from "./../assets/projects/desktop6.png";
import desktop7 from "./../assets/projects/desktop7.png";
import desktop8 from "./../assets/projects/desktop8.png";
import desktop9 from "./../assets/projects/desktop9.png";
import desktop10 from "./../assets/projects/desktop10.png";
import desktop11 from "./../assets/projects/desktop11.png";
import desktop12 from "./../assets/projects/desktop12.png";

import mobile1 from "./../assets/projects/mobile1.png";
import mobile2 from "./../assets/projects/mobile2.png";
import mobile3 from "./../assets/projects/mobile3.png";
import mobile5 from "./../assets/projects/mobile5.png";
import mobile6 from "./../assets/projects/mobile6.png";
import mobile7 from "./../assets/projects/mobile7.png";
import mobile11 from "./../assets/projects/mobile11.png";

import polish from "./../assets/languages/polish.png";
import english from "./../assets/languages/english.png";

const projects = {
    link: [
        project1,
        project2,
        project3,
        project4,
        project5,
        project6,
        project7,
        project8,
        project9,
        project10,
        project11,
        project12
    ],
};

const projectsDetails = [
    {
        image: [mobile1],
        details: "HTML5, Sass, React, firebase",
        language: [english],
        description: "An app, where you can find some driving tips and take a quiz to check your driving knowledge.",
        code: "https://github.com/Cenora6/DRV-Driving-Experience",
        live: "https://cenora6.github.io/DRV-Driving-Experience/#/"
    },

    {
        image: [mobile2, desktop2],
        details: "HTML5, CSS, jQuery, webpack",
        language: [english],
        description: "To Do List, where you can write your own tasks to do, delete them or mark as 'done'. You can also check the progress bar of your To Do List.",
        code: "https://github.com/Cenora6/To-Do-List",
        live: "https://cenora6.github.io/To-Do-List/"
    },

    {
        image: [mobile3, desktop3],
        details: "HTML5, CSS, jQuery, Webpack",
        language: [english],
        description: "'Order Your Pizza' is a website, where you can choose your pizza and calculate its price.",
        code: "https://github.com/Cenora6/Order-Your-Pizza",
        live: "https://cenora6.github.io/Order-Your-Pizza/"
    },

    {
        image: [desktop4],
        details: "HTML5, SASS, React, Webpack",
        language: [english],
        description: "A basic app for a cat shelter used to show and filter all the cats in a shelter. The application lets you search cat based on their age and sex, find all cats who like children and search for the cat's name",
        code: "https://github.com/Cenora6/Cat_Shelter_App",
        live: "https://cenora6.github.io/Cat_Shelter_App/"
    },

    {
        image: [mobile5, desktop5],
        details: "HTML5, CSS, SASS, React, Firebase",
        language: [english, polish],
        description: "An app, which you can use to donate your old books, games, clothes etc. to others.",
        code: "https://github.com/Cenora6/Start-Helping-App",
        live: "https://cenora6.github.io/Start-Helping-App/#/"
    },
    {
        image: [mobile6, desktop6],
        details: "HTML5, CSS, jQuery, AJAX",
        language: [english],
        description: "This application can be used to find photos from the NASA Image Library. If you click on the photos, they will appear in original sizes.",
        code: "https://github.com/Cenora6/NASA-API-Challenge",
        live: "https://cenora6.github.io/NASA-API-Challenge/"
    },
    {
        image: [mobile7, desktop7],
        details: "HTML5, SCSS, Vanilla JavaScript",
        language: [english],
        description: "An example of the online shop's website, this time with mobile version.",
        code: "https://github.com/Cenora6/BestShop_WS_first_RWD",
        live: "https://cenora6.github.io/BestShop_WS_first_RWD/"
    },

    {
        image: [desktop8],
        details: "HTML5, CSS, SASS, React, Webpack, Firebase",
        language: [polish],
        description: "A quiz, used to determine a travel destination. If you have ever wondered where to go on your holiday, this quiz will choose for you your travel destination!",
        code: "https://github.com/Cenora6/Your_Travel_Destination_-QUIZ-",
        live: "https://cenora6.github.io/Your_Travel_Destination_-QUIZ-/#/"
    },

    {
        image: [desktop9],
        details: "HTML5, CSS, Vanilla JavaScript",
        language: [english],
        description: "Help the kitty eat all the cupcakes! :)",
        code: "https://github.com/Cenora6/Furry-Game",
        live: "https://cenora6.github.io/Furry-Game/"
    },
    {
        image: [desktop10],
        details: "HTML5, SCSS, React",
        language: [english],
        description: "A portfolio website.",
        code: "https://github.com/Cenora6/DRV-Driving-Experience",
        live: "https://cenora6.github.io/DRV-Driving-Experience/#/"
    },

    {
        image: [mobile11, desktop11],
        details: "HTML5, CSS, jQuery",
        language: [english],
        description: "A progress bar, where the bar's color is based on a clicked button. It's possible to change the mode of the website from light to dark.",
        code: "https://github.com/Cenora6/Progress-Bar",
        live: "https://cenora6.github.io/Progress-Bar/"
    },

    {
        image: [desktop12],
        details: "HTML5, CSS, Vanilla JavaScript",
        language: [english],
        description: "An example website of an online shop made using basic technologies.",
        code: "https://github.com/Cenora6/BestShop_WS_first",
        live: "https://cenora6.github.io/BestShop_WS_first/"
    },
];

export { projects, projectsDetails };