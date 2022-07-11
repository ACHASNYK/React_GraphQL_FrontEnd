const setShopCartLocalStorage = (source) => {
        
        if (source.name === undefined) {
            return null
    }
        let Object = source;
        let counter=1;
        let get = [];            
        get = JSON.parse(sessionStorage.getItem('shopping_cart')) || [];
        counter= JSON.parse(sessionStorage.getItem('counter')) || 1;
        let flag = false;
        console.log(flag)
        if (get.length===0) {
            
            get.push(Object)
            
        } else {  
            get.map(element => {
          
            if (JSON.stringify(element.attributes)===JSON.stringify(Object?.attributes) && element.id===Object?.id)
             {return {...element, items_count: element.items_count +=1}, flag=true, counter +=1}
          
               
            })
            
                return !flag? (get.push(Object), counter+=1)  : null, 
                sessionStorage.setItem('shopping_cart', JSON.stringify(get)),
                sessionStorage.setItem('counter', JSON.stringify(counter));
        }      
                        
            return   sessionStorage.setItem('shopping_cart', JSON.stringify(get)),
                    sessionStorage.setItem('counter', JSON.stringify(counter));
                    
    
    }

// const setDefaultLocalStorage = () => {
//         if (this.props.attributes === undefined) {
//             return null
//         }
//         const Object = {
//             name: this.props.name,
//             id: this.props.item_key,
//             brand: this.props.brand,
//             price: this.props.price,
//             attributes: this.props.attributes,
//             photo: this.props.photo,
//             items_count: 1,
//             choices: {}
            
            
//         }
//         if (Object.name === undefined) {
//             return null
//         }

//         let get = [];
//         // a.push(JSON.parse(localStorage.getItem('session')));
//         // localStorage.setItem('session', JSON.stringify(a));
        
        
//         get = JSON.parse(localStorage.getItem('shopping_cart')) || [];
//     // Push the new data (whether it be an object or anything else) onto the array
//         get.push(Object);
//     // Alert the array value
//         // alert(a);  // Should be something like [Object array]
//     // Re-serialize the array back into a string and store it in localStorage
//         localStorage.setItem('shopping_cart', JSON.stringify(get));
//     //  localStorage.setItem('shopping_card', JSON.stringify(get));

// }

export default setShopCartLocalStorage;