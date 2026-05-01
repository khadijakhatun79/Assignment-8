const TopBrands = () => {
  return (
    <section className="py-16 bg-white">

      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            🏷️ Top Brands
          </h2>
          <p className="text-gray-600 mt-2">
            Trusted brands for your summer essentials
          </p>
        </div>

        {/* Brand Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {/* Brand 1 */}
          <div className="group border rounded-2xl p-6 text-center hover:bg-orange-50 hover:shadow-lg transition">
            <h3 className="font-bold text-lg group-hover:text-orange-500">
              SunShade
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Premium Sunglasses
            </p>
          </div>

          {/* Brand 2 */}
          <div className="group border rounded-2xl p-6 text-center hover:bg-pink-50 hover:shadow-lg transition">
            <h3 className="font-bold text-lg group-hover:text-pink-500">
              CoolFit
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Summer Clothing
            </p>
          </div>

          {/* Brand 3 */}
          <div className="group border rounded-2xl p-6 text-center hover:bg-green-50 hover:shadow-lg transition">
            <h3 className="font-bold text-lg group-hover:text-green-500">
              SkinCare
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Skincare Solutions
            </p>
          </div>

          {/* Brand 4 */}
          <div className="group border rounded-2xl p-6 text-center hover:bg-blue-50 hover:shadow-lg transition">
            <h3 className="font-bold text-lg group-hover:text-blue-500">
              WalkEasy
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Comfortable Footwear
            </p>
          </div>

        </div>
      </div>

    </section>
  );
};

export default TopBrands;