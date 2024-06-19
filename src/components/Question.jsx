import React from 'react';

const Question = ({ question, options, handleAnswer }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">{question}</h2>
      <div className="space-y-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className="w-full py-3 px-5 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors duration-200"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
