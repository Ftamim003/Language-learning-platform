import Success from "../Components/Success/Success";


const Home = () => {
    return (
        <div className="">
            <section className="slider">
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img
                            src="https://i.ibb.co.com/Krwr5Mj/images.jpg"
                            className="w-full md:h-[400px] mx-auto rounded-md" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                            src="https://i.ibb.co.com/GHHndtX/1580739565729.jpg"
                            className="w-full md:h-[400px] mx-auto rounded-md" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                            src="https://i.ibb.co.com/ryfK95K/istockphoto-1032296056-612x612.jpg"
                            className="w-full md:h-[400px] mx-auto rounded-md" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img
                            src="https://i.ibb.co.com/R2fQ8W2/occasionaly-japanese.jpg"
                            className="w-full md:h-[400px] mx-auto rounded-md" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </section>

             {/* About lingo bingo */}
            <section className="bg-gradient-to-r from-blue-100 to-blue-50 py-12">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
                        
                        <div className="flex justify-center">
                            <img
                                src="https://i.ibb.co.com/k9cvjmj/learn-japanese-300x200.jpg"
                                alt="Language Learning Illustration"
                                className="md:w-[400px] md:h-[400px] rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
                            />
                        </div>

                       
                        <div className="space-y-6">
                            <h2 className="text-4xl font-bold text-blue-700">
                                About Lingo Bingo
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Welcome to <strong>Lingo Bingo</strong>! Our mission is to make language learning fun, engaging, and accessible for everyone.
                                Whether you’re a beginner or looking to expand your vocabulary, our app provides interactive lessons tailored to your needs.
                            </p>
                            <ul className="list-disc pl-5 text-gray-600">
                                <li>Learn vocabulary with context-based examples and pronunciation.</li>
                                <li>Track your progress and unlock new lessons as you improve.</li>
                                <li>Interactive tutorials and videos to enhance your learning experience.</li>
                            </ul>
                            <button className="btn btn-primary hover:bg-blue-600 transition-colors duration-300">
                                Start Learning Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Success></Success>
            </section>

           {/* why choose lingo bingo */}
            <section className="py-12 bg-gray-50 my-5">
                <div className="container mx-auto px-6 lg:px-20 text-center">
                    <h2 className="text-4xl font-bold text-blue-700 mb-6">
                        Why Choose Lingo Bingo?
                    </h2>
                    <p className="text-gray-600 mb-7">
                        Discover how Lingo Bingo makes language learning fun and effective.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-blue-600 mb-3">
                                Interactive Lessons
                            </h3>
                            <p className="text-gray-600">Dive into dynamic lessons designed to keep you engaged and learning    </p>
                        </div>
                        <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-blue-600 mb-3">
                                Pronunciation Guides
                            </h3>
                            <p className="text-gray-600"> Master the correct pronunciation with easy-to-follow guides.</p>
                        </div>
                        <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-blue-600 mb-3">
                                Progress Tracking
                            </h3>
                            <p className="text-gray-600">
                                Keep track of your learning journey and stay motivated.
                            </p>
                        </div>
                        <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-blue-600 mb-3">
                                Language Tips and Tricks
                            </h3>
                            <p className="text-gray-600">
                                Learn practical strategies to use new vocabulary effectively in
                                conversations and writing.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


             {/* Users comments*/}
            <section  className="py-12 bg-blue-50 my-5">
                <div className="container mx-auto px-6 lg:px-20 text-center">
                    <h2 className="text-4xl font-bold text-blue-700 mb-6">
                        What Our Learners Say
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Hear from language learners who achieved their goals with Lingo Bingo.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition">
                            <img
                                src="https://i.ibb.co.com/Mh56dkB/smile-profile-face-male-preview.jpg"
                                alt="User 1"
                                className="w-20 h-20 mx-auto rounded-full mb-4"
                            />
                            <h3 className="text-xl font-semibold text-blue-600">Alice</h3>
                            <p className="text-gray-600">
                                Lingo Bingo made learning Japanese so fun and easy! Highly
                                recommended.
                            </p>
                        </div>
                        <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition">
                            <img
                                src="https://i.ibb.co.com/GsGX9s3/istockphoto-536843252-612x612.jpg"
                                alt="User 2"
                                className="w-20 h-20 mx-auto rounded-full mb-4"
                            />
                            <h3 className="text-xl font-semibold text-blue-600">John</h3>
                            <p className="text-gray-600">
                                The progress tracking feature kept me motivated every day!
                            </p>
                        </div>
                        <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition">
                            <img
                                src="https://i.ibb.co.com/Jp8qyKY/istockphoto-1437816897-612x612.jpg"
                                alt="user3"
                                className="w-20 h-20 mx-auto rounded-full mb-4"
                            />
                            <h3 className="text-xl font-semibold text-blue-600">Maria</h3>
                            <p className="text-gray-600">
                                The practical language tips helped me use new words naturally in
                                conversations. A game changer!
                            </p>
                        </div>
                    </div>
                    <button className="btn btn-primary mt-6 hover:bg-blue-600 transition-colors duration-300">
                        Start Learning Today
                    </button>
                </div>
            </section>




        </div>
    );
};

export default Home;