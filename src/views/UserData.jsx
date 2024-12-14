import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/UserData.css'; // Import the CSS for styling

const UserData = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/user`, {
          params: { email: 'test@example.com' },
        });
        setUser(response.data);
      } catch (err) {
        setError('Failed to fetch user data.');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) return <p>Loading user data...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="user-card">
      <h1 className="user-card__title">User Information</h1>
      {user ? (
        <div className="user-card__content">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Age:</strong> {user.age}</p>
        </div>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
};

export default UserData;
