import TxtHolder from "../Components/TxtHolder.jsx";
import { text } from "../utils/text.js";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col  items-center justify-center mt-[10%] bg-gray-50">
        <div className="w-full items-center flex flex-col justify-center rounded-lg bg-white ">
          <h1 className="text-7xl font-bold text-gray-800 mb-4">{text.name}</h1>

          <p className="text-xl text-gray-600 mb-2">{text.par1}</p>
          <p className="text-xl text-gray-600 mb-2">{text.par2}</p>
          <p className="text-lg font-bold text-gray-600">{text.par3}</p>
        </div>
      </div>
      <TxtHolder />
    </div>
  );
};

export default Home;
