import { v4 as uuidv4 } from "uuid";

// import sara from "../../assets/images/review/sara.webp";
// import ahmed from "../../assets/images/review/ahmed.webp";
// import emily from "../../assets/images/review/emily.webp";

export const reviewData = [
  {
    id: uuidv4(),
    image: "sara",
    name: "Sara M.",
    location: "Rabat",
    quote:
      "Oualidia's oysters, eaten fifty metres from where they were farmed, might be the best meal we had anywhere on the coast.",
  },
  {
    id: uuidv4(),
    image: "ahmed",
    name: "Ahmed B.",
    location: "Casablanca",
    quote:
      "Walking through Safi's pottery quarter and watching artisans shape clay by hand was an unforgettable experience.",
  },
  {
    id: uuidv4(),
    image: "emily",
    name: "Emily R.",
    location: "London, UK",
    quote:
      "The Atlantic sunsets, fresh seafood, and welcoming people made Safi one of the highlights of our trip to Morocco.",
  },
];
