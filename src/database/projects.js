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
import project13 from "./../assets/projects/project13.png";
import project14 from "./../assets/projects/project14.png";
import project15 from "./../assets/projects/project15.png";
import project16 from "./../assets/projects/project16.png";
import project17 from "./../assets/projects/project17.png";

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
import desktop13 from "./../assets/projects/desktop13.png";
import desktop14 from "./../assets/projects/desktop14.png";
import desktop15 from "./../assets/projects/desktop15.png";
import desktop16 from "./../assets/projects/desktop16.png";
import desktop17 from "./../assets/projects/desktop17.png";

import mobile1 from "./../assets/projects/mobile1.png";
import mobile2 from "./../assets/projects/mobile2.png";
import mobile3 from "./../assets/projects/mobile3.png";
import mobile5 from "./../assets/projects/mobile5.png";
import mobile6 from "./../assets/projects/mobile6.png";
import mobile7 from "./../assets/projects/mobile7.png";
import mobile11 from "./../assets/projects/mobile11.png";
import mobile13 from "./../assets/projects/mobile13.png";
import mobile14 from "./../assets/projects/mobile14.png";
import mobile15 from "./../assets/projects/mobile15.png";
import mobile17 from "./../assets/projects/mobile17.png";

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
        project12,
        project13,
        project14,
        project15,
        project16,
        project17
    ],
};

const projectsDetails_en = [
    {
        image: [mobile1],
        details: "HTML5, Sass, React, firebase",
        language: [english],
        description: "An app, where you can find some driving tips and take a quiz to check your driving knowledge, designed for mobile users. You can register and use your own account, post questions or take quizes and collect the points.",
        code: "https://github.com/Cenora6/DRV-Driving-Experience",
        live: "https://cenora6.github.io/DRV-Driving-Experience/#/"
    },

    {
        image: [mobile2, desktop2],
        details: "HTML5, CSS, jQuery, webpack",
        language: [english],
        description: "To Do List, where you can write your own tasks to do, delete them or mark as 'done'. You can also check the progress bar of your list.",
        code: "https://github.com/Cenora6/To-Do-List",
        live: "https://cenora6.github.io/To-Do-List/"
    },

    {
        image: [mobile3, desktop3],
        details: "HTML5, CSS, jQuery, Webpack",
        language: [english],
        description: "'Order Your Pizza' is a website, where you can choose your pizza and calculate its price. Every step's choice is saved to the sessionStorage.",
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
        description: "An app, which you can use to donate your old books, games, clothes etc. to others. After registering your account, you can either check your statistics or fill another donation form. This website is translated to polish and english language.",
        code: "https://github.com/Cenora6/Start-Helping-App",
        live: "https://cenora6.github.io/Start-Helping-App/#/"
    },
    {
        image: [mobile6, desktop6],
        details: "HTML5, CSS, jQuery, AJAX",
        language: [english],
        description: "This application can be used to find photos from the NASA Image Library. If you click on the photos, they will appear in their original sizes.",
        code: "https://github.com/Cenora6/NASA-API-Challenge",
        live: "https://cenora6.github.io/NASA-API-Challenge/"
    },
    {
        image: [mobile7, desktop7],
        details: "HTML5, SCSS, Vanilla JavaScript",
        language: [english],
        description: "An example of the online shop's website, designed for mobile and desktop users. The calculator page is used to calculate the price of the service.",
        code: "https://github.com/Cenora6/BestShop_WS_first_RWD",
        live: "https://cenora6.github.io/BestShop_WS_first_RWD/"
    },

    {
        image: [desktop8],
        details: "HTML5, CSS, SASS, React, Webpack, Firebase",
        language: [polish],
        description: "A quiz, used to determine a travel destination. If you have ever wondered where to go on your holiday, this quiz will choose for you your travel destination! It's possible to create your own destination with photos. All results and your own places are stored in the history, where you can check them as visited.",
        code: "https://github.com/Cenora6/Your_Travel_Destination_-QUIZ-",
        live: "https://cenora6.github.io/Your_Travel_Destination_-QUIZ-/#/"
    },

    {
        image: [desktop9],
        details: "HTML5, CSS, Vanilla JavaScript",
        language: [english],
        description: "A simple game app, in which you control a cat using the keyboard's arrows and try to gather all the cupcakes.",
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

    {
        image: [mobile13, desktop13],
        details: "HTML5, SASS, React (Hooks)",
        language: [english],
        description: "A video game database, where you can find informations about all the games. This website is using IGDB database. You can also listen to a retro music while searching for the games.",
        code: "https://github.com/Cenora6/Your-Games-Database",
        live: "https://cenora6.github.io/Your-Games-Database/"
    },
    {
        image: [mobile14, desktop14],
        details: "HTML5, CSS, Bootstrap 4, Vanilla JavaScript",
        language: [english],
        description: "The idea for the project was based on the interests in South Korean culture. If you are interested in discovering South Korea, on this website you can find the basic informations about Korean buildings, historical treasure, popular food and drinks, interesting facts and numbers related to South Korea and read about music, sports and festivals.",
        code: "https://github.com/Cenora6/DiscoverKorea",
        live: "https://cenora6.github.io/DiscoverKorea/"
    },

    {
        image: [mobile15, desktop15],
        details: "HTML5, SASS, React, TypeScript",
        language: [english],
        description: "The 'Recipes' World' website gathers recipes using a free The Meal Database. The recipes are divided based on their name, category, ingredients and area. The blog section consists of example posts with photos, dates, post's tag, the options to like or share the blog post and the comments section with example comments. ",
        code: "https://github.com/Cenora6/Recipes-World",
        live: "https://cenora6.github.io/Recipes-World/"
    },

    {
        image: [desktop16],
        details: "HTML5, CSS, TypeScript",
        language: [english],
        description: "A simple virtual piano which can be used to play a music on virtual piano's keyboard. Record button which records the music played on the piano and a play button which enable listening to the recorder music were added as an additional feature.",
        code: "https://github.com/Cenora6/Virtual-Piano",
        live: "https://cenora6.github.io/Virtual-Piano/"
    },

    {
        image: [mobile17, desktop17],
        details: "HTML5, SASS, React, TypeScript",
        language: [english],
        description: "'Today I Want To Watch' is a website which was created for those who have a hard time finding the perfect movie or tv series to watch. By choosing the movie's or tv show's genre or keyword, the website chooses a random movie/tv show and shows its details (like poster, cast, description, genres, release year or seasons, links to imdb and The Movie Database) which help you make the decision what to watch. You can either try to find another movie or change the searching options and try again!",
        code: "https://github.com/Cenora6/today-i-want-to-watch",
        live: "https://cenora6.github.io/today-i-want-to-watch/"
    }
];

const projectsDetails_pl = [
    {
        image: [mobile1],
        details: "HTML5, Sass, React, firebase",
        language: [english],
        description: "Aplikacja, w której można znaleźć porady dotyczące jazdy pojazdami czy ruchu drogowego. Każda porada zawiera test - za każdą poprawną odpowiedź użytkownik dostaje punkt. Użytkownicy mogą dodać pytania dotyczące każdej z porad, a także edytować własny profil dodając zdjęcie czy opis. Aplikacja zaprojektowana jest dla użytkowników telefonów.",
        code: "https://github.com/Cenora6/DRV-Driving-Experience",
        live: "https://cenora6.github.io/DRV-Driving-Experience/#/"
    },

    {
        image: [mobile2, desktop2],
        details: "HTML5, CSS, jQuery, webpack",
        language: [english],
        description: "To Do List, czyli lista, gdzie można zapisać własne zadania do wykonania, usunąć je czy oznaczyć jako 'zakończone'. Lista posiada pasek postępu, na którym można sprawdzić procent zakończonych zadań.",
        code: "https://github.com/Cenora6/To-Do-List",
        live: "https://cenora6.github.io/To-Do-List/"
    },

    {
        image: [mobile3, desktop3],
        details: "HTML5, CSS, jQuery, Webpack",
        language: [english],
        description: "'Order Your Pizza' jest przykładową stroną, na której można zamówić pizzę. Każdy krok pozwala nam wybrać rozmiar, typ ciasta, rodzaj pizzy oraz dodatkowe składniki. Na samym końcu znajduje się kalkulator, który podlicza cenę wybranych pizz. Każdy wybór jest przechowywany w sessionStorage.",
        code: "https://github.com/Cenora6/Order-Your-Pizza",
        live: "https://cenora6.github.io/Order-Your-Pizza/"
    },

    {
        image: [desktop4],
        details: "HTML5, SASS, React, Webpack",
        language: [english],
        description: "Przykładowa aplikacja dla schronisk, dzięki której można znaleźć kota na podstawie imienia, płci bądź tego, czy kot lubi dzieci, czy nie.",
        code: "https://github.com/Cenora6/Cat_Shelter_App",
        live: "https://cenora6.github.io/Cat_Shelter_App/"
    },

    {
        image: [mobile5, desktop5],
        details: "HTML5, CSS, SASS, React, Firebase",
        language: [english, polish],
        description: "Przykładowa aplikacja/strona, na której można oddać stare książki, gdy czy ubraia potrzebującym. Po zarejestrowaniu, każdy użytkownik może sprawdzić swoje statystyki lub wypełnić nowy formularz dotyczący zbiórki. Strona dostępna w języku polskim i angielskim.",
        code: "https://github.com/Cenora6/Start-Helping-App",
        live: "https://cenora6.github.io/Start-Helping-App/#/"
    },
    {
        image: [mobile6, desktop6],
        details: "HTML5, CSS, jQuery, AJAX",
        language: [english],
        description: "Aplikacja używana do wyszukania zdjęć znajdujących się w bibliotece obrazów NASA. Po kliknięciu na wybrane zdjęcia, pojawiają się one w oryginalnych rozmiarach.",
        code: "https://github.com/Cenora6/NASA-API-Challenge",
        live: "https://cenora6.github.io/NASA-API-Challenge/"
    },
    {
        image: [mobile7, desktop7],
        details: "HTML5, SCSS, Vanilla JavaScript",
        language: [english],
        description: "Przykkładowa strona sklepu, zaprojektorana zarówno dla użytkowników telefonów, jak i komputerów. Strona zawiera również kalkulator, dzięki któremu można obliczyć cenę usług.",
        code: "https://github.com/Cenora6/BestShop_WS_first_RWD",
        live: "https://cenora6.github.io/BestShop_WS_first_RWD/"
    },

    {
        image: [desktop8],
        details: "HTML5, CSS, SASS, React, Webpack, Firebase",
        language: [polish],
        description: "Projekt 'Your Travel Destination' (Twój cel podróży) pozwoli Ci na bazie twoich preferencji za pomocą quizu wybrać najbardziej pasujące miejsce na podróż. Możesz tutaj również przeglądać historię wyników quizu, oznaczać miejsca jako 'Zwiedzone', a także dodać własne miejsca.",
        code: "https://github.com/Cenora6/Your_Travel_Destination_-QUIZ-",
        live: "https://cenora6.github.io/Your_Travel_Destination_-QUIZ-/#/"
    },

    {
        image: [desktop9],
        details: "HTML5, CSS, Vanilla JavaScript",
        language: [english],
        description: "Prosta gra, w której kontrolujesz kota używając klawiszy strzałem i próbujesz zebrać jak największą ilość babeczek.",
        code: "https://github.com/Cenora6/Furry-Game",
        live: "https://cenora6.github.io/Furry-Game/"
    },
    {
        image: [desktop10],
        details: "HTML5, SCSS, React",
        language: [english],
        description: "Strona portfolio.",
        code: "https://github.com/Cenora6/DRV-Driving-Experience",
        live: "https://cenora6.github.io/DRV-Driving-Experience/#/"
    },

    {
        image: [mobile11, desktop11],
        details: "HTML5, CSS, jQuery",
        language: [english],
        description: "Pasek postępu, którego kolor i procent wypełnienia kolorem zmienia się na podstawie wybranego przycisku. Możliwa jest również zmiana trybu nocnego lub trybu dziennego strony.",
        code: "https://github.com/Cenora6/Progress-Bar",
        live: "https://cenora6.github.io/Progress-Bar/"
    },

    {
        image: [desktop12],
        details: "HTML5, CSS, Vanilla JavaScript",
        language: [english],
        description: "Przykładowa strona stworzona przy wykorzystaniu podstawowych technologii.",
        code: "https://github.com/Cenora6/BestShop_WS_first",
        live: "https://cenora6.github.io/BestShop_WS_first/"
    },

    {
        image: [mobile13, desktop13],
        details: "HTML5, SASS, React (Hooks)",
        language: [english],
        description: "Baza danych zawierająca informacje o grach komputerowych wykonana w stylu pixel art. Strona używa informacji ze strony IGDB. Podczas szukania gier, możesz posłuchać muzyki retro, by wczuć się w klimat.",
        code: "https://github.com/Cenora6/Your-Games-Database",
        live: "https://cenora6.github.io/Your-Games-Database/"
    },
    {
        image: [mobile14, desktop14],
        details: "HTML5, CSS, Bootstrap 4, Vanilla JavaScript",
        language: [english],
        description: "Strona zbudowana przy użyciu Bootstrap 4 zawierająca informacje o Korei Południowej - o najważniejszych zabytkach, jedzeniu, liczbach, sportach, muzyce i festivalach.",
        code: "https://github.com/Cenora6/DiscoverKorea",
        live: "https://cenora6.github.io/DiscoverKorea/"
    },

    {
        image: [mobile15, desktop15],
        details: "HTML5, SASS, React, TypeScript",
        language: [english],
        description: "Strona 'Świat Przepisów' wykorzystuję bazę danych The Meal Database. Przepisy można filtrować pod względem użytych składników, kategorii, nazwy oraz kraju. Strona zawiera również blog, gdzie mogą byc zamieszczone i komentowane wpisy. ",
        code: "https://github.com/Cenora6/Recipes-World",
        live: "https://cenora6.github.io/Recipes-World/"
    },

    {
        image: [desktop16],
        details: "HTML5, CSS, TypeScript",
        language: [english],
        description: "Proste wirtualne pianino, na którym można wygrywać różne dźwięki, a także nagrywać zagraną melodię przy użyciu mikrofonu komputera.",
        code: "https://github.com/Cenora6/Virtual-Piano",
        live: "https://cenora6.github.io/Virtual-Piano/"
    },

    {
        image: [mobile17, desktop17],
        details: "HTML5, SASS, React, TypeScript",
        language: [english],
        description: "'Today I Want To Watch' została stworzona dla tych, którzy mają zawsze problem znaleźć interesujący film czy serial do obejrzenia. Poprzez wybór gatunku lub słów kluczowych związanych z filmem lub serialem, aplikacja wybiera losowo jeden tytuł i pokazuje jego plakat, obsadę, opis, gatunek, rok wydania, a także odnośniki do stron imdb oraz tmdb. Jeśli wybrany tytuł nie trafi w gust, wystarczy ponowić wyszukiwanie lub zmienić jego parametry.",
        code: "https://github.com/Cenora6/today-i-want-to-watch",
        live: "https://cenora6.github.io/today-i-want-to-watch/"
    }
];

export { projects, projectsDetails_pl, projectsDetails_en };