import { useEffect, useState } from "react";

export default function RSVP() {
  const [timePassed, setTimePassed] = useState(false);
  const currentDate = new Date();
  const eventDate = new Date("Dec 12 2024 13:00:00");

  useEffect(() => {
    setTimePassed(currentDate > eventDate);
  });
  
  return (
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSdPOLUxfUFCuvzvvaLP3hKfUI-p-UQueTA0_fsiRNO0R3NiDQ/viewform"
      className="px-3 py-2 block bg-darkYellow w-fit rounded-md text-lightYellow m-auto font-darum"
      target="_blank"
    >
      {timePassed ? "This already happened" : "RSVP"}
    </a>
  );
}