export const loadFromStorage = (name) => {
        try {
        
        const serialisedState = sessionStorage.getItem(name);
            if (serialisedState === null) return undefined;
        const data = (JSON.parse(serialisedState))
            return data
        } catch (e) {
        console.warn(e);
        return undefined;
        }
    } 
