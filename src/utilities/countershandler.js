export const incrementItemsCount = (e, source) => {
        
        let data = source;
        let counter = JSON.parse(sessionStorage.getItem('counter'));
        data?.forEach(item => {
            if (item.id === e) {
                   sessionStorage.setItem('counter', JSON.stringify(counter +=1) );
                return {...item, items_count: item.items_count+=1};
            }
          console.log("increment", data)   
        })
        return (sessionStorage.setItem('shopping_cart', JSON.stringify(data)), console.log(data), this.props.increment_count());
    }

    export const decrementItemsCount = (e, source) => {
         
        let data = source;
        let counter = JSON.parse(sessionStorage.getItem('counter'));
        data?.forEach(item => {
            if(item.id=== e && item.items_count>=2) {
                sessionStorage.setItem('counter', JSON.stringify(counter-=1));
                return {...item, items_count: item.items_count-=1 };
            }
            else if(item.id===e && item.items_count===1){
                sessionStorage.setItem('counter', JSON.stringify(counter-=1));
                data.splice(data.indexOf(item), 1);
                
            }
           
        })  
      return  (sessionStorage.setItem('shopping_cart', JSON.stringify(data)), console.log(data), this.props.decrement_count());
     
}  
    
export const totalAmount = (source, index) => {
        const data = source;
        let price = []
        let count = []
        let symbol = ''
        let amount = 0
        data.forEach(e => {
            price.push(e.price[index]?.amount); 
            count.push(e.items_count);
            symbol = e.price[index]?.currency.symbol;
        })
        
        for (let i = 0; i < price.length; ++i){
            amount += (price[i] * count[i]);
            
            
        }
        amount = amount.toFixed(2);
        return { amount, symbol }
    } 