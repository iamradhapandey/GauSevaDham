import React from "react"
import DeviImage1 from "../assets/devi1.jpeg" // Update with actual path
import DeviImage2 from "../assets/devi2.jpeg" // Update with actual path
import { motion } from "framer-motion"
const About_Deviji = () => {
  return (
    <div className="bg-white text-black">
      <div className="bg-[#fafaf6] py-4 text-center text-black text-lg font-semibold">
        About Devi Chitralekha Ji
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-10">
        {/* Section 1 */}
        <section className="md:flex gap-8 items-start">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-lg font-bold">
              Devi <span className="text-orange-500">Chitralekha</span> Ji
            </h2>
            <p className="text-sm leading-relaxed">
              India, the land of holy people and great souls, remained the birth
              place of many action heroes & seers in the long scheme. There were
              the lords of justice and religious icons who came with divine
              birth and led this society to sanitation, liberation and
              meaningful path to enlighten people, socially and in this world
              regarding the God and His teachings. So did the other people may
              follow it alike.
              <br />
              <br />
              Here is Devi Ji, the perfect example of a modern saint. At
              a tender age, she has delivered countless discourses on platforms
              for spreading such a light. Devi Ji has successfully preached on
              many "Bhagwat Kathas". She has got devotees across the world. Lots
              of devotees convey their deep reverence for Devi Ji.
            </p>
          </div>

<motion.img
  whileHover={{ scale: 1.1 }}
  transition={{ duration: 0.3 }}
  src={DeviImage1}
  alt="Devi Chitralekha Ji"
  className="md:w-1/2 rounded shadow-md mt-6 md:mt-0"
/>

        </section>

        {/* Section 2 */}
        <section className="md:flex gap-8 items-start">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-lg font-bold">
              Devi <span className="text-orange-500">Chitralekha</span> Ji Birth
            </h2>
            <p className="text-sm leading-relaxed">
              On 19th January 1997 Devi Chitralekha Ji (an enlightened and
              sacred soul) was born in a Brahman family from Khambi village
              (Palwal district, Haryana). On that day with the birth of the
              little saint the divine atmosphere of Brajwasis bloomed. Many
              Brahmanas who face the Devi Ji’s glory felt it as a divine culture
              reincarnation. Where other birth is of innocent saints and rishis
              (sages), the atmosphere got glimpses of divine music called divine
              nectar. People have witnessed her by sequential symptoms and
              musical prophecy. People termed these people and the world as a
              great “enlightened person” in the near future.
            </p>
          </div>
          <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
            src={DeviImage2}
            alt="Devi Birth"
            className="md:w-1/2 rounded shadow-md mt-6 md:mt-0"
          />
        </section>

        {/* Section 3 - Initiation */}
        <section>
          <h2 className="text-lg font-bold border-l-4 border-orange-500 pl-3 mb-2">
            Initiation
          </h2>
          <p className="text-sm leading-relaxed">
            Devi Ji was initiated in GAUDIYA VAISHNAVISM (founded by Chaitanya
            Mahaprabhu) when she was just 4 years old under the guidance of a
            Bengali saint called Shri Shri Girdhari Baba. In her family both
            parents and grandparents were already very religious.
            <br />
            <br />
            When she was 5 years old, she went to a kirtan to attend (8/9 day
            event), then she started narrating Shrimad Bhagwat Katha on stage.
            From then, she was invited for 7-day events across cities. Her
            talent, knowledge and musical presentations made people present
            their deep bow. Renowned saints also blessed her and guided her.
          </p>
        </section>

        {/* Section 4 - Teaching */}
        <section>
          <h2 className="text-lg font-bold border-l-4 border-orange-500 pl-3 mb-2">
            Teaching
          </h2>
          <p className="text-sm leading-relaxed">
            There is no member in the family who knows how to preach “Bhagwat
            Katha” & play music, while Devi Ji is fully capable in preaching,
            playing harmonium (musical instrument), and singing very well. She
            spreads “Bhagwat Katha” for joy, music, and devotion. She sends her
            joy and kind of return toward people by expressing love and devotion
            through musical and spiritual discourses. <br />
            <br />
            That’s why she is not just a public face, but also a face of
            devotion.
            <br />
            <br />
            So far Devi Ji has delivered Kathas in cities like: Delhi, Haryana,
            Uttar Pradesh, Nagaland, Punjab and more. Even internationally in
            USA (Texas, Washington DC) and South Africa.
          </p>
        </section>
      </div>
    </div>
  )
}

export default About_Deviji
