/**
 * @file data.js
 * @description This file contains the static data array `Fooddata` which stores information about various restaurants.
 * Each object in the array represents a restaurant with properties such as name, image URL, category, price, rating, and more.
 * This data is used to dynamically render restaurant cards in the application.
 */

const Fooddata = [
    {
        id: 1,
        rname: "Indian Garden Restaurant",
        imgdata: "https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp",
        address: "North Indian, Biryani, Mughlai",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: " 1175 + order placed from here recently",
        price: "$30",
        rating: "3.8",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        category:"Indian",
        ambiance: "Cozy, Happy"
    },
    {
        id: 2,
        rname: "Clay Oven Indian Restaurant",
        imgdata: "https://b.zmtcdn.com/data/pictures/chains/5/19295245/089cbcf1d3307542c72f77272556b28b_o2_featured_v2.jpg?output-format=webp",
        address: "Street Food",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: " 2525 + order placed from here recently",
        price: "$25",
        rating: "3.9",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        category:"Indian",
        ambiance: "Happy, Upscale"
    },
    {
        id: 3,
        rname: "La Milano Pizzeria",
        imgdata: "https://b.zmtcdn.com/data/pictures/chains/1/19708611/10f90d4a69678d98662514d173b29665_o2_featured_v2.jpg",
        address: "Pizza, Fast Food, Pasta",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: " 650 + order placed from here recently",
        price: "$20",
        rating: "4.2",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        category:"Italian",
        ambiance: "Happy"
    },
    {
        id: 4,
        rname: "Momoman",
        imgdata: "https://b.zmtcdn.com/data/pictures/chains/1/113401/59f29399060caefcc575d59dc9402ce8_o2_featured_v2.jpg",
        address: "Momos",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: " 300 + order placed from here recently",
        price: "$35 for one",
        rating: "3.8",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        category:"Momos",
        ambiance: "Cozy"

    },
    {
        id: 5,
        rname: "Delhi Palace Restaurant",
        imgdata: "https://b.zmtcdn.com/data/pictures/chains/5/110225/3978e28854b7496dbef9496546734811_o2_featured_v2.jpg",
        address: "North Indian",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: "1050 + order placed from here recently",
        price: "$20",
        rating: "4.0",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        category:"Indian",
        ambiance:"Cozy, Happy"

    },
    {
        id: 6,
        rname: "Emmy's Latenight Meals",
        imgdata: "https://b.zmtcdn.com/data/pictures/5/113895/3c06f6fbb8f667a2537dfdb6f060dc8b_o2_featured_v2.jpg",
        address: "Wraps FastFood,",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: " 1100 + order placed from here recently",
        price: "$22",
        rating: "3.8",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        category:"American",
        ambiance: "Happy"
    },
    {
        id: 7,
        rname: "Hocco Eatery",
        imgdata: "https://b.zmtcdn.com/data/pictures/chains/5/110155/811c01a5430d50d3260f77917da99e12_o2_featured_v2.jpg",
        address: "North Indian, Fast Food",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: "500 + order placed from here recently",
        price: "$15",
        rating: "3.8",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        category:"Indian",
        ambiance:"Upscale"
    },
    {
        id: 8,
        rname: "Chai Wai",
        imgdata: "https://b.zmtcdn.com/data/pictures/3/18514413/0a17b72e9fec52a3ca736f4c2ea3646f_o2_featured_v2.jpg",
        address: "Tea, Coffee, Shake, Beverages",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: "500 + order placed from here recently",
        price: "$30",
        rating: "3.2",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        category:"Indian",
        ambiance:"Happy"
    },
    {
        id: 9,
        rname: "HL Frankie",
        imgdata: "https://b.zmtcdn.com/data/pictures/7/19639627/94c0a4cf15c02d3982d154e2c5dd8cbb_o2_featured_v2.jpg",
        address: "Burger, Sandwich, Fast Food",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: "2525 + order placed from here recently",
        price: "$28",
        rating: "3.8",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        category:"American",
        ambiance:"Happy"
    },
    {
        id: 10,
        rname: "Red On Main",
        imgdata:"https://images.squarespace-cdn.com/content/v1/65316a0a22bbec78621b35c9/9053fc08-fe8e-4067-a5b3-9eba8f5277a0/121223+Red+On+Main+7.jpg?format=2500w",
        address: "Burger, Sandwich, Cajun-American",
        delimg:"https://images.squarespace-cdn.com/content/v1/65316a0a22bbec78621b35c9/9053fc08-fe8e-4067-a5b3-9eba8f5277a0/121223+Red+On+Main+7.jpg?format=2500w",
        somedata:"3000 + order placed from here recently",
        price: "$15 - $60",
        rating: "4.5",
        arrimg:"https://images.squarespace-cdn.com/content/v1/65316a0a22bbec78621b35c9/ca2ff267-0d4e-494d-afee-cf25f3cb8193/121223+Red+On+Main+8.jpg?format=2500w",
        category:"American",
        ambiance:"Happy, Cozy"

    }


];

export default Fooddata;