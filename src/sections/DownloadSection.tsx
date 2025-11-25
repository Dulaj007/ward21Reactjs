import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { motion } from 'framer-motion';
import { ref, push } from 'firebase/database';
import { database } from '../firebaseConfig';
import ArrowRight from '../assets/Icons/DarkMode/arrow-right-white.svg';
import ArrowLeft from '../assets/Icons/DarkMode/arrow-left-white.svg';


const DownloadSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [step, setStep] = useState(1); // 1 = Name/Email, 2 = Comment, 3 = Confirmation
  const [isAgreed, setIsAgreed] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; content?: string }>({});

  const [isGitHubFollowed, setIsGitHubFollowed] = useState(false);
  const [isLinkedInFollowed, setIsLinkedInFollowed] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const validateName = (name: string) => {
    if (!name.trim()) {
      return 'Name is required.';
    }
    return '';
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      return 'Email is required.';
    } else if (!emailRegex.test(email)) {
      return 'Invalid email format.';
    }
    return '';
  };

  const validateContent = (content: string) => {
    if (!content.trim()) {
      return 'Comment is required.';
    }
    return '';
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setName(value);
    setErrors((prevErrors) => ({ ...prevErrors, name: validateName(value) }));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
    setErrors((prevErrors) => ({ ...prevErrors, email: validateEmail(value) }));
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setContent(value);
    setErrors((prevErrors) => ({ ...prevErrors, content: validateContent(value) }));
  };
  const handleGitHubClick = () => {
    window.open('https://github.com/Dulaj007', '_blank', 'noopener,noreferrer');
    startFollowTimer('github');
  };
  
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/yasitha-dulaj/', '_blank', 'noopener,noreferrer');
    startFollowTimer('linkedin');
  };

  const startFollowTimer = (platform: 'github' | 'linkedin') => {
    if (timer) {
      clearTimeout(timer);
    }
    const newTimer = setTimeout(() => {
      if (platform === 'github') {
        setIsGitHubFollowed(true);
      } else {
        setIsLinkedInFollowed(true);
      }
    }, 5000);
    setTimer(newTimer);
  };

  const handleContinue = () => {
    const nameError = validateName(name);
    const emailError = validateEmail(email);

    if (nameError || emailError) {
      setErrors({ name: nameError, email: emailError });
    } else {
      setErrors({});
      setStep(2); // Move to the comment input
    }
  };

  const handleBack = () => {
    setStep(1); // Go back to the name/email input
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const contentError = validateContent(content);

    if (contentError) {
      setErrors((prevErrors) => ({ ...prevErrors, content: contentError }));
    } else {
      setErrors({});

      // Save comment to the database
      const commentsRef = ref(database, 'comments/');
      const newComment = {
        name,
        email,
        content,
        timestamp: Date.now(),
      };
      await push(commentsRef, newComment);

      // Save name and email to downloadUsers table
      const downloadUsersRef = ref(database, 'downloadUsers/');
      const newDownloadUser = {
        name,
        email,
        timestamp: Date.now(),
      };
      await push(downloadUsersRef, newDownloadUser);

      // Proceed to the confirmation page (Step 3)
      setStep(3);
    }
  };

  const handleTermsChange = () => {
    setIsAgreed(!isAgreed);
  };

  const handleButtonClick = () => {
    setIsFormVisible(true); // Toggle visibility of the card
  };

  const handleDownloadClick = () => {
    if (isAgreed && isGitHubFollowed && isLinkedInFollowed) {
      window.open('https://ward21.info.gf//Downloads/WARD21setup.zip', '_blank', 'noopener,noreferrer');
    
    } else {
      if (!isAgreed) {
        alert('You must agree to the terms and services to download.');
      } else if (!isGitHubFollowed || !isLinkedInFollowed) {
        alert('Please support the developer by following on GitHub and LinkedIn.');
      }
    }
  };
  

  return (

    <div className='bg-[var(--white-bg)] dark:bg-black pb-15 py-10 font-montserrat'>
          <div className="scale-65 sm:scale-80 md:scale-90 lg:scale-100">
      <Fade direction="down" duration={1000}>
        <div className="flex justify-center">
          <motion.div
            transition={{ layout: { duration: 1 } }}
            layout='position'
            onClick={handleButtonClick}
            className="z-1 rounded-2xl  shadow-2xl bg-black Gradient-button border-[var(--yellow)]/40 duration-200 transition-transform transform hover:scale-105"
          >
            <motion.div
              className='font-montserrat uppercase z-1 rounded-2xl shadow-2xl text-[var(--white-OP-1)] px-8 py-5 text-xl font-bold 
                hover:text-[var(--yellow)] transition duration-200 '
            >
              DOWNLOAD
              
            </motion.div>
            {isFormVisible && (
              <motion.div
                layout
                className='pl-15 w-130 max-sm:w-120'
                transition={{ layout: { duration: 1 } }}
              >
                {/* Step 1: Name & Email */}
                {step === 1 && (
                  <div className="text-white">
                    <input
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={handleNameChange}
                      required
                      className={`mb-2 p-3 w-100 border rounded-xl ${errors.name ? 'border-red-500' : ''}`}
                    />
                    {errors.name && <p className="text-red-500 mb-2">{errors.name}</p>}
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={handleEmailChange}
                      required
                      className={`mb-2 p-3 w-100 border rounded-xl ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && <p className="text-red-500 mb-2">{errors.email}</p>}
                    <div className="flex justify-end pt-2">
                      <button
                        onClick={handleContinue}
                        className="Download-form-Btns flex items-center"
                        disabled={!!errors.name || !!errors.email}
                      >
                        Continue
                        <img className="pl-1" src={ArrowRight} alt="arrow" width={25} height={25} />
                      </button>
                    </div>
                  </div>
                )}

          {/* Step 2: Comment */}
            {step === 2 && (
              <div className="text-white">
                <textarea
                  placeholder="Share your thoughts about our project by typing a comment here then click continue to download..."
                  value={content}
                  onChange={handleContentChange}
                  required
                  className={`mb-2 p-3 w-100 h-35 border rounded-xl ${errors.content ? 'border-red-500' : ''}`}
                />
                {errors.content && <p className="text-red-500 mb-2">{errors.content}</p>}
                <div className="flex justify-end">
                  <button
                    onClick={handleBack}
                    className="Download-form-Btns flex items-center"
                  >
                    <img className="pr-1" src={ArrowLeft} alt="arrow" width={25} height={25} />
                    Back
                  </button>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="Download-form-Btns flex items-center"
                    disabled={!!errors.content}
                  >
                    Continue
                    <img className="pl-1" src={ArrowRight} alt="arrow" width={25} height={25} />
                  </button>
                </div>
              </div>
            )}

          {/* Step 3: Confirmation */}
            {step === 3 && (
              <div className="font-montserrat">
                {/* Comment Added Checkbox */}
                <p className='font-semibold text-xl p-1 text-white/80'>  - Comment added successfully!</p>
              

                {/* Support Developer Section */}
                <p className='font-semibold text-xl p-1 text-white/80'>- Support the developer</p>

                <div className="flex items-center ml-10 my-2">
                  <input
                    type="checkbox"
                    checked={isGitHubFollowed}
                    onChange={handleGitHubClick}
                  
                      className="Download-checkbox"
              />
                  <label onClick={handleGitHubClick} className="text-blue-500 cursor-pointer">
                    Follow on GitHub
                  </label>
                </div>
              
                
                <div className="flex items-center mb-4 ml-10">
                  <input
                    type="checkbox"
                    checked={isLinkedInFollowed}
                    onChange={handleLinkedInClick}
                  
                    className="Download-checkbox"
                  />
                  <label onClick={handleLinkedInClick} className="text-blue-500 cursor-pointer">
                    Follow on LinkedIn
                  </label>
                </div>

                {/* Terms Agreement Checkbox */}
                <div className="flex items-center ml-5 text-white/80">
                  <input
                    type="checkbox"
                    checked={isAgreed}
                    onChange={handleTermsChange}
                    className="mr-2 h-4 w-4"
                  />
                <label htmlFor="terms">
                  I agree to the{" "}
                  <a
                    href="https://ward21.info.gf/Terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-blue-500'
                  >
                    terms and conditions
                  </a>
                </label>
                </div>

                {/* Download Button */}
                <div className="flex justify-end">
                  <button
                    onClick={handleDownloadClick}
                    className={` px-4 py-2 rounded font-semibold text-xl m-4 ${
                      isAgreed && isGitHubFollowed && isLinkedInFollowed
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!isAgreed || !isGitHubFollowed || !isLinkedInFollowed}
                  >
                    DOWNLOAD
                  </button>
                </div>
              </div>
            )}

          </motion.div>
        )}
      </motion.div>
    </div>
    </Fade>
    </div>
    </div>
  );
};

export default DownloadSection;

 
