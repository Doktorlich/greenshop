export const elementCountingCategory = (ELEMENT_LIST, productData) => {
    for (let i = 0; i < ELEMENT_LIST.length; i++) {
        for (let j = 0; j < productData.length; j++) {
            const products = productData.filter((item) => {
                return item.categories[0] === ELEMENT_LIST[i].title;
            });
            ELEMENT_LIST[i].amount = products.length;
        }
    }
};
export const elementCountingSize = (ELEMENT_LIST, productData) => {
    for (let i = 0; i < ELEMENT_LIST.length; i++) {
        for (let j = 0; j < productData.length; j++) {
            const products = productData.filter((item) => {
                return item.size === ELEMENT_LIST[i].title;
            });
            ELEMENT_LIST[i].amount = products.length;
        }
    }
};
