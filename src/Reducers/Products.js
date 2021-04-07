

let initialState = [
    {
        id: 1,
        name: 'iphone 8 plus',
        image: '/img/Cafe.jpg',
        description: 'Made in USA',
        price: 550,
        rating: 4,
        inventory: 10
    },
    {
        id: 2,
        name: 'iphone 7 plus',
        image: '/img/Cafe.jpg',
        description: 'Made in USA',
        price: 450,
        rating: 3,
        inventory: 20
    },
    {
        id: 3,
        name: 'iphone 11',
        image: '/img/Cafe.jpg',
        description: 'Made in USA',
        price: 990,
        rating: 2,
        inventory: 5
    }
];

const Products = (state = initialState, action) => {
    switch(action.type) {
        default:
            return [...state];
    }
};

export default Products;