export const setDefaultLocalStorage = () => {
    
    const Object = {
        name: this.props.name,
        id: this.props.item_key,
        brand: this.props.brand,
        price: this.props.price,
        attributes: this.props.attributes,
        photo: this.props.photo,
    }
        
    const get =  JSON.parse(localStorage.getItem('shopping_card') || '[]');
    const Array = [get].push(Object);
    return localStorage.setItem('shopping_card', JSON.stringify(Array));

}