import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Introduction from "./components/Introduction/Introduction";
import Experience from "./components/Experience/Experience";
import Form from "./components/Form/Form";

export default function App() {
  return (
    <div id="container">
      <Navigation />
      <main>
        <Introduction />
        <Experience />
        <Form />
      </main>
      <Footer />
    </div>
  );
}
