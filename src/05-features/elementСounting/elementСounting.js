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

export const elementCountingCategory2 = (ELEMENT_LIST, productData) => {
    return ELEMENT_LIST.map((item) => {
        let productLength = productData.filter((product) => product.categories[0] === item.title).length;
        return { ...item, amount: productLength };
    });
};
export const elementCountingCategory3 = (ELEMENT_LIST, productData) => {
    return ELEMENT_LIST.map((item) => {
        let productLength = productData.filter((product) => product.categories[0] === item.title).length;
        return { ...item, amount: productLength };
    });
};
export const elementCountingSize = (SIZE_LIST, productData) => {
    let updatedSizeList = SIZE_LIST.map((sizeItem) => {
        let amount = productData.reduce((acc, product) => {
            return acc + (product.size.some((size) => sizeItem.abbreviation.includes(size)) ? 1 : 0);
        }, 0);
        return { ...sizeItem, amount: amount };
    });
    return updatedSizeList;
};

// 1------ SIZE_LIST = [
//     { title: "Small", amount: 0 ,abbreviation:"S"},
//     { title: "Medium", amount: 0 ,abbreviation:"M"},
//     { title: "Large", amount: 0 ,abbreviation:["L"],
//     { title: "Large", amount: 0 ,abbreviation:["XL"]}

// ];
// 2-----productData
// 3------ "size": ["S", "M", "L", "XL"],
