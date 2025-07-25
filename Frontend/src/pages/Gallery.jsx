import { useState } from 'react';
import Masonry from '../components/Masonry'; // Ensure correct path

const Gallery = () => {
  const [items] = useState([
    {
      id: "1",
      img: "https://www.worldsankirtan.org/admin/files/2055225594.JPG",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "2",
      img: "https://www.worldsankirtan.org/admin/files/966985315.JPG",
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "3",
      img: "https://www.worldsankirtan.org/admin/files/1420788167.JPG",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "4",
      img: "https://www.worldsankirtan.org/admin/files/1837675879.jpg",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "5",
      img: "https://www.worldsankirtan.org/admin/files/1516987941.jpg",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "6",
      img: "https://www.worldsankirtan.org/admin/files/1862235880.JPG",
      url: "https://example.com/three",
      height: 400,
    },
    {
      id: "7",
      img: "https://www.worldsankirtan.org/admin/files/1902588969.jpg",
      url: "https://example.com/three",
      height: 400,
    },
    {
      id: "8",
      img: "https://www.worldsankirtan.org/admin/files/126583275.jpg",
      url: "https://example.com/three",
      height: 500,
    },
    {
      id: "9",
      img: "https://www.worldsankirtan.org/admin/files/726675724.jpg",
      url: "https://example.com/three",
      height: 400,
    },
    {
      id: "10",
      img: "https://www.worldsankirtan.org/admin/files/1845601892.jpg",
      url: "https://example.com/three",
      height: 300,
    },
    {
      id: "11",
      img: "https://www.worldsankirtan.org/admin/files/1461633101.jpg",
      url: "https://example.com/three",
      height: 400,
    },
    {
      id: "12",
      img: "https://cf-img-a-in.tosshub.com/sites/visualstory/wp/2025/02/chitralekhaji_474133634_4012444639002167_7739575252445376644_nITG-1739768229246.jpg?size=*:900",
      url: "https://example.com/three",
      height: 500,
    },
    {
      id: "13",
      img: "https://cf-img-a-in.tosshub.com/sites/visualstory/wp/2025/02/chitralekhaji_474133634_4012444639002167_7739575252445376644_nITG-1739768229246.jpg?size=*:900",
      url: "https://example.com/three",
      height: 500,
    },
  ]);

  return (
    <div className="w-full mt-25 min-h-screen bg-white px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <Masonry
          items={items}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="center"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={true}
        />
      </div>
    </div>
  );
};

export default Gallery;
