import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <section className="home_page_container">
      <h1>Sorry, we can't find this route!</h1>
      <Link to="/">Back home</Link>

    </section>
  )
}

export default HomePage;