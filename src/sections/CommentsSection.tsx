// components/CommentsList.tsx
import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../firebaseConfig';
import { Comment } from '../constants/Comment';
import CommentCard from '../components/Comment';

import { Fade } from 'react-awesome-reveal';
import AddCommentForm from '../components/AddCommentForm';
import BackgroundVid from "../assets/vid.mp4";

const CommentsList: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [visibleCount, setVisibleCount] = useState(4); // Initial number of comments to display

  useEffect(() => {
    const commentsRef = ref(database, 'comments/');
    const unsubscribe = onValue(commentsRef, (snapshot) => {
      const data = snapshot.val();
      const commentsArray = data
        ? Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }))
        : [];
      setComments(commentsArray);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const loadMoreComments = () => {
    setVisibleCount((prevCount) => prevCount + 4); // Load 8 more comments on each click
  };

  return (
    <div className="relative flex flex-col  min-h-screen max-[900px]:gap-0">
      
    {/* Background Video */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src={BackgroundVid} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
     {/* Blending Effect - Top */}
     <div className="absolute top-0 left-0 w-full h-50 bg-gradient-to-b from-[var(--white-bg)] dark:from-black to-transparent pointer-events-none"></div>
     <div className="absolute inset-0  bg-[var(--white-bg)] dark:bg-transparent opacity-50 "></div>
{/* Blending Effect - Bottom */} 
<div className="absolute bottom-0 left-0 w-full h-50 bg-gradient-to-t from-[var(--white-bg)] dark:from-black to-transparent pointer-events-none"></div>

      <Fade direction="up" duration={1000}>
              <h1 className="relative pt-5 font-montserrat uppercase tracking-[0.1em] max-[900px]:text-[30px] text-4xl text-black dark:text-white font-semibold text-center">
              Thank You for Your Feedback!
              </h1> <AddCommentForm />
            
            </Fade>
           
          
      <div className="container mx-auto px-4 ">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {comments.slice(0, visibleCount).map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </div>
        {visibleCount < comments.length && (
          <div className="flex justify-center mt-4">
              <Fade direction="up" duration={1000}>
            <button
              onClick={loadMoreComments}
              className="px-4 my-4 py-2 border-2 border-black/80 dark:border-white/80 rounded-full bg-transparent text-black dark:text-white hover:bg-[var(--yellow)]/50 duration-200  transition hover:scale-110"
            >
              See More
            </button></Fade>
           
          </div>
          
        )}
         <p className='relative font-semibold dark:text-[var(--yellow)]/70 text-black text-center md:text-2xl py-5 p-0 md:px-25 leading-normal'>
              We truly appreciate you taking the time to share your thoughts about our project.  
              Your feedback helps us improve and refine our future game updates, ensuring a better experience for everyone!
                </p>
      </div>
    </div>
  );
};

export default CommentsList;
