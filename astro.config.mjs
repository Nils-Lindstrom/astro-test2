// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    
    base: '/pages'
    i18n: { // I18n enables multiple languages on the website.
        locales: ["sv", "en"],  // This sets the available languages, sv = Swedish, en = English. You can in theory add more but it should be avoided.
        defaultLocale: "en", 
        routing: {
            prefixDefaultLocale: false // This setting makes the default domain ie www.domain.com set to the English language. (If enabled it would be www.domain.com/en for the main page, etc.)
        }
    }
});
