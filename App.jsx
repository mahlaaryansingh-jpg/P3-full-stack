import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedArticles from "./components/FeaturedArticles";
import FeaturedTutorials from "./components/FeaturedTutorials";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">

      <Header />

      <Hero />

      <main>
        <FeaturedArticles />

        <FeaturedTutorials />
      </main>

      <Subscribe />

      <Footer />

    </div>
  );
}

export default App;