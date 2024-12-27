"use client";

import { motion } from "framer-motion";

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Post 1 */}
          <motion.article
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300"
          >
            <img
              src="/images/ktm-trends.jpg"
              alt="Top Superbikes"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold text-white mb-2">Top Superbikes of 2024</h2>
            <p className="text-gray-300 mb-4">
              Discover the most exciting superbikes of the year, including the KTM RC 390 and Ducati Panigale V4.
            </p>
            <a href="#" className="text-orange-500 font-semibold hover:underline">
              Read More →
            </a>
          </motion.article>

          {/* Post 2 */}
          <motion.article
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300"
          >
            <img
              src="/images/superbike-maintenance.jpg"
              alt="Maintenance Tips"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold text-white mb-2">Superbike Maintenance Tips</h2>
            <p className="text-gray-300 mb-4">
              Learn how to keep your superbike in peak condition with these essential maintenance tips.
            </p>
            <a href="#" className="text-orange-500 font-semibold hover:underline">
              Read More →
            </a>
          </motion.article>

          {/* Post 3 */}
          <motion.article
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300"
          >
            <img
              src="/images/ktm-history.jpg"
              alt="KTM History"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold text-white mb-2">The Evolution of KTM Bikes</h2>
            <p className="text-gray-300 mb-4">
              Explore how KTM has become a leader in the superbike industry with its iconic models.
            </p>
            <a href="#" className="text-orange-500 font-semibold hover:underline">
              Read More →
            </a>
          </motion.article>

          {/* Post 4 */}
          <motion.article
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300"
          >
            <img
              src="/images/yamaha-r1.jpg"
              alt="Yamaha R1"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold text-white mb-2">Yamaha R1: A Legend Reborn</h2>
            <p className="text-gray-300 mb-4">
              Dive into the history and latest updates of the legendary Yamaha R1 superbike.
            </p>
            <a href="#" className="text-orange-500 font-semibold hover:underline">
              Read More →
            </a>
          </motion.article>

          {/* Post 5 */}
          <motion.article
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300"
          >
            <img
              src="/images/ducati-panigale.jpg"
              alt="Ducati Panigale"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold text-white mb-2">Ducati Panigale V4: Performance Redefined</h2>
            <p className="text-gray-300 mb-4">
              Get to know the features and performance specs of the Ducati Panigale V4, a superbike that redefines speed.
            </p>
            <a href="#" className="text-orange-500 font-semibold hover:underline">
              Read More →
            </a>
          </motion.article>

          {/* Post 6 */}
          <motion.article
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300"
          >
            <img
              src="/images/suzuki-hayabusa.jpg"
              alt="Suzuki Hayabusa"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold text-white mb-2">Suzuki Hayabusa: The Ultimate Speed Machine</h2>
            <p className="text-gray-300 mb-4">
              Discover what makes the Suzuki Hayabusa one of the fastest and most iconic superbikes ever made.
            </p>
            <a href="#" className="text-orange-500 font-semibold hover:underline">
              Read More →
            </a>
          </motion.article>
        </div>
      </div>
    </div>
  );
}
