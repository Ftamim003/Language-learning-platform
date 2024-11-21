import { Link, } from "react-router-dom";

const Tutorials = () => {


    return (
        <div>
            <section className="py-12 bg-blue-50 min-h-[300px] mb-3">
                

                    <div>
                        <section className="py-12 bg-blue-50 min-h-[300px] mb-3">
                            <div className="container mx-auto px-6 lg:px-20">
                                <h1 className="text-4xl font-bold text-blue-700 text-center mb-8">
                                    Language Tutorials
                                </h1>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {/* Video 1 */}
                                    <div className="aspect-w-16 aspect-h-9">
                                        <iframe src="https://www.youtube.com/embed/rGrBHiuPlT0?si=DGTW1pnH5ynB5zpz"
                                        className="w-full h-full rounded-lg shadow-lg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    </div>
                                    {/* Video 2 */}
                                    <div className="aspect-w-16 aspect-h-9">
                                        <iframe
                                            src="https://www.youtube.com/embed/bOUqVC4XkOY"
                                            title="Tutorial 2"
                                            className="w-full h-full rounded-lg shadow-lg"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    {/* Video 3 */}
                                    <div className="aspect-w-16 aspect-h-9">
                                        <iframe
                                            src="https://www.youtube.com/embed/JnoZE51WZg4"
                                            title="Tutorial 3"
                                            className="w-full h-full rounded-lg shadow-lg"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    {/* Video 4 */}
                                    <div className="aspect-w-16 aspect-h-9">
                                        <iframe
                                            src="https://www.youtube.com/embed/k74yjmfFb_A"
                                            title="Tutorial 4"
                                            className="w-full h-full rounded-lg shadow-lg"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    {/* Video 5 */}
                                    <div className="aspect-w-16 aspect-h-9">
                                        <iframe
                                            src="https://www.youtube.com/embed/KUIWRsVZZZA"
                                            title="Tutorial 5"
                                            className="w-full h-full rounded-lg shadow-lg"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    {/* Video 6 */}
                                    <div className="aspect-w-16 aspect-h-9">
                                        <iframe
                                            src="https://www.youtube.com/embed/ZGGufccTLso?si=hMrdVU-tUcFIwgec"
                                            title="Tutorial 6"
                                            className="w-full h-full rounded-lg shadow-lg"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>

                                <div className="text-center mt-12">
                                    <button className="btn btn-primary">
                                        <Link to="/learning">Start Learning Now</Link>
                                    </button>
                                </div>
                            </div>
                        </section>
                    </div>


                  
                
            </section>
        </div>
    );
};

export default Tutorials;