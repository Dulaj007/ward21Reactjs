import React from 'react';
import { Comment } from '../constants/Comment';
import { Fade } from 'react-awesome-reveal';

interface CommentCardProps {
  comment: Comment;
}

const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
  return (
      <Fade direction="down" duration={1000}>
    <div className=" overflow-hidden my-3 p-4 bg-black/40 border border-white/20 backdrop-blur-lg rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
      <div className="grid grid-cols-[40px_1fr] gap-3 w-80">
        {/* Profile Icon Placeholder (Replace with actual image if needed) */}
        <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white text-sm font-bold">
          {comment.name.charAt(0)}
        </div>

        <div className="flex-1">
          {/* Name and Timestamp (aligned right) */}
          <div className="flex flex-col justify-start items-start">
            <h3 className="text-white font-semibold">{comment.name}</h3>
            <small className="text-[10px] sm:text-[12px] text-gray-400 ">
              {/* {new Date(comment.timestamp).toLocaleString()} */}
            </small>
          </div>
          {/* Email below Name */}
          {/* <p className="text-[12px] sm:text-[14px] text-gray-400 overflow-hidden">{comment.email}</p> */}

          {/* Comment Content with Word Wrap and Overflow Handling */}
          <p className=" mt-2 w-50 text-gray-300 break-words whitespace-normal leading-relaxed text-[12px] sm:text-[14px]">
            {comment.content}
          </p>
        </div >
        
      </div>
    </div></Fade>
  );
};

export default CommentCard;
