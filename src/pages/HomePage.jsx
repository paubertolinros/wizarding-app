import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


const HomePage = () => {
  const [houses, setHouses] = useState(null);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    const result = await axios.get('https://wizard-world-api.herokuapp.com/houses')
    if (result) {
      setHouses(result.data)
    } else {
      setError(true)
    };
  };

  useEffect(() => {
    fetchData();
  }, [])
  
  return (
    <section className="home_page_container">
      <h1>Hogwarts houses</h1>
      {houses && houses.map((house) => {
        return (
          <div key={house.id}>
            <h2> {house.name} </h2>
            <p>{house.founder}</p>
            <Link to={`/${house.id}`}> See More</Link>
          </div>
        )
      })}
      {error && <p>Something went wrong! Couldn't find houses!</p>}
    </section>
  )
}

export default HomePage;