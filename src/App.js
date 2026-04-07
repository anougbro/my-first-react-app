import React from "react";
import { Navbar, Container, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./MovieList";
import Filter from "./Filter";
import MovieDetail from "./MovieDetail";

function App() {
  return (
    <>
      <div className="App">
        {/* Navbar */}
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">My First React App</Navbar.Brand>
          </Container>
        </Navbar>

        {/* Heading */}
        <h1 style={{ textAlign: "center", margin: "20px 0" }}>
          Welcome to React-Bootstrap!
        </h1>

        {/* Cards */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Card One</Card.Title>
              <Card.Text>This is the first card.</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Card Two</Card.Title>
              <Card.Text>This is the second card.</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Card Three</Card.Title>
              <Card.Text>This is the third card.</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}


function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan.",
      posterURL: "https://image.url/inception.jpg",
      rating: 5,
      trailerLink: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
      title: "Interstellar",
      description: "Exploring space and time.",
      posterURL: "https://image.url/interstellar.jpg",
      rating: 4,
      trailerLink: "https://www.youtube.com/embed/zSWdZVtXT7E"
    }
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState(0);

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= rateFilter
  );

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>🎥 My Movie App</h1>
              <Filter setTitleFilter={setTitleFilter} setRateFilter={setRateFilter} />
              <MovieList movies={filteredMovies} />
            </div>
          }
        />
        <Route path="/movie/:title" element={<MovieDetail movies={movies} />} />
      </Routes>
    </Router>
  );
}

export default App;
