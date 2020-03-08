import React, {useContext} from 'react';
import {languageOptions} from './languages';
import {LanguageContext} from './LanguageProvider';

export default function LanguageSelector() {
    const languageContext = useContext(LanguageContext);

    const handleLanguageChange = (e) => {
        const selectedLanguage = languageOptions.find(item => item.id === e.target.value);
        languageContext.setLanguage(selectedLanguage);
    };

    return (
        <div className='language'>
            {languageOptions.map(item => (
                <label key={item.id}>
                    <input type="radio" name="language" key={item.id} value={item.id} onChange={handleLanguageChange}
                    checked={languageContext.language.id === item.id}/>
                    <img src={item.photo} alt='language'/>
                </label>

            ))}
        </div>
    );
};