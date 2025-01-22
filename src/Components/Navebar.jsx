import { Link } from "react-scroll";
import Logo from "../assets/Logo.svg";
import { useEffect, useRef, useState } from "react";
// import MenuMobil from "../assets/Img/MobileIcon.png";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";

const Navebar = () => {
  const [menu, setMenu] = useState(false);
  const RefHeader = useRef();

  const handleChange = () => {
    setMenu(!menu);
  };

  const handleClose = ()=>{
    setMenu(false)
  }

  useEffect(()=>{
    const HandleScroll = ()=>{
      if(window.scrollY > 100){
        RefHeader.current.style.background = "rgba(255,255,255,0.8)";
        RefHeader.current.style.padding = "5px 0px";
        RefHeader.current.style.boxShadow = "0px 3px 10px rgb(0,0,0,0.24)";
      }else{
        RefHeader.current.style.background = "transparent";
        RefHeader.current.style.padding = "16px 0px";
        RefHeader.current.style.boxShadow ="none"
      }
    }
     window.addEventListener("scroll" , HandleScroll)
  } , [])

  return (
    <div ref={RefHeader} className="bg-BgColor fixed top-0 left-0 w-full z-40 py-[16px]">
      <div  className="container flex flex-row  justify-between items-center  w-full">
        <div>
          <Link className="cursor-pointer w-[77px] lg:w-[120px] h-[39px] lg:h-[56px]">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        {/* navbare */}
        <div className="hidden lg:block">
          <nav className="flex flex-row justify-center items-center gap-8">
            <Link
              spy={true}
              smooth={true}
              duration={300}
              className="cursor-pointer text-[18px] font-medium group relative"
            >
              Catigiroy
              <span className="link-hover"></span>
            </Link>
            <Link
              spy={true}
              smooth={true}
              duration={300}
              className="cursor-pointer text-[18px] font-medium group relative"
            >
              Job
              <span className="link-hover"></span>
            </Link>
            <Link
              spy={true}
              smooth={true}
              duration={300}
              className="cursor-pointer text-[18px] font-medium group relative"
            >
              How it works
              <span className="link-hover"></span>
            </Link>
            <Link
              spy={true}
              smooth={true}
              duration={300}
              className="cursor-pointer text-[18px] font-medium group relative"
            >
              Testimonial
              <span className="link-hover"></span>
            </Link>
          </nav>
        </div>

        {/* buttons */}
        <div className="space-x-8 hidden lg:block">
          <Link
            spy={true}
            smooth={true}
            duration={300}
            className="cursor-pointer text-[18px] font-medium group relative"
          >
            Register
            <span className="link-hover"></span>
          </Link>
          <button className="w-[139px] h-[64px] bg-[#FF8345] text-white rounded-[10px] font-bold text-[16px]">
            Sign In
          </button>
        </div>
        <div className="block lg:hidden cursor-pointer ">
          {menu ? (
            <AiOutlineClose
              size={35}
              className="text-Primary"
              onClick={handleChange}
            />
          ) : (
            // (<span onClick={handleChange}>{MenuMobil}</span>)
            <HiMenuAlt1
              size={35}
              className="text-Primary"
              onClick={handleChange}
            />
          )}
        </div>
      </div>
      {/* Menu Mobile */}
      <div className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden absolute w-full bg-BgColor transition-transform duration-300 ease-in-out`}>
        <nav className="flex flex-col justify-center items-center gap-8 py-16">
          <Link
            spy={true}
            smooth={true}
            duration={300}
            className="cursor-pointer text-[18px] font-medium group relative"
            onClick={handleClose}
          >
            Catigiroy
            <span className="link-hover"></span>
          </Link>
          <Link
            spy={true}
            smooth={true}
            duration={300}
            className="cursor-pointer text-[18px] font-medium group relative" 
            onClick={handleClose}   
          >
            Job
            <span className="link-hover"></span>
          </Link>
          <Link
            spy={true}
            smooth={true}
            duration={300}
            className="cursor-pointer text-[18px] font-medium group relative"
            onClick={handleClose}
          >
            How it works
            <span className="link-hover"></span>
          </Link>
          <Link
            spy={true}
            smooth={true}
            duration={300}
            className="cursor-pointer text-[18px] font-medium group relative"
            onClick={handleClose}
          >
            Testimonial
            <span className="link-hover"></span>
          </Link>
          <Link
            spy={true}
            smooth={true}
            duration={300}
            className="cursor-pointer text-[18px] font-medium group relative"
            onClick={handleClose}
          >
            Register
            <span className="link-hover"></span>
          </Link>
          <button className="w-[139px] h-[50px] bg-[#FF8345] text-white rounded-[10px] font-bold text-[16px]"  onClick={handleClose}>
            Sign In
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navebar;
