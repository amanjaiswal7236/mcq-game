import React from 'react';

const Score = ({ score, totalQuestions, handleRestart }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Score</h2>
      <p className="text-xl mb-6 text-gray-600">
        {score} out of {totalQuestions}
      </p>
      <button
        onClick={handleRestart}
        className="py-3 px-5 bg-green-500 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300 transition-colors duration-200"
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default Score;
