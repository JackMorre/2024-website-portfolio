import { motion } from "framer-motion";
export default function Hero() {
  return (
    <div
      id="home"
      className="h-screen flex justify-center items-center bg-light"
    >
      <motion.div
        className="p-4"
        variants={{
          hidden: { opacity: 0, y: -100 },
          show: { opacity: 1, y: 0 },
        }}
        transition={{ type: "spring", delay: 0.4 }}
        initial="hidden"
        animate="show"
      >
        <h1 className="font-oswald text-6xl sm:text-7xl md:text-8xl">
          Hello, my name is{" "}
          <span className="text-color font-medium">Jack.</span> <br />
          I'm a{" "}
          <span className="text-color font-medium">front-end developer.</span>
          <br />
          Based in <span className="text-color font-medium">Norfolk, UK.</span>
        </h1>
      </motion.div>
    </div>
  );
}
