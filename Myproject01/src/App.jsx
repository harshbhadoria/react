import React, { useEffect, useState } from 'react';
import './App.css';

const ParkingSlot = ({ slotNumber, isOccupied }) => {
  return (
    <div className={`parking-slot ${isOccupied ? 'occupied' : 'available'}`}>
      <h3>Slot {slotNumber}</h3>
      <p>Status: {isOccupied ? 'Occupied' : 'Available'}</p>
    </div>
  );
};

function App() {
  const [parkingData, setParkingData] = useState({
    slot1: false,
    slot2: false,
    slot3: false,
    slot4: false,
    slot5: false,
  });

  const fetchParkingData = async () => {
    try {
      const response = await fetch('https://api.example.com/parking-status');
      const data = await response.json();
      setParkingData(data);
    } catch (error) {
      console.error('Error fetching parking data:', error);
    }
  };

  useEffect(() => {
    fetchParkingData();
    const interval = setInterval(fetchParkingData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>Parking Lot Status</h1>
      <div className="parking-lot">
        <ParkingSlot slotNumber={1} isOccupied={parkingData.slot1} />
        <ParkingSlot slotNumber={2} isOccupied={parkingData.slot2} />
        <ParkingSlot slotNumber={3} isOccupied={parkingData.slot3} />
        <ParkingSlot slotNumber={4} isOccupied={parkingData.slot4} />
        <ParkingSlot slotNumber={5} isOccupied={parkingData.slot5} />
      </div>
    </div>
  );
}

export default App;
