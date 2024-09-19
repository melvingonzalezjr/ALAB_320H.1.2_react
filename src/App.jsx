import React from "react";
import ReactDOM from "react-dom"
import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";
import "./index.css";
import blogImage1 from './assets/blog-image-1.jpg';
import blogImage2 from './assets/blog-image-2.jpg';


function App() {
  return (
    <div>
      <Header />
      <main>
        <Article
          date="11/12/20"
          title="On the Street in Brooklyn"
          image={blogImage1}
          imageAlt="girl in red dress on the street in Brooklyn"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorem beatae provident enim maiores eligendi sunt libero laudantium inventore aspernatur, sequi soluta neque sit iure optio, nostrum in labore! Corrupti."
        />

        <Article
          date="11/11/20"
          title="Vintage in Vogue"
          image={blogImage2}
          imageAlt="2 women and a man wearing vintage clothing"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque expedita optio perspiciatis nisi vero explicabo laboriosam libero dignissimos est reprehenderit, similique repellendus, id voluptas sapiente quidem! Id similique tempora tempore?"
        />
      </main>
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
