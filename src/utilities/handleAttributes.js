export const setAttributes = (propname, value, data) => {
    // const index = data?.findIndex(x => x.name === `${propname}`);
    
    const newData = data.map(obj => {
        if (obj.name === `${propname}`) {
            return { ...obj, id: value };
        }
            return obj;                 
    });

    
    const storage = { ...this.props?.data, product: { ...this.props?.data?.product, attributes: newData } }
    // console.log(index)
    console.log(newData)
    this.props.set_detailes(storage);
}
 
export const setDefaultAttributes = (data) => { 
    const newData = data.map(obj => {
        if (obj.id===obj.name) {
            return {...obj, id : obj.items[0].value}
        } return obj;
    
    }) 
    return newData;
}