import { useLoaderData, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";


const LessonDetails = () => {
    const {lesson_no, words }= useLoaderData();
    const navigate = useNavigate();
  const [selectedWord, setSelectedWord] = useState(null);
  const closeModal = () => setSelectedWord(null);


  const getCardColor = (difficulty) => {
    if (difficulty === 'easy') {
      return 'bg-green-100 border-green-400';
    } else if (difficulty === 'medium') {
      return 'bg-yellow-100 border-yellow-400';
    } else if (difficulty === 'difficult') {
      return 'bg-red-100 border-red-400';
    } else {
      return 'bg-gray-100 border-gray-400';
    }
  };

  const pronounceWord = (word) => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "ja-JP"; 
    speechSynthesis.speak(utterance);
  };
  

  const handleWordClick = (word) => {
     setSelectedWord(word); 
    pronounceWord(word.word); 
  };

    return (
        <div>
           <header>
            <Navbar></Navbar>
           </header>
           <main className="min-h-screen bg-gray-50 py-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-700">
            Lesson {lesson_no}
          </h1>
          <p className="text-gray-600 mt-2">
            Explore the content of Lesson {lesson_no}.
          </p>
        </div>
        <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {words.map((word) => (
            <div
              key={word.id}
              className={`shadow-md rounded-lg p-6 border ${getCardColor(
                word.difficulty
              )} text-center hover:shadow-lg transition`}
              onClick={() => handleWordClick(word)}
            >
              <h3 className="text-xl font-semibold text-blue-600">{word.word}</h3>
              <p className="text-gray-600">Meaning: {word.meaning}</p>
              <p className="text-gray-500 italic">Pronunciation: {word.pronunciation}</p>
              <p className="text-gray-500">Part of Speech: {word.part_of_speech}</p>
              <button
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                onClick={() => {
                  setSelectedWord(word);
                  pronounceWord(word.word); // Pronounce the word when clicked
                }}
              >
                When to Say
              </button>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <button
            className="bg-gray-500 text-white py-2 px-6 rounded hover:bg-gray-600 transition"
            onClick={() => navigate('/learning')}
          >
            Back to Lesson
          </button>
        </div>
      </main>

            {selectedWord && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/3">
            <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center">
              {selectedWord.word}
            </h3>
            <p className="text-gray-600 mb-2">
              <strong>Meaning:</strong> {selectedWord.meaning}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>When to Say:</strong> {selectedWord.when_to_say}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Example:</strong> {selectedWord.example}
            </p>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}


           <div>
           <Footer></Footer>
           </div>
        </div>
    );
};

export default LessonDetails;