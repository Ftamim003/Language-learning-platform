import CountUp from "react-countup";


const Success = () => {
    return (
        <div className="py-12 bg-gray-50 mt-5">
             <div className="container mx-auto px-6 lg:px-20 text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">
          Our Success in Numbers
        </h2>
        <p className="text-gray-600 mb-9">Discover how far weve come and how many people weve helped.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-3xl font-bold text-blue-600"> <CountUp end={2500} duration={3} /></h3>
            <p className="text-gray-600">Happy Users</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            
            <h3 className="text-3xl font-bold text-blue-600"><CountUp end={100} duration={4} /></h3>
            <p className="text-gray-600">Lessons</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-3xl font-bold text-blue-600"> <CountUp end={300} duration={3} /> </h3>
            <p className="text-gray-600">Vocabularies</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-3xl font-bold text-blue-600"><CountUp end={100} duration={4} />
            </h3>
            <p className="text-gray-600">Tutorials</p>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Success;