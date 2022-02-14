import { useState } from 'react';
import './App.css';
import CardComponent from './components/card-component';
import HeaderComponent from './components/header-component';
import ProfileComponent from './components/profile-component';
import { defaultData } from './utils/utils';

function App() {
  const [beneficiariesArray, setBeneficiariesArray] = useState(defaultData);

  return (
    <>
      <HeaderComponent />
      <ProfileComponent />
      <CardComponent />
    </>
  );
}

export default App;
