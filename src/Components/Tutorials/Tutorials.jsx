import { Link, } from "react-router-dom";

const Tutorials = () => {
    const videoLinks = [
        "https://youtu.be/rGrBHiuPlT0?si=ADo_l2uI3hhSi0gt", 
        "https://youtu.be/bOUqVC4XkOY?si=J1RDrrajZpnnRu5v",
        "https://youtu.be/JnoZE51WZg4?si=L7iLWPPcPkJJSBx9",
        "https://youtu.be/k74yjmfFb_A?si=60EbGJmNcEoazdM6",
        "https://youtu.be/KUIWRsVZZZA?si=rvj-IWjpFg1ogBA1",
        "https://youtu.be/KUIWRsVZZZA?si=rvj-IWjpFg1ogBA1",
      ];
    
    return (
        <div>
            <section className="py-12 bg-blue-50 min-h-[300px] mb-3">
                <div className="container mx-auto px-6 lg:px-20">
                   
                    <h1 className="text-4xl font-bold text-blue-700 text-center mb-8">
                        Language Tutorials
                    </h1>

                   
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {videoLinks.map((link, index) => (
                            <div key={index} className="aspect-w-16 aspect-h-9">
                                <iframe
                                    src={link}
                                    title={`Tutorial ${index + 1}`}
                                    className="w-full h-full rounded-lg shadow-lg"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        ))}
                    </div>

                 
                    <div className="text-center mt-12">
                    <button className="btn btn-primary">
                            <Link to="/learning">Start Learning Now</Link>
                            </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Tutorials;