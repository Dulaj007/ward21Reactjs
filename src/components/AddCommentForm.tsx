import React, { useState } from 'react';
import { ref, push } from 'firebase/database';
import { database } from '../firebaseConfig';

const AddCommentForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && content) {
      const commentsRef = ref(database, 'comments/');
      const newComment = {
        name,
        email,
        content,
        timestamp: Date.now(),
      };
      push(commentsRef, newComment);
      setName('');
      setEmail('');
      setContent('');
    }
  };

  return (
    <div className='flex justify-center my-5 font-montserrat mx-4'>
    <div className="bg-black/30 p-4 rounded-lg shadow-lg w-full max-w-2xl z-11 ">
      <h2 className="text-[#FFD700] text-lg font-semibold ">Leave a Comment</h2>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mt-4">
        {/* Name Input */}
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full bg-[#1A1A1A] text-white/80 border border-white/20 rounded-md px-4 py-2 mb-2 focus:outline-none focus:border-[#FFD700]"
        />

        {/* Email Input */}
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full bg-[#1A1A1A] text-white/80 border border-white/20 rounded-md px-4 py-2 mb-2 focus:outline-none focus:border-[#FFD700]"
        />

        {/* Comment Input */}
        <textarea
          placeholder="Share your thoughts about our project..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="w-full bg-[#1A1A1A] text-white/80 border border-white/20 rounded-md px-4 py-2 mb-2 focus:outline-none focus:border-[#FFD700] resize-none"
        />

        {/* Submit Button */}
        <div className="flex justify-end pt-2">
        <button
          type="submit"
          className=" bg-[#FFD700] text-black font-bold px-4 py-2 rounded-md hover:bg-yellow-500 transition"
        >
          Post Comment
        </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default AddCommentForm;
