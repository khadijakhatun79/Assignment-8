const SummerCareTips = () => {
  return (
    <section className="bg-gradient-to-r from-orange-50 via-pink-50 to-yellow-50 py-16">
      
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            🌞 Summer Care Tips
          </h2>
          <p className="text-gray-600 mt-2">
            Stay healthy and stylish during hot summer days
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300 border">
            <div className="text-3xl mb-3">💧</div>
            <h3 className="font-bold text-lg mb-2">Stay Hydrated</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Drink enough water throughout the day to maintain energy, avoid dehydration, and keep your skin glowing in extreme heat.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300 border">
            <div className="text-3xl mb-3">🧴</div>
            <h3 className="font-bold text-lg mb-2">Use Sunscreen</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Always apply SPF 30+ sunscreen before going outside to protect your skin from harmful UV rays and sun damage.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300 border">
            <div className="text-3xl mb-3">🕶️</div>
            <h3 className="font-bold text-lg mb-2">Protect Yourself</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Use sunglasses, hats, and light cotton clothes to stay cool and avoid direct sunlight exposure.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
};

export default SummerCareTips;