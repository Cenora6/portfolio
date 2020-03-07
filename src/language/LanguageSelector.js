import React, {useContext} from 'react';
import {languageOptions} from './languages';
import {LanguageContext} from './LanguageProvider';
import en from "./../assets/languages/english.png"
import pl from "./../assets/languages/polish.png"

export default function LanguageSelector() {
    const languageContext = useContext(LanguageContext);

    const handleLanguageChange = (value) => {
        const selectedLanguage = languageOptions.find(item => item.value === value);
        languageContext.setLanguage(selectedLanguage);
    };

    return (
        <div className='language'>
            <label>
                <input type="radio" name="language" value="pl" onChange={handleLanguageChange} checked/>
                <img src={pl} alt='polish'/>
            </label>

            <label>
                <input type="radio" name="language" value="en" onChange={handleLanguageChange}/>
                <img src={en} alt='english'/>
            </label>
        </div>

        //
        //
        //     value={languageContext.language.id}
        //     options={languageOptions}
        //     searchable={false}
        // />
    );
};