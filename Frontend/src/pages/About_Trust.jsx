import bannerImage from "../assets/bannerImage.jpeg" // Update with correct path
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

export const About_Trust = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-white text-black px-4 md:px-20 py-10">
      <h1 className="text-center text-2xl md:text-3xl font-bold mb-2">
        About World Sankirtan Trust
      </h1>

      {/* Banner Image */}
      <div className="flex justify-center mb-10">
        <motion.img
          src={bannerImage}
          alt="Gau Seva Dham Hospital Banner"
          className="rounded-md w-full max-w-4xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>

      {/* Aim of Trust Section */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-xl md:text-2xl font-bold">
          Aim <span className="text-orange-600">of</span> Trust
        </h2>
        <p className="mt-4 text-sm text-gray-700 leading-6">
          World Sankirtan Tour Trust is established by Pujya Devishri Chitrlekha
          Ji with four numbers of Trustees on 28th May 2010. Head Office of
          World Sankirtan Tour Trust is at Village-Kanah, Teh –Hodal Distt
          Palwal (HR). Its Branch Office “Gau Seva Dham” is at NH2 near Village
          Bhulwana, Hodal, Palwal (HR). At present more than 50 employees are
          working in different departments of the trust. More than 100 Members
          of worldwide support the mission of the trust.
          <br />
          <br />
          Devi ji want to follow the footmarks of Lord “Chaitanya Maha Prabhu”.
          Lord “Chaitanya Maha Prabhu” Himself says that whatever you can’t get
          by Yoga, Meditation and Sadhna, you can get easily by simply chanting
          “Hare Naam”.
        </p>
      </div>

      {/* Mission Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold">
          Our <span className="text-orange-600">Mission</span>
        </h2>
        <p className="mt-4 text-sm text-gray-700 leading-6">
          Mission of our trust is that single “Gau Seva Dham Hospital” to
          provide free of cost medical treatment to helpless and wounded Gau
          Mata. In this regards and understanding the pain of Gau Mata, Under
          the Chairmanship of Devishri Chitrlekha “World Sankirtan Tour Trust”
          has initiated in this direction and purchased 10 acres land on
          National Highway-2 near Hodal, District- Palwal(Haryana) (which comes
          into Brij 84 Kos circumference) to construct a Cow hospital.
          <br />
          <br />
          Following points are our main aim: <br />
          • To Pick-up injured cattle, get them to the hospital via an ambulance
          and to then provide them with every appropriate treatment for their
          wellbeing. <br />
          • To provide complete care to old aged and wandering Cows. <br />
          • To provide medical treatment to seriously wounded and cancer
          suffering cows and their progeny. <br />
          • To Encourage people to protect and Save Our Holy cow. <br />
          • To Rescue cows from being killed in slaughterhouses and rehabilitate
          them once again. <br />• To Increase awareness of the benefits of cow
          milk, butter, curd and ghee and the importance of being vegetarian.
        </p>
      </div>

      {/* Footer Banner */}
      <div className="bg-gray-500 text-white text-center py-4 mt-12">
        <motion.p
          className="font-semibold text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Join your hand with us for a better life and beautiful future.
        </motion.p>
        <button onClick={()=> navigate('/donate')} className="mt-4 px-6 py-2 text-sm font-bold text-white bg-gradient-to-r from-[#8d1c69] to-[#3c1f2f] rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer">
          💠 DONATE NOW
        </button>
      </div>
    </div>
  )
}

export default About_Trust
