import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
dotenv.config();

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.get("/api/maps/place", async (req, res) => {
  const { latitude, longitude, radius } = req.query;
  const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=cake,coffee,dessert,bakers,bakery&key=${process.env.GOOGLE_MAPS_API_KEY}&location=${latitude},${longitude}&radius=${radius}`;
    try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something is wrong" });
  }
});

app.get("/api/maps/directions", async (req, res) => {
  const { origin, destination } = req.query;
  const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${process.env.GOOGLE_MAPS_API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something is wrong" });
  }
});

app.get("/api/maps/place/details", async (req, res) => {
  const { place_id } = req.query;
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=${process.env.GOOGLE_MAPS_API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something is wrong" });
  }
});

app.get("/api/maps/place/next", async (req, res) => {
  const { pagetoken } = req.query;
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?pagetoken=${pagetoken}&key=${process.env.GOOGLE_MAPS_API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something is wrong" });
  }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });




// import express from "express";
// import * as dotenv from "dotenv";
// import cors from "cors";
// import fetch from "node-fetch";

// const app = express();
// app.use(cors());
// dotenv.config();

// const port = process.env.PORT || 4000;

// app.get("/", (req, res) => {
//   res.send("Server is running!");
// });

// app.get("/api/maps/bakeries", async (req, res) => {
//   const {radius} = req.query;
//   const {latitude, longitude} = req.headers;

//   if(!latitude || !longitude){
//     res.status(400).json({error: "User location not found"});
//   }
//   const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?query=bakery&key=${process.env.GOOGLE_MAPS_API_KEY}&location=${latitude},${longitude}&radius=${radius}`;
//   try{
//     const response = await fetch(url);
//     const data = await response.json();
//     res.json(data.results);
//   }catch(error){
//     console.log(error);
//     res.status(500).json({error: "Something is wrong"});
//   }
// });

// app.get("/api/maps/cafe", async (req, res) => {
//   const {radius} = req.query;
//   const {latitude, longitude} = req.headers;

//   if(!latitude || !longitude){
//     res.status(400).json({error: "User location not found"});
//   }

//   const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?query=cafe&key=${process.env.GOOGLE_MAPS_API_KEY}&location=${latitude},${longitude}&radius=${radius}`;
//   try{
//     const response = await fetch(url);
//     const data = await response.json();
//     res.json(data.results);
//   }catch(error){
//     console.log(error);
//     res.status(500).json({error: "Something is wrong"});
//   }
// });

// app.get("/api/maps/cakes", async (req, res) => {
//   const {radius} = req.query;
//   const {latitude, longitude} = req.headers;

//   if(!latitude || !longitude){
//     res.status(400).json({error: "User location not found"});
//   }

//   const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?query=cake&key=${process.env.GOOGLE_MAPS_API_KEY}&location=${latitude},${longitude}&radius=${radius}`;
//   try{
//     const response = await fetch(url);
//     const data = await response.json();
//     res.json(data.results);
//   }catch(error){
//     console.log(error);
//     res.status(500).json({error: "Something is wrong"});
//   }
// });

// app.get("/api/maps/desserts", async (req, res) => {
//   const {radius} = req.query;
//   const {latitude, longitude} = req.headers;

//   if(!latitude || !longitude){
//     res.status(400).json({error: "User location not found"});
//   }

//   const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?query=desserts&key=${process.env.GOOGLE_MAPS_API_KEY}&location=${latitude},${longitude}&radius=${radius}`;
//   try{
//     const response = await fetch(url);
//     const data = await response.json();
//     res.json(data.results);
//   }catch(error){
//     console.log(error);
//     res.status(500).json({error: "Something is wrong"});
//   }
// });

// app.get("/api/maps/bakers", async (req, res) => {
//   const {radius} = req.query;
//   const {latitude, longitude} = req.headers;

//   if(!latitude || !longitude){
//     res.status(400).json({error: "User location not found"});
//   }

//   const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?query=bakers&key=${process.env.GOOGLE_MAPS_API_KEY}&location=${latitude},${longitude}&radius=${radius}`;
//   try{
//     const response = await fetch(url);
//     const data = await response.json();
//     res.json(data.results);
//   }catch(error){
//     console.log(error);
//     res.status(500).json({error: "Something is wrong"});
//   }
// });


// // app.get("/api/maps/place", async (req, res) => {
// //   const{radius} = req.query;
// //   const{latitude, longitude}= req.headers;//Get the latitude and longitude from the request headers
// //   if(!latitude || !longitude){
// //     res.status(400).json({error: "User location not found"});
// //   }
// //   const url =`https://maps.googleapis.com/maps/api/place/nearbysearch/json?query=cake,coffee,dessert,bakers,bakery&key=${process.env.GOOGLE_MAPS_API_KEY}&location=${latitude},${longitude}&radius=${radius}`;

// //   try{
// //     const response = await fetch(url);
// //     const data = await response.json();
// //     res.json(data);
// //   }catch(error){
// //     console.log(error);
// //     res.status(500).json({error: "Something is wrong"});
// //   }
// // });


// // app.get("/api/maps/place", async (req, res) => {
// //   const { latitude, longitude, radius } = req.query;
// //   const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=cake,coffee,dessert,bakers,bakery&key=${process.env.GOOGLE_MAPS_API_KEY}&location=${latitude},${longitude}&radius=${radius}`;
// //     try {
// //     const response = await fetch(url);
// //     const data = await response.json();
// //     res.json(data);
// //   } catch (error) {
// //     console.log(error);
// //     res.status(500).json({ error: "Something is wrong" });
// //   }
// // });

// app.get("/api/maps/directions", async (req, res) => {
//   const { origin, destination } = req.query;
//   const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${process.env.GOOGLE_MAPS_API_KEY}`;
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     res.json(data);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Something is wrong" });
//   }
// });

// app.get("/api/maps/place/details", async (req, res) => {
//   const { place_id } = req.query;
//   const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=${process.env.GOOGLE_MAPS_API_KEY}`;
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     res.json(data);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Something is wrong" });
//   }
// });

// app.get("/api/maps/place/next", async (req, res) => {
//   const { pagetoken } = req.query;
//   const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?pagetoken=${pagetoken}&key=${process.env.GOOGLE_MAPS_API_KEY}`;
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     res.json(data);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Something is wrong" });
//   }
// });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
//     });