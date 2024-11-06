"use client";

import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    comment: '',
    rating: 0,
  });

  const [errors, setErrors] = useState({
    name: false,
    comment: false,
  });

  const [ratings, setRatings] = useState<number[]>([]);
  const [averageRating, setAverageRating] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: false }));
  };

  const handleRatingChange = (rating: number) => {
    setFormData((prevData) => ({ ...prevData, rating }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, comment, rating } = formData;

    if (!name || !comment) {
      setErrors({
        name: !name,
        comment: !comment,
      });
      return;
    }

    setRatings((prevRatings) => [...prevRatings, rating]);

    setFormData({ name: '', comment: '', rating: 0 });
    alert("Terima kasih atas komentar dan rating Anda!");
  };

  useEffect(() => {
    if (ratings.length > 0) {
      const totalRating = ratings.reduce((acc, curr) => acc + curr, 0);
      setAverageRating(totalRating / ratings.length);
    }
  }, [ratings]);

  return (
    <section className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8 mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Form</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nama
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            } rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            placeholder="Masukkan nama Anda"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">Nama wajib diisi.</p>
          )}
        </div>
        <div>
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
            Komentar
          </label>
          <textarea
            name="comment"
            id="comment"
            value={formData.comment}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.comment ? 'border-red-500' : 'border-gray-300'
            } rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            placeholder="Tulis komentar Anda"
          ></textarea>
          {errors.comment && (
            <p className="text-red-500 text-sm mt-1">Komentar wajib diisi.</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Rating</label>
          <div className="flex space-x-1 mt-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                onClick={() => handleRatingChange(star)}
                className={`cursor-pointer ${
                  formData.rating >= star ? 'text-yellow-500' : 'text-gray-300'
                }`}
                size={24}
              />
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none"
        >
          Kirim Komentar
        </button>
      </form>

      <div className="mt-8 text-center">
        <h3 className="text-xl font-semibold text-gray-800">Average Rating</h3>
        <div className="flex justify-center mt-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={`${
                averageRating >= star ? 'text-yellow-500' : 'text-gray-300'
              }`}
              size={24}
            />
          ))}
        </div>
        <p className="text-gray-600 mt-1">
          {ratings.length > 0
            ? `(${averageRating.toFixed(1)} dari 5 bintang)`
            : 'Belum ada rating'}
        </p>
      </div>
    </section>
  );
};

export default ContactForm;
