import Slak from "../assets/Img/slack.png";
import Netflix from "../assets/Img/netflix.png";
import FItbit from "../assets/Img/fitbit.png";
import Google from "../assets/Img/google.png";
import Airbnb from "../assets/Img/airbnb.png";
import Uber from "../assets/Img/uber.png";

const PartnaireBrand = () => {
  return (
   
      <div className="container  grid grid-cols-2 lg:grid-cols-6 w-full py-[24px]  lg:gap-32 gap-8   bg-white translate-y-[-300px] lg:translate-y-0">
        <img src={Slak} alt="logoSlak" className="mx-auto" />
        <img src={Netflix} alt="logoNetflix" className="mx-auto" />
        <img src={FItbit} alt="logoFitbit" className="mx-auto" />
        <img src={Google} alt="logoGoogle" className="mx-auto" />
        <img src={Uber} alt="logoUber" className="mx-auto" />
        <img src={Airbnb} alt="logoAirbnb" className="mx-auto" />
      </div>
  );
};

export default PartnaireBrand;
