import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const UpdateProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext); // Assuming you have `updateUserProfile` in AuthContext
    const [name, setName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
    const navigate = useNavigate();

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            await updateUserProfile({ displayName: name, photoURL });
            alert("Profile updated successfully!");
            navigate("/profile"); 
        } catch (error) {
            
            alert("Failed to update profile. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-50">
            <div className="card bg-white p-8 shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-4">Update Profile</h2>
                <form onSubmit={handleUpdate} className="space-y-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="url"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                            placeholder="Enter photo URL"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control mt-4">
                        <button className="btn btn-primary hover:bg-blue-600 transition-colors duration-300">
                            Update Information
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;