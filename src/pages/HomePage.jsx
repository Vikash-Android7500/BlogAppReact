import Header from "../componets/common/Header";
import Blog from "../componets/Blog";
import Footer from "../componets/common/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center">
        <Blog />
      </div>

      <Footer />
    </div>
  );
};
export default HomePage;
