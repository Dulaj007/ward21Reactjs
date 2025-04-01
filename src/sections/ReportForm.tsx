import React, { useState } from 'react';
import { ref, push } from 'firebase/database';
import { database } from '../firebaseConfig'; // Ensure this is your Firebase config file
import { DMCAInfo } from './DMCAInfo';

interface ReportProps {
  title: string;
  reportType: 'bugReports' | 'dmcaReports';  // Accept the type for dynamic table
}

const ReportForm: React.FC<ReportProps> = ({ title, reportType }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && description) {
      const reportsRef = ref(database, reportType);  // Dynamically switch between bugReports and dmcaReports
      const newReport = {
        name,
        email,
        description,
        timestamp: Date.now(),
      };
      push(reportsRef, newReport);

      // Clear form fields after submission
      setName('');
      setEmail('');
      setDescription('');
    }
  };

  return (
    <div className='bg-white dark:bg-black'>
      <div className='py-30'>
      {reportType === 'dmcaReports' && (
            <section>
              <DMCAInfo />
            </section>
          )}
        <div className="max-w-lg mx-auto p-6 bg-black/10 dark:bg-white/5 rounded-lg shadow-md font-montserrat">
        
          <h2 className="text-xl font-semibold text-center text-gray-800 dark:text-white mb-4">{title}</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm text-gray-700 dark:text-gray-300">Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 p-2 border rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
                placeholder="Your name"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm text-gray-700 dark:text-gray-300">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 p-2 border rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
                placeholder="Your email"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="description" className="text-sm text-gray-700 dark:text-gray-300">Report Description</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-2 p-2 border rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
                placeholder="Describe the issue"
                rows={4}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 mt-4 bg-blue-500 dark:bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-600 dark:hover:bg-blue-800 transition-colors"
            >
              Submit {title}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReportForm;
