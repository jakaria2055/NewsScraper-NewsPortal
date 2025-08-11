// import mongoose from "mongoose";
// import fs from "fs";
// import NewsModel from "./src/models/NewsModel.js";

// const MONGO_URI = "mongodb://localhost:27017/NewsScraper"; 

// mongoose.connect(MONGO_URI)
//   .then(async () => {
//     const data = JSON.parse(fs.readFileSync("news.json", "utf-8"));
//     await NewsModel.insertMany(data);
//     console.log(" News imported successfully!");
//     mongoose.connection.close();
//   })
//   .catch(err => {
//     console.error(err);
//     mongoose.connection.close();
//   });
