import React, { useState, useEffect } from "react";

const Practice4 = () => {
  /*
   * 1. Pull the fetch call out into it's own function fetchCat
   * 2. Call fetchCat on initial page load as done currently
   * 3. Add a timer using useEffect that fetches a new cat every 5 seconds
   * 4. Make sure to cancel the timer when component is unmounted
   */

  const [catImg, setCatImg] = useState(``);

  const fetchCat = () => {
    fetch(`https://aws.random.cat/meow`)
      .then(response => response.json())
      .then(data => setCatImg(data.file))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    fetchCat();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchCat();
    }, 5000);
    return () => clearTimeout(timer);
  });

  return (
    <>
      <h1>Random Cat Photo</h1>
      <img src={catImg} alt="Random Cat Image" width="500" />
      <p>Photo refreshes every five seconds</p>
    </>
  );
};

export default Practice4;
