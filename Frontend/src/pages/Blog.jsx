// src/pages/Blog.jsx
import { blogPosts } from '../assets/assets';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Blog = () => {
  return (
    <section className="px-6 py-12 mt-20 bg-[#fefcf9]">
      <div className="max-w-6xl mx-auto text-center">
        {/* Animated Heading */}
        <motion.h1
          className="text-4xl font-bold text-[#3c1f2f] mb-2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          🕉️ Divine Chronicles
        </motion.h1>

        <motion.p
          className="text-gray-600 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Stories of Bhakti, Seva, and Wisdom from Gau Seva Dham
        </motion.p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, rotate: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-5 text-left">
                <h2 className="text-xl font-semibold text-[#3c1f2f]">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <p className="text-gray-700 text-sm mb-3">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.id}`}
                  className="text-indigo-600 hover:underline text-sm font-medium"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
