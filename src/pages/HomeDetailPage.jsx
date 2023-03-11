import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const HomeDetailPage = () => {
  const [house, setHouse] = useState(null);
  const [error, setError] = useState(false);
  const { houseId } = useParams();

  const fetchData = async () => {
    const result = await axios.get(`https://wizard-world-api.herokuapp.com/houses/${houseId}`)
    if (result) {
      setHouse(result.data)
      console.log(result.data)
    } else {
      setError(true)
    };
  };

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <section className="detail_house_container">
      <h1>Detail house</h1>
      {house && 
        <div key={house.id}>
          <h2> {house.name} </h2>
          <p>Founder:{house.founder}</p>
          <p>Colors: {house.houseColours}</p>
          <p>Element: {house.element}</p>
          <p>Traits of students</p> 
          {house.traits.map((trait, i) => {
            return (
              <ul key={i}>
                <li>{trait.name}</li>
              </ul>
            )
          })}
        </div>
      }
      {error && <p>Something went wrong! Couldn't find houses!</p>}
      <Link to="/">Back home</Link>
    </section>
  )
}

export default HomeDetailPage;