import pl from './pl';
import en from './en';
import english from "./../../assets/languages/english.png"
import polish from "./../../assets/languages/polish.png"

export const dictionaryList = {
    pl,
    en,
};

export const languageOptions = [
    { id: 'pl', value: 'pl', photo: polish },
    { id: 'en', value: 'en', photo: english },
];