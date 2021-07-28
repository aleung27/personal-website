import HelmetWrapper from "../components/HelmetWrapper";
import Navbar from "../components/Navbar";

const Index = () => {
  return (
    <div>
      <HelmetWrapper />
      <Navbar />
      <div style={{ height: 1000, paddingTop: "10vh" }}>
        My first React.js page!
      </div>
    </div>
  );
};

export default Index;
