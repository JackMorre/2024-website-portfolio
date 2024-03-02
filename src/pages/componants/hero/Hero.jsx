export default function Hero() {
  return (
    <div
      id="home"
      className="h-screen flex justify-center items-center bg-light"
    >
      <div className="p-4">
        <h1 className="font-oswald text-6xl sm:text-7xl md:text-8xl">
          Hello, my name is{" "}
          <span className="text-color font-medium">Jack.</span> <br />
          I'm a{" "}
          <span className="text-color font-medium">front-end developer.</span>
          <br />
          Based in <span className="text-color font-medium">Norfolk, UK.</span>
        </h1>
      </div>
    </div>
  );
}
