export const setStorage = (name, object) => {
        
                        
         
        if (!object || !name) {
            
            return null
        }
        

    
         sessionStorage.setItem(name, JSON.stringify(object));
     
    
    
}
