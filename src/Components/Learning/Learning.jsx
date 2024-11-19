import { NavLink, Outlet, useLoaderData } from "react-router-dom";


const Learning = () => {
    const data = useLoaderData()
    return (
        <div>
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-blue-700">Lets Learn!</h1>
                <p className="text-gray-600 mt-2">
                    Start your journey with our structured lessons and tutorials.
                </p>
            </div>
            <div className=" mx-auto px-6 lg:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
                {
                    data.map((category) => (
                        <NavLink key={category.id} to={`/learning/${category.lesson_no}`} className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition cursor-pointer">
                            <h2 className="text-2xl font-semibold text-blue-600">
                                Lesson {category.lesson_no}
                            </h2>

                        </NavLink>
                    ))
                }
            </div>
            <div className="bg-white py-12">
                <div className="container mx-auto px-6 lg:px-20 text-center">
                    <h2 className="text-3xl font-bold text-blue-700 mb-6">
                        Learn the Alphabet
                    </h2>
                    <div className="aspect-w-16 aspect-h-9 mb-8">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="Learn Alphabet"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <button
                        className="btn btn-primary hover:bg-blue-600 transition-colors duration-300"
                        
                    >
                        View More Tutorials
                    </button>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Learning;