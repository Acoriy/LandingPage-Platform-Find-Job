import HeroImg from "../assets/Img/Hero.png";
import SousHero from "../assets/Img/SousHero.svg";
import SousHeroTran from "../assets/Img/SousHeroTransparent.svg";
import GroupPoint from "../assets/Img/GroupPoints.svg";
import IconYes from "../assets/Img/IconYes.png";
import Peaple1 from "../assets/Img/Ellipse1.png";
import Peaple2 from "../assets/Img/Ellipse2.png";
import Peaple3 from "../assets/Img/Ellipse3.png";
import Peaple4 from "../assets/Img/Ellipse4.png";
import PeapleFIndJob from "../assets/Img/Layouts/PeapleFIndJob";

const Hero = () => {
  return (
    <div className=" w-full bg-BgColor pt-32 lg:pt-0 ">
      <div className="container min-h-screen flex flex-col lg:flex-row items-start lg:items-center justify-between w-full ">
        <div className="w-2/5 flex flex-col gap-3 lg:gap-8 relative">
          <div className="relative w-full">
            <h1 className="sticky text-[30px] lg:text-6xl leading-snug tracking-[0.5px] font-DmSans font-bold text-[#183B56] w-[250px] lg:w-[600px] z-20 ">
              Find Every Job In One Platform
            </h1>
            <div className="absolute w-[55px] lg:w-[110px] h-[13px] lg:h-[33px] bg-[#FDA87C] top-[19px] left-[170px] lg:top-[20px] lg:left-[335px] z-0"></div>
          </div>
          {/* job information */}
          <div className="space-y-8 w-[500px] flex flex-col items-center justify-center">
            <div className="w-full flex flex-row  justify-between max-w-full items-center  bg-[#FFF] p-3   lg:w-[500px] h-[70px] lg:h-[88px] shadow-sm">
              <div className="text-[#bbbdc1] text-16 font-bold">
                Job / Position
              </div>
              <span className="text-[#bbbdc1]"> | </span>
              <div className="text-[#bbbdc1] text-16 font-bold">
                Location
              </div>
              <span className="text-[#91949b]"> | </span>
              <button className=" bg-[#7BC678] text-[#FFF] text-[12px] lg:text-[16px] font-bold w-[101px] h-[46px] lg:h-[64px] lg:w-[139px] rounded-[10px]">
                Search
              </button>
            </div>

            <div className="flex flex-row items-center justify-between h-[25px] space-x-3 w-full">
              <h4 className="text-Primary">Recent Search :</h4>
              <span className="bg-[#E9EDEB] h-[25px] text-[#838A96] p-[3px] rounded-[2px]">
                Design
              </span>
              <span className="bg-[#E9EDEB] h-[25px] text-[#838A96] p-[3px] rounded-[2px]">
                UI/UX
              </span>
              <span className="bg-[#E9EDEB] h-[25px] text-[#838A96] p-[3px] rounded-[2px]">
                Product
              </span>
              <span className="hidden lg:block h-[25px]  bg-[#E9EDEB] text-[#838A96] p-[3px] rounded-[2px]">
                Graphic
              </span>
            </div>
          </div>
        </div>

        {/* Images */}
        <div className="relative w-[375px] h-[348px] lg:w-2/4  flex items-center justify-center  lg:top-0 lg:translate-y-[40px] translate-x-[30px] translate-y-[-400px] ">
          <img
            src={HeroImg}
            alt="HeroImg"
            className=" lg:w-[630px] lg:h-[550px] absolute  z-20 lg:botoom-12"
          />
          <img
            src={SousHero}
            alt="SousHero"
            className="w-[228] h-[228px] lg:w-[400px] lg:h-[349px] absolute  z-10  -bottom-60 right-40 lg:translate-y-[-150px] lg:translate-x-[50px] translate-y-[-270px] translate-x-[80px]"
          />
          <img
            src={SousHeroTran}
            alt="sousherotrans"
            className="w-[246px] h-[246px] lg:w-[380px] lg:h-[393px] absolute  z-0  lg:-bottom-[210px] lg:right-[70px] lg:translate-y-[-105px] lg:translate-x-[-30px] translate-y-[20px]"
          />
          <img
            src={GroupPoint}
            alt="GroupPoint"
            className="w-[51px] h-[90px] lg:h-[150px] lg:w-[75px]  lg:translate-y-[220px] lg:translate-x-[-130px] translate-y-[130px] translate-x-[-61px]"
          />
          <img
            src={IconYes}
            alt="icon"
            className="w-[30px] h-[30px] lg:w-[72px] lg:h-[72px] absolute right-[115px] bottom-[8px] lg:translate-y-[-170px] translate-y-[-190px] translate-x-[50px]"
          />

          {/* Peaple Find Job */}
          <PeapleFIndJob Peaple1={Peaple1} Peaple2={Peaple2} Peaple3={Peaple3} Peaple4={Peaple4}/>
          {/* <div className="absolute w-[286px] h-[125px]  flex flex-col justify-center items-center   bg-[#FFF] z-30 top-[300px] right-[1px] rounded-[10px] shadow-md  ">
            <h2 className="text-[16px] font-medium text-[#92AABD] absolute top-[20px] text-start mr-10">
              20k+ People Find Job!
            </h2>
            <div className="flex flex-row relative bottom-[5px] items-start mr-[5px]">
              <div className="w-[50px] h-[50px]  rounded-full absolute right-[55px] border-peaple">
                <img src={Peaple1} alt="imgPeaple" />
              </div>
              <div className="w-[50px] h-[50px]  rounded-full absolute right-[15px]">
                <img src={Peaple2} alt="imgPeaple" />
              </div>
              <div className="w-[50px] h-[50px]  rounded-full absolute right-[-20px] ">
                <img src={Peaple3} alt="imgPeaple" />
              </div>
              <div className="w-[50px] h-[50px]  rounded-full absolute  right-[-60px]">
                <img src={Peaple4} alt="imgPeaple" />
              </div>
              <div className="w-[50px] h-[50px] bg-[#FFE7DB] rounded-full absolute  right-[-100px] text-[#3F475C] text-[16px] font-medium flex items-center justify-center ">
                +
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
