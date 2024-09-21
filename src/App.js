import Headerindex from "./component/Header";
import LendingPage from "./Page";
import Footer from "./component/Footer/index"
function App() {
  return (
    <div className=" from-[#303030] to-[#111316] dark:from-[#F5F5F5] dark:to-[#F8F8FF] bg-gradient-to-t  ">
      <Headerindex />
      <div className="custom-container py-24">
        <LendingPage />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
