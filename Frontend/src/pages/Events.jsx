import { Fade, Zoom } from "react-awesome-reveal";



const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Shrimad Bhagwat Katha - USA',
      date: '18-07-2025 - 04-08-2025',
      location: 'USA',
      imageUrl: 'https://www.worldsankirtan.org/admin/files/1188201291.jpg',
    },
    {
      id: 2,
      title: 'Shrimad Bhagwat Katha - Darbhanga, Bihar',
      date: '07-09-2025 3:00 PM - 13-09-2025 6:00 PM',
      location: 'Darbhanga, Bihar',
      imageUrl: 'https://www.worldsankirtan.org/admin/files/1356214297.jpg',
    },
    {
      id: 3,
      title: 'Shrimad Bhagwat Katha - Raichur, Karnataka',
      date: '02-10-2025 3:00 PM - 08-10-2025 6:00 PM',
      location: 'Raichur, Karnataka',
      imageUrl: 'https://www.worldsankirtan.org/admin/files/1908702471.jpg',
    },{
      id: 4,
      title: 'Shrimad Bhagwat Katha - Vrindavan Dham',
      date: '25-10-2025 3:00 pm - 31-10-2025 6:00 pm',
      location: 'Vrindavan Dham',
      imageUrl: 'https://www.worldsankirtan.org/admin/files/1805998286.jpg',
    },
    {
      id: 5,
      title: 'Shrimad Bhagwat Katha - Shela, Gujarat',
      date: '17-12-2025 3:00 pm - 23-12-2025 6:00 pm',
      location: ' Agrasen Foundation, Agrasen Road, Club 07, Shela, Gujarat - 380058',
      imageUrl: 'https://www.worldsankirtan.org/admin/files/805638211.jpeg',
    },
    {
      id: 6,
      title: 'Shrimad Bhagwat Katha - Kandivali, Mumbai',
      date: '04-01-2026 3:00 pm - 10-01-2026 6:00 pm',
      location: 'Kandivali, Mumbai',
      imageUrl: 'https://www.worldsankirtan.org/admin/files/1861673460.jpg',
    },
     {
      id: 7,
      title: 'Shrimad Bhagwat Katha - Paonta Sahib, HP',
      date: ' 15-01-2026 12:00 pm - 21-01-2026 3:00am',
      location: 'Nagar Palika Khel Maidan, Paonta Sahib, HP',
      imageUrl: 'https://www.worldsankirtan.org/admin/files/1861673460.jpg',
    },
    {
      id: 8,
      title: 'Shrimad Bhagwat Katha - Kanke RD Ranchi, Jharkhand',
      date: ' 29-01-2026 3:00 pm - 04-02-2026 6:00 pm',
      location: 'Shrimad Bhagwat Katha - Holiday Home, Kanke RD Ranchi, Jharkhand',
      imageUrl: 'https://www.worldsankirtan.org/admin/files/392884699.jpg',
    },
    {
      id: 9,
      title: 'Shrimad Bhagwat Katha - Patiyala, Punjab',
      date: ' 24-02-2026 3:00 pm - 02-03-2026 6:30 pm',
      location: 'Patanda, Patiyala, Punjab',
      imageUrl: 'https://www.worldsankirtan.org/admin/files/1000265149.jpg',
    },
  ];

  return (
    <Fade cascade damping={0.1} triggerOnce>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-20">
      {events.map((e) => (
        <Zoom triggerOnce key={e.id}>
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <img src={e.imageUrl} alt={e.title} className="w-full h-48 object-cover" />
            <div className="p-4 flex flex-col gap-4">
              <h2 className="text-xl font-semibold text-center text-gray-800">{e.title}</h2>
              <p className="text-[#3C1F2F]">
                <i className="ri-time-line mr-1"></i>{e.date}
              </p>
              <p className="text-[#3C1F2F]">
                <i className="ri-map-pin-line mr-1"></i>{e.location}
              </p>
              <button className="bg-[#3C1F2F] text-white w-full p-4 rounded-lg transition duration-300 hover:bg-[#50253d]">
                KNOW MORE
              </button>
            </div>
          </div>
        </Zoom>
      ))}
    </div>
  </Fade>
  
  );
};

export default Events;
