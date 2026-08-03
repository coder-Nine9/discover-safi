import sidiBouzid from "../../assets/images/sidiBouzid.png";
import lallaFatna from "../../assets/images/LalaFatna.png";
import safiBeach from "../../assets/images/SafiBeach.png";
import souiriaLakdima from "../../assets/images/Souiria Lakdima.png";
import capeBeddouza from "../../assets/images/Cape Beddouza.png";
import sidiKaram from "../../assets/images/Sidi Karam Addaif.png";
import { v4 as uuidv4 } from "uuid";

export const contentList = [
  {
    id: uuidv4(),
    image: sidiBouzid,
    title: "Sidi Bouzid",
    lat: 32.3219,
    lng: -9.2948,
    details:
      "Safi's closest beach — a lively cliffside promenade with cafés, families, and reliable waves for beginner surfers.",
    categories: ["Surfing", "Swimming", "Cafés"],
    duration: "10 min drive",
    rating: 4.7,
    distance: "3 km ",
  },
  {
    id: uuidv4(),
    image: lallaFatna,
    title: "Lalla Fatna",
    lat: 32.3825,
    lng: -9.2836,
    details:
      "A stunning beach surrounded by dramatic cliffs, offering crystal-clear water and a peaceful atmosphere perfect for relaxing and photography.",
    categories: ["Nature", "Photography", "Swimming"],
    duration: "20 min drive",
    rating: 4.6,
    distance: "15 km ",
  },
  {
    id: uuidv4(),
    image: safiBeach,
    title: "Safi Beach",
    lat: 32.2994,
    lng: -9.2372,
    details:
      "The city's main beach with a long promenade, family-friendly atmosphere, restaurants, and beautiful Atlantic Ocean views.",
    categories: ["Family", "Walking", "Sunsets"],
    duration: "City Center",
    rating: 4.3,
    distance: "0 km ",
  },
  {
    id: uuidv4(),
    image: souiriaLakdima,
    title: "Souiria Lakdima",
    lat: 32.5107,
    lng: -9.0386,
    details:
      "A peaceful stretch of golden sand known for fishing, camping, and water sports in a quiet natural setting.",
    categories: ["Camping", "Surf", "Fishing"],
    duration: "40 min drive",
    rating: 4.5,
    distance: "36 km ",
  },
  {
    id: uuidv4(),
    image: capeBeddouza,
    title: "Cape Beddouza",
    lat: 32.5462,
    lng: -9.2726,
    details:
      "A scenic coastal destination famous for its lighthouse, rugged cliffs, spectacular sunsets, and uncrowded shoreline.",
    categories: ["Lighthouse", "Hiking", "Sunsets"],
    duration: "45 min drive",
    rating: 4.4,
    distance: "45 km ",
  },
  {
    id: uuidv4(),
    image: sidiKaram,
    title: "Sidi Karam Addaif",
    lat: 32.7443,
    lng: -9.3885,
    details:
      "A quiet sandy beach ideal for swimming, family picnics, and enjoying a relaxing day away from the crowds.",
    categories: ["Swimming", "Picnics", "Relaxation"],
    duration: "1 hr drive",
    rating: 4.5,
    distance: "60 km ",
  },
];
