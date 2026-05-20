import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { updateProfile, updatePassword } from "firebase/auth";
import { auth } from "../firebase/config";
import "./Profile.css";

export default function Profile() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const [editForm, setEditForm] = useState({
    name: "",
    bio: "",
    profession: "",
    location: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const user = JSON.parse(storedUser);

      setUserData(user);

      setEditForm({
        name: user.name || "",
        bio:
          user.bio ||
          "AI enthusiast passionate about learning and innovation",
        profession: user.profession || "Student",
        location: user.location || "India",
        password: "",
        confirmPassword: "",
      });

      setLoading(false);
    } else {
      alert("⚠️ Please login first!");
      navigate("/login");
    }
  }, [navigate]);

  const handleUpdateProfile = async () => {
    try {
      setLoading(true);

      const currentUser = auth.currentUser;

      if (!currentUser) {
        alert("❌ Please login again.");
        return;
      }

      // Update display name
      if (editForm.name !== userData.name) {
        await updateProfile(currentUser, {
          displayName: editForm.name,
        });
      }

      // Update password
      if (editForm.password) {
        if (editForm.password !== editForm.confirmPassword) {
          alert("❌ Passwords do not match");
          setLoading(false);
          return;
        }

        if (editForm.password.length < 6) {
          alert("❌ Password must be at least 6 characters");
          setLoading(false);
          return;
        }

        await updatePassword(currentUser, editForm.password);
      }

      // Update local storage
      const updatedUser = {
        ...userData,
        name: editForm.name,
        bio: editForm.bio,
        profession: editForm.profession,
        location: editForm.location,
      };

      localStorage.setItem("user", JSON.stringify(updatedUser));

      setUserData(updatedUser);

      setIsEditing(false);

      alert("✅ Profile updated successfully!");
    } catch (error) {
      console.log(error);
      alert(`❌ ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="profile-loading">
        <div className="spinner"></div>
        <p>Loading Profile...</p>
      </div>
    );
  }

  return (
    <div className="profile-page">
      {/* Background Shapes */}
      <div className="bg-shape bg-shape-1"></div>
      <div className="bg-shape bg-shape-2"></div>

      <div className="profile-container">
        {/* Hero Section */}
        <div className="profile-card">
          <div className="profile-banner"></div>

          <div className="profile-content">
            <div className="profile-image-box">
              {userData?.photoURL ? (
                <img
                  src={userData.photoURL}
                  alt="profile"
                  className="profile-image"
                />
              ) : (
                <div className="profile-placeholder">
                  {userData?.name?.charAt(0).toUpperCase()}
                </div>
              )}
            </div>

            <div className="profile-details">
              <h1>{userData?.name}</h1>

              <p>{userData?.bio}</p>

              <div className="profile-tags">
                <span>{userData?.profession}</span>
                <span>{userData?.location}</span>
              </div>

              <button
                className="edit-btn"
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? "✖ Cancel" : "✏ Edit Profile"}
              </button>
            </div>
          </div>
        </div>

        {/* Edit Form */}
        {isEditing && (
          <div className="edit-form-wrapper">
            <div className="edit-card">
              <h2>Edit Profile</h2>

              <div className="form-group">
                <label>Full Name</label>

                <input
                  type="text"
                  value={editForm.name}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      name: e.target.value,
                    })
                  }
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>

                <input
                  type="email"
                  value={userData?.email || ""}
                  disabled
                />
              </div>

              <div className="form-group">
                <label>Bio</label>

                <textarea
                  rows="4"
                  value={editForm.bio}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      bio: e.target.value,
                    })
                  }
                  placeholder="Write something about yourself"
                ></textarea>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Profession</label>

                  <input
                    type="text"
                    value={editForm.profession}
                    onChange={(e) =>
                      setEditForm({
                        ...editForm,
                        profession: e.target.value,
                      })
                    }
                    placeholder="Developer"
                  />
                </div>

                <div className="form-group">
                  <label>Location</label>

                  <input
                    type="text"
                    value={editForm.location}
                    onChange={(e) =>
                      setEditForm({
                        ...editForm,
                        location: e.target.value,
                      })
                    }
                    placeholder="India"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>New Password</label>

                  <input
                    type="password"
                    value={editForm.password}
                    onChange={(e) =>
                      setEditForm({
                        ...editForm,
                        password: e.target.value,
                      })
                    }
                    placeholder="New password"
                  />
                </div>

                <div className="form-group">
                  <label>Confirm Password</label>

                  <input
                    type="password"
                    value={editForm.confirmPassword}
                    onChange={(e) =>
                      setEditForm({
                        ...editForm,
                        confirmPassword: e.target.value,
                      })
                    }
                    placeholder="Confirm password"
                  />
                </div>
              </div>

              <div className="button-group">
                <button
                  className="cancel-btn"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>

                <button
                  className="save-btn"
                  onClick={handleUpdateProfile}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}