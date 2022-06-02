const setDefaultLocalStorage = () => {
        if (this.props.attributes === undefined) {
            return null
        }
        const Object = {
            name: this.props.name,
            id: this.props.item_key,
            brand: this.props.brand,
            price: this.props.price,
            attributes: this.props.attributes,
            photo: this.props.photo,
            items_count: 1,
            choices: {}
            
            
        }
        if (Object.name === undefined) {
            return null
        }

        let get = [];
        // a.push(JSON.parse(localStorage.getItem('session')));
        // localStorage.setItem('session', JSON.stringify(a));
        
        
        get = JSON.parse(localStorage.getItem('shopping_cart')) || [];
    // Push the new data (whether it be an object or anything else) onto the array
        get.push(Object);
    // Alert the array value
        // alert(a);  // Should be something like [Object array]
    // Re-serialize the array back into a string and store it in localStorage
        localStorage.setItem('shopping_cart', JSON.stringify(get));
    //  localStorage.setItem('shopping_card', JSON.stringify(get));

}

export default setDefaultLocalStorage