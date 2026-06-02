import React from 'react'
import{useAuthPart} from  '../contexts/AuthContext';
import Button from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const{logout} = useAuthPart();
  const navigatingPart = useNavigate();

  const handlingLogout = () => {
    logout();
    navigatingPart('/login');
  }
  return (
    <>
     <div>Dashboard Page</div>
     <Button onClick={handlingLogout}>Logout</Button>
    </>
   
  )
}

export default Dashboard