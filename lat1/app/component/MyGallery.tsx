import React from 'react';
import Image from 'next/image';

// Import gambar hobi
import membacaImage from '../membaca.jpeg';
import memasakImage from '../memasak.jpeg';
import tidurImage from '../tidur.jpeg';
import shopingImage from '../shoping.jpeg';

// Object Hobbies dengan atribut name, description, dan image
const Hobbies = [
  {
    name: "Membaca",
    description: "Membaca berbagai macam buku.",
    image: membacaImage,
  },
  {
    name: "Memasak",
    description: "Memasak hal yang menyenangkan untuk wanita.",
    image: memasakImage,
  },
  {
    name: "Tidur",
    description: "Tidur untuk menjaga stamina agar kuat.",
    image: tidurImage,
  },
  {
    name: "Shoping",
    description: "Berbelanja setiap satu bulan sekali.",
    image: shopingImage,
  },
];

const MyGallery = () => {
  return (
    <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">My Hobbie</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Hobbies.map((hobby, index) => (
          <div key={index} className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
            <Image
              src={hobby.image}
              alt={hobby.name}
              className="object-cover"
              width={500} // lebar gambar
              height={200} // tinggi gambar
              layout="responsive" // membuat gambar responsif
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{hobby.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyGallery;
