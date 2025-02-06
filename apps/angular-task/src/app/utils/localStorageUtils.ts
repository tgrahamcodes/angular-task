export function safeLocalStorageGet (key: string, fallback: string): string {

    try {

        if (typeof globalThis !== 'undefined' && globalThis.localStorage) {

            return JSON.parse(globalThis.localStorage.getItem(key) || JSON.stringify(fallback));

        }

    } catch (error) {

        console.warn(`Error accessing localStorage key "${key}":`, error);

    }

    return fallback;

}

export function safeLocalStorageSet (key: string, value: string): void {

    try {

        if (typeof globalThis !== 'undefined' && globalThis.localStorage) {

            globalThis.localStorage.setItem(key, JSON.stringify(value));

        }

    } catch (error) {

        console.warn(`Error setting localStorage key "${key}":`, error);

    }

}
