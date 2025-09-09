import { Carousel } from "./ui/carousel";
import { motion } from "framer-motion";

export function Projacts() {
  const slideData = [
    {
      title: "Modern Building Against Sky",
      location: "New York, USA",
      price: "$2,50,000",
      src: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    },
    {
      title: "Brown and Gray Painted House in Front of Road",
      location: "Boise, ID, USA",
      price: "$5,00,000",
      src: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
    },
    {
      title: "White Wooden Building",
      location: "Copenhagen, Denmark",
      price: "$10,00,000",
      src: "https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg",
    },
    {
      title: "Three Gray Ornaments on White Wooden Desk Inside Living Room",
      location: "Skelleftea, Sweden",
      price: "$3,50,000",
      src: "https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg",
    },
    {
      title: "White 2-storey House Near Trees",
      location: "Vilnius, Lithuania",
      price: "$4,20,000",
      src: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg",
    },
    {
      title: "White and Brown Wooden House Near Bare Trees Under White Sky",
      location: "Tallinn, Estonia",
      price: "$6,80,000",
      src: "https://images.pexels.com/photos/3935333/pexels-photo-3935333.jpeg",
    },
    {
      title: "Road to House in Village",
      location: "Tuscany, Italy",
      price: "$3,00,000",
      src: "https://images.pexels.com/photos/4682067/pexels-photo-4682067.jpeg",
    },
    {
      title: "Brown High-rise Building",
      location: "Dubai, UAE",
      price: "$12,50,000",
      src: "https://images.pexels.com/photos/2362030/pexels-photo-2362030.jpeg",
    },
    {
      title: "White Concrete Temple",
      location: "Kyoto, Japan",
      price: "$8,90,000",
      src: "https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg",
    },
  ];

  return (
    <>
      <motion.div
        id="projects"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="py-16 sm:py-20"
      >
        {/* Heading Section */}
        <motion.div
          className="text-center mb-12 px-4 sm:px-6 lg:px-0"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8">
            Discover Our Stunning Projects
          </h2>
          <motion.div
            className="w-16 sm:w-24 md:w-32 lg:w-40 h-1 mx-auto bg-black rounded"
            initial={{ width: 0 }}
            whileInView={{ width: "10rem" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Carousel Section */}
        <motion.div
          className="relative overflow-hidden w-full h-full py-12 sm:py-16 md:py-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Carousel slides={slideData} />
        </motion.div>
      </motion.div>
    </>
  );
}
