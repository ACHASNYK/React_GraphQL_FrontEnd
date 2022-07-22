export const loadFromLocalStorage = () => {
        try {
        
        const serialisedState = sessionStorage.getItem("detailes");
            if (serialisedState === null) return undefined;
        const data = (JSON.parse(serialisedState))
            return data
        } catch (e) {
        console.warn(e);
        return undefined; 
        }
    }
