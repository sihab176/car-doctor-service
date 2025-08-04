import React from "react";

const Footer = () => {
  return (
    <div>
      <section className="py-7 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Visit Our Local Market
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Experience the authentic atmosphere of a traditional north
                Bangladeshi market. We're open daily with fresh produce and warm
                hospitality.
              </p>

              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 flex items-center justify-center mr-4 text-green-400">
                    <i className="ri-map-pin-line"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-300">
                      123 Heritage Market Street, Old Dhaka, Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-6 h-6 flex items-center justify-center mr-4 text-green-400">
                    <i className="ri-time-line"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold">Opening Hours</h3>
                    <p className="text-gray-300">Daily: 7:00 AM - 10:00 PM</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-6 h-6 flex items-center justify-center mr-4 text-green-400">
                    <i className="ri-phone-line"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold">Contact</h3>
                    <p className="text-gray-300">+880 1234-567890</p>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
                  Get Directions
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-w-3 aspect-h-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9407087486973!2d90.40744711498176!3d23.750895194620737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1629887834567!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: "0.5rem" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Local Harvest Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
