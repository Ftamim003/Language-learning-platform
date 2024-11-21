import { useContext } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const Profile = () => {
    const { user } = useContext(AuthContext)
    return (
       
            <div>
                <div>
                <Navbar></Navbar>
                </div>
                <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-10">
      {/* Welcome Section */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-blue-800">
          Welcome, {user.displayName}! 
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          It's great to have you back. Here’s your profile information!
        </p>
      </div>

      {/* Profile Card */}
      <div className="container mx-auto px-6 lg:px-20 max-w-4xl">
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-center">
            <img
              src={user?.photoURL || "https://via.placeholder.com/150"}
              alt="User"
              className="w-32 h-32 rounded-full border-4 border-white mx-auto mb-4 shadow-lg"
            />
            <h2 className="text-3xl font-semibold text-white">{user.displayName}</h2>
            <p className="text-indigo-100">{user.email}</p>
          </div>

          {/* Information Section */}
          <div className="p-6 grid grid-cols-1  gap-6">
            <div className="bg-gray-100 p-4 rounded-lg flex items-center space-x-4">
              <div className="text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a6 6 0 00-6 6v3H3a2 2 0 100 4h14a2 2 0 100-4h-1V8a6 6 0 00-6-6zm3 8H7V8a3 3 0 016 0v2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-700">Name</h3>
                <p className="text-gray-600">{user.displayName}</p>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg flex items-center space-x-4">
              <div className="text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm2 0v6h12V5H4zm6 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-700">Email</h3>
                <p className="text-gray-600">{user.email}</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 text-center py-4">
            <button
              className="btn btn-primary px-6 py-2 text-lg font-semibold rounded-full hover:bg-blue-600 transition-colors duration-300"
              
            >
             
              <Link to="/auth/updateProfile">Update Profile</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
                <div>
                <Footer></Footer>
                </div>
            </div>
        
    );
};

export default Profile;