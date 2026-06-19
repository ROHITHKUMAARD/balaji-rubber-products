import { motion } from "framer-motion";
import { FaIndustry, FaCogs, FaTools } from "react-icons/fa";

const services = [
  {
    icon: <FaIndustry size={40} />,
    title: "Industrial Fabrication",
    desc: "High-quality fabrication solutions for industrial projects.",
  },
  {
    icon: <FaCogs size={40} />,
    title: "Mechanical Engineering",
    desc: "Advanced engineering systems with precision manufacturing.",
  },
  {
    icon: <FaTools size={40} />,
    title: "Maintenance Services",
    desc: "Reliable maintenance and repair solutions for industries.",
  },
];

function Services() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-black to-gray-950 text-white py-32 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-center mb-20"
      >
        Our Services
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 border border-cyan-500/20 backdrop-blur-lg rounded-3xl p-10 shadow-xl"
          >
            <div className="text-cyan-400 mb-6">{service.icon}</div>

            <h3 className="text-2xl font-bold mb-4">
              {service.title}
            </h3>

            <p className="text-gray-300 leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;
