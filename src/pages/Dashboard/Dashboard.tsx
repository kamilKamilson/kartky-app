import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Dashboard = () => {
  // temporary navigate to login page
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/auth/login');
  }, [navigate]);

  return <div>Dashboard</div>;
};

export default Dashboard;
