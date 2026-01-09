
"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch("https://test-aqi9.onrender.com/set-cookie", {
      credentials: 'include'
    });
  }, []);
  return (
    <div>
      <p>Homw</p>
    </div>
  );
}
