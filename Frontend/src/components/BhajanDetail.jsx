import { useParams, Link } from 'react-router-dom';
import Bhajan from '../pages/Bhajan';

const BhajanDetail = () => {
  const { id } = useParams();
  const bhajan = bhajanData.find((b) => b.id === Number(id));

  if (!bhajan) return <div className="text-center mt-20 text-red-600">Bhajan not found</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-lg">
      <iframe
        className="w-full h-64 mb-6"
        src={bhajan.youtubeUrl}
        title={bhajan.title}
        allowFullScreen
      ></iframe>
      <h1 className="text-3xl font-bold text-[#3c1f2f] mb-2">{bhajan.title}</h1>
      <article className="text-gray-800 whitespace-pre-line mt-4 leading-relaxed">
        {bhajan.lyrics}
      </article>
      <div className="mt-6">
        <Link to="/bhajan" className="text-indigo-600 underline font-medium">← Back to Bhajans</Link>
      </div>
    </div>
  );
};

export default BhajanDetail;
