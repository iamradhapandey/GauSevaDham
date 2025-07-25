import { useParams, Link } from 'react-router-dom';
import { blogDetail } from '../assets/assets';
import { motion } from 'framer-motion';

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogDetail.find((item) => item.id === Number(id));

  if (!post) {
    return (
      <div className=" min-h-screen flex flex-col items-center justify-center text-center p-6">
        <h2 className="text-2xl text-red-600 font-semibold mb-4">404 – Blog not found</h2>
        <Link to="/blog" className="text-indigo-600 underline hover:text-indigo-800">
          ← Go Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <motion.div 
      className="max-w-3xl  mx-auto p-6 mt-32 bg-white rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Animated Image */}
      <motion.img
        src={post.image}
        alt={post.title}
        className="w-full h-72 object-cover rounded-lg mb-5"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Title */}
      <motion.h1
        className="text-3xl font-bold text-[#3c1f2f] mb-2"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {post.title}
      </motion.h1>

      {/* Date */}
      <motion.p
        className="text-sm text-gray-500 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {post.date}
      </motion.p>

      {/* Article */}
      <motion.article
        className="text-gray-800 whitespace-pre-line leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        {post.content}
      </motion.article>

      {/* Back to Blog link */}
      <motion.div
        className="mt-6 inline-block"
        whileHover={{ scale: 1.05, x: -5 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <Link
          to="/blog"
          className="text-indigo-600 hover:underline font-medium"
        >
          ← Back to Blog
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default BlogDetail;
