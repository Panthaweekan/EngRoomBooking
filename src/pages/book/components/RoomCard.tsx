import React from "react";

interface RoomCardProps {
  roomName: string;
  capacity: number;
  amenities: string[];
  onBook: () => void;
}

const RoomCard: React.FC<RoomCardProps> = ({
  roomName,
  capacity,
  amenities,
  onBook,
}) => {
  return (
    <div className="room-card">
      <h2>{roomName}</h2>
      <p>Capacity: {capacity}</p>
      <p>Amenities: {amenities.join(", ")}</p>
      <button onClick={onBook}>Book Now</button>
    </div>
  );
};

export default RoomCard;
