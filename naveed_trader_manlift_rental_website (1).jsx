export default function NaveedTraderWebsite() {
  const galleryImages = [
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop'
  ];

  const services = [
    {
      title: 'Construction Machinery Rental',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'JLG Manlift Rental',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Boom Lift Services',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Skyjack Equipment',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-slate-900/90"></div>

        <img
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop"
          alt="Manlift Equipment"
          className="w-full h-[650px] object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-4xl text-center">
            <div className="space-y-4 mb-6">
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                Naveed Trader
              </h1>

              <h2 className="text-2xl md:text-4xl font-bold text-blue-300">
                Heavy Construction Machinery, Manlift & Boom Lift Rental Services in UAE
              </h2>
            </div>

            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Professional Manlift, Boom Lift & Construction Machinery Rental Services in UAE
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/971588337131?text=Hello%20Naveed%20Trader%2C%20I%20need%20construction%20machinery%20rental%20service"
                target="_blank"
                className="bg-green-500 hover:bg-green-600 transition-all px-8 py-4 rounded-2xl text-lg font-bold shadow-2xl"
              >
                WhatsApp Now
              </a>

              <a
                href="tel:+971588337131"
                className="bg-blue-600 hover:bg-blue-700 transition-all px-8 py-4 rounded-2xl text-lg font-bold shadow-2xl"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-blue-400">
              Trusted Construction Equipment Rental Company
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Naveed Trader provides reliable and affordable manlift, boom lift, aerial work platform, and construction machinery rental services across the UAE. We supply quality JLG, Skyjack, forklifts, scissor lifts, generators, and heavy construction equipment for construction, maintenance, warehouse, industrial, and site projects.
            </p>

            <div className="space-y-3 text-slate-200">
              <p>✔ Modern & Well-Maintained Equipment</p>
              <p>✔ Fast Delivery Across UAE</p>
              <p>✔ Competitive Rental Prices</p>
              <p>✔ Experienced Technical Support</p>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
              alt="Boom Lift"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-400">
              Our Services
            </h2>
            <p className="text-slate-300 text-lg">
              High Quality Construction & Aerial Equipment Rentals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-64 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">
                    {service.title}
                  </h3>

                  <p className="text-slate-300 mb-6">
                    Reliable machinery and equipment for construction, industrial, warehouse, and maintenance projects across UAE.
                  </p>

                  <a
                    href="https://wa.me/971588337131?text=Hello%20Naveed%20Trader%2C%20I%20need%20construction%20machinery%20rental%20service"
                    target="_blank"
                    className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Gallery */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">
              JLG & Skyjack Equipment Fleet
            </h2>

            <p className="text-slate-300 text-lg">
              Different Types of Manlifts, Boom Lifts, Scissor Lifts & Construction Machinery
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <img
                  src={image}
                  alt="JLG and Skyjack Machinery"
                  className="h-72 w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-blue-950">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Contact Naveed Trader
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-slate-900/60 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6 text-blue-300">
                Contact Information
              </h3>

              <div className="space-y-4 text-lg text-slate-200">
                <p>
                  📞 00971 58 833 7131
                </p>

                <p>
                  📧 babkhan1@yahoo.com
                </p>

                <p>
                  📍 Naveed Trader, Big Bazar Roundabout, Sajja Industrial Area, Sharjah, UAE
                </p>
              </div>
            </div>

            <div className="bg-slate-900/60 p-8 rounded-3xl flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6 text-blue-300">
                Quick Contact
              </h3>

              <a
                href="https://wa.me/971588337131?text=Hello%20Naveed%20Trader%2C%20I%20need%20construction%20machinery%20rental%20service"
                target="_blank"
                className="bg-green-500 hover:bg-green-600 text-center py-4 rounded-2xl text-xl font-bold mb-4"
              >
                Chat on WhatsApp
              </a>

              <a
                href="tel:+971588337131"
                className="bg-blue-600 hover:bg-blue-700 text-center py-4 rounded-2xl text-xl font-bold"
              >
                Call for Booking
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-slate-950 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">
            Our Location
          </h2>

          <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
            <iframe
              title="Google Map"
              src="https://maps.google.com/maps?q=Naveed%20Trader%20Big%20Bazar%20Roundabout%20Sajja%20Sharjah&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 text-center text-slate-400">
        <p>
          © 2026 Naveed Trader | Construction Machinery, Manlift & Boom Lift Rental UAE
        </p>
      </footer>
    </div>
  );
}
