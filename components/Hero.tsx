const Hero = () => {
  return (
    <div className="w-full h-60 sm:h-[400px] lg:h-[500px] bg-[url('/images/hero_1024_640_opt.jpg')] bg-black/[.03] bg-blend-soft-light bg-cover bg-center md:bg-[center_bottom_20%]">
      <div className="pr-12 pl-[40%] py-8 sm:py-20 lg:py-36 text-center">
        <h1 className="text-white">Labranzas</h1>
        <h3 className="text-white py-2 sm:py-10">Insumos para eventos</h3>
        <h3 className="text-white">Decoración para el hogar</h3>
      </div>
    </div>
  );
};

export default Hero;
