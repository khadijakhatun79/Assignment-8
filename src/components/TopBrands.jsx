"use client";

const brands = [
  {
    name: "Nike",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
  },
  {
    name: "Adidas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg"
  },
  {
    name: "Zara",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg"
  },
  {
    name: "H&M",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg"
  },
 
  {
    name: "Uniqlo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/92/UNIQLO_logo.svg"
  },
    {
    name: "Adidas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg"
  },
  {
    name: "Zara",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg"
  },
  {
    name: "H&M",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg"
  },
 
  {
    name: "Uniqlo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/92/UNIQLO_logo.svg"
  }
];

const TopBrands = () => {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Trusted by Top Brands
          </h2>
          <p className="text-gray-500 mt-2">
            Global brands you love & trust
          </p>
        </div>

        {/* Brand Strip */}
        <div className="relative overflow-hidden brand-mask">

          <div className="flex gap-20 items-center animate-marquee w-max">

            {[...brands, ...brands].map((brand, i) => (
              <img
                key={i}
                src={brand.logo}
                alt={brand.name}
                className="h-10 md:h-12 w-auto opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300"
              />
            ))}

          </div>

        </div>

      </div>

      {/* Styles */}
      <style jsx>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .brand-mask {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }
      `}</style>

    </section>
  );
};

export default TopBrands;