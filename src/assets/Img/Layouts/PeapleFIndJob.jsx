

// eslint-disable-next-line react/prop-types
const PeapleFIndJob = ({Peaple1 , Peaple2 , Peaple3 , Peaple4}) => {
  return (
    <div className="container absolute w-[118px] h-[63px] lg:w-[286px] lg:h-[125px]  flex flex-col justify-center items-center bg-[#FFF] z-30 top-[300px] right-[1px] rounded-[10px] shadow-md  ">
    <h2 className="text-[6px] lg:text-[16px] font-medium text-[#92AABD] absolute top-[20px] text-start mr-10 translate-y-[-7px]">
      20k+ People Find Job!
    </h2>
    <div className="flex flex-row relative bottom-[5px] items-start mr-[5px] w-fit translate-y-[3px] lg:translate-y-[0px]">
      <div className="w-[23px] h-[23px] lg:w-[50px] lg:h-[50px]  rounded-full absolute lg:right-[55px] right-[30px] border-peaple">
        <img src={Peaple1} alt="imgPeaple" />
      </div>
      <div className="w-[23px] h-[23px] lg:w-[50px] lg:h-[50px]  rounded-full absolute lg:right-[15px] right-[12px]">
        <img src={Peaple2} alt="imgPeaple" />
      </div>
      <div className="w-[23px] h-[23px] lg:w-[50px] lg:h-[50px]  rounded-full absolute lg:right-[-20px] right-[-4px] ">
        <img src={Peaple3} alt="imgPeaple" />
      </div>
      <div className="w-[23px] h-[23px] lg:w-[50px] lg:h-[50px]  rounded-full absolute  lg:right-[-60px] ">
        <img src={Peaple4} alt="imgPeaple" />
      </div>
      <div className="w-[23px] h-[23px] lg:w-[50px] lg:h-[50px] bg-[#FFE7DB] rounded-full absolute right-[-40px] lg:right-[-100px] text-[#3F475C] text-[16px] font-medium flex items-center justify-center cursor-pointer ">
        +
      </div>
    </div>
  </div>
  )
}

export default PeapleFIndJob
