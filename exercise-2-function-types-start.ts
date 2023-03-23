/**
 * START: Follow the instructions below.
 */

// Types added to the function declaration:

function doubleThePopulation(value: number): number {
    return value * 2;
    }
    
    // Corrected function calls to avoid type errors:
    
    doubleThePopulation(5);
    
    doubleThePopulation(6.12); // changed value to number instead of string
    
    doubleThePopulation(8_526);
    
    doubleThePopulation(Number(false)); // changed value to number instead of boolean
    
    function languagesSpoken(country: string, language1: string, language2?: string): void {
        console.log(`The languages spoken in ${country} are:`);
    
        console.log(language1);
    
        if (language2 !== undefined) {
            console.log(language2);
        }
    }
    

languagesSpoken("Colombia", "Spanish", "English");

languagesSpoken("Greece", "Greek");

languagesSpoken("New Zealand", "English", "Māori");

// ----

export {};
