import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import YouTube from "react-youtube";


const Business = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const animationLR = useAnimation();
  const animationBT = useAnimation();
  const animationRL = useAnimation();
  const animationTB = useAnimation();
  const pathAnimation = useAnimation();
  const videoId = "LuSjb7T08m4b";


  useEffect(() => {
    if (inView) {
      animationLR.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "fade",
          duration: 1,
        },
      });
      animationRL.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "fade",
          duration: 1,
        },
      });
      animationBT.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "ease-out",
          duration: 1,
        },
      });
      animationTB.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "ease-out",
          duration: 1,
        },
      });
      pathAnimation.start({
        opacity: 1,
        pathLength: 1,
        transition: {
          duration: 2,
          ease: "easeInOut",
        },
      });
    }
    if (!inView) {
      animationLR.start({ opacity: 0, x: "-30px" });
      animationBT.start({ opacity: 0, y: "30px" });
      animationTB.start({ opacity: 0, y: "-30px" });
      animationRL.start({ opacity: 0, x: "30px" });
      pathAnimation.start({ opacity: 0, pathLength: 0 });
    }
  }, [inView]);
  return (
    <div
      ref={ref}
      className="w-full h-auto bg-white rounded-tl-[100px] rounded-br-[100px] pt-10 pb-10"
    >
      <div className="relative">
        <div className="pt-12">
          <div className="flex flex-col items-center justify-center text-center">
            <div>
              <div
                data-scroll
                data-scroll-speed="-6"
                data-scroll-direction="horizontal"
                className="pb-2 text-3xl left-[5%]"
              >
                <h2>Our Challenges</h2>
              </div>
              <p className="py-2">
                We are The innovators, this is all the challenges we have worked on during E-Lab term.
              </p>
            </div>
            <div className="grid w-[80%] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6 justify-center items-center">
              <motion.div
                animate={animationLR}
                className="w-[350px] h-[400px] bg-[#F9F9FC] border-2 border-gray-300 rounded-xl shadow-xl flex flex-col justify-center items-center text-center p-4"
              >
                <div className="pb-4">
                
                 <Image
                   src="/assets/challengeOne/one.jpeg"
                   width="200"
                   height="280"
                   alt="THINK TANK"
                   className="relative z-20"
                 />             
                </div>
                <h1 className="pb-4 text-3xl">ALUxpress</h1>
                <p className="pb-6">
                The challenge was designed to help students know their campus.
                </p>
                <button className="pb-2 text-red-600 underline">
                  Read More
                </button>
              </motion.div>
              <motion.div
                animate={animationTB}
                className="w-[350px] h-[400px] bg-[#F9F9FC] border-2 border-gray-300 rounded-xl shadow-xl flex flex-col justify-center items-center text-center p-4"
              >
                <div className="pb-4">
                <YouTube
                className=""
                videoId={videoId}
                opts={{
                  playerVars: {
                    // https://developers.google.com/youtube/player_parameters
                    autoplay: 0,
                  },
                }} />
              
                </div>
                <h1 className="pb-4 text-3xl">Get To Know Me</h1>
                <p className="pb-6">
                  If you want your employees to go further for you today, you
                  need to give them peace of mind for tomorrow...
                </p>
                <button className="pb-2 text-red-600 underline">
                  Read More
                </button>
              </motion.div>
              <motion.div
                animate={animationRL}
                className="w-[350px] h-[400px] bg-[#F9F9FC] border-2 border-gray-300 rounded-xl shadow-xl flex flex-col justify-center items-center text-center p-4"
              >
                <div className="pb-4">
                <YouTube
                className=""
                videoId={videoId}
                opts={{
                  playerVars: {
                    // https://developers.google.com/youtube/player_parameters
                    autoplay: 0,
                  },
                }} />
                </div>
                <h1 className="pb-4 text-3xl">Discover Our Africa</h1>
                <p className="pb-6">
                  At NMG Benefits, we work in partnership with you to enhance
                  and maintain the wellbeing and health of your employees...
                </p>
                <button className="pb-2 text-red-600 underline">
                  Read More
                </button>
              </motion.div>
              <motion.div
                animate={animationLR}
                className="w-[350px] h-[400px] bg-[#F9F9FC] border-2 border-gray-300 rounded-xl shadow-xl flex flex-col justify-center items-center text-center p-4"
              >
                <div className="pb-4">
                 
                </div>
                <h1 className="pb-4 text-3xl">Short-term Insurance</h1>
                <p className="pb-6">
                  Identifying and mitigating risks is a challenging, but
                  important responsibility that...
                </p>
                <button className="pb-2 text-red-600 underline">
                  Read More
                </button>
              </motion.div>
              <motion.div
                animate={animationBT}
                className="w-[350px] h-[400px] bg-[#F9F9FC] border-2 border-gray-300 rounded-xl shadow-xl flex flex-col justify-center items-center text-center p-4"
              >
                <div className="pb-4">
                 
                </div>
                <h1 className="pb-4 text-3xl">Investment Consulting</h1>
                <p className="pb-6">
                  The NMG Investment Consulting team is focused on helping our
                  clients develop global-grade investment solutions...
                </p>
                <button className="pb-2 text-red-600 underline">
                  Read More
                </button>
              </motion.div>
              <motion.div
                animate={animationRL}
                className="w-[350px] h-[400px] bg-[#F9F9FC] border-2 border-gray-300 rounded-xl shadow-xl flex flex-col justify-center items-center text-center p-4"
              >
                <div className="pb-4">
                 
                </div>
                <h1 className="pb-4 text-3xl">Report Analysis</h1>
                <p className="pb-6">
                  When it comes to running a business, there will always be
                  challenges… unless you have the help of people who...
                </p>
                <button className="pb-2 text-red-600 underline">
                  Read More
                </button>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          animate={animationLR}
          className="absolute left-[170px] top-[-45px] md:top-[-45px] md:left-[700px] lg:top-[-45px] lg:left-[700px] z-[99]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="57.753"
            height="68.729"
            viewBox="0 0 57.753 68.729"
          >
            <motion.path
              animate={pathAnimation}
              id="Path_28"
              data-name="Path 28"
              d="M427.716,839.841s-7.06,37.653,34.123,40.006c17.05.974,15.906-8.584,11.461-11.49-8.277-4.022-25.408,2.535-11.461,22.757A34.61,34.61,0,0,0,480.426,903.8"
              transform="translate(-425.11 -837.507)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="4"
            />
          </svg>
        </motion.div>
        <motion.div
          animate={animationBT}
          className="absolute left-[220px] top-[25px] md:top-[25px] md:left-[750px] lg:top-[25px] lg:left-[750px] z-[99]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22.243"
            height="26.833"
            viewBox="0 0 22.243 26.833"
          >
            <path
              id="Path_29"
              data-name="Path 29"
              d="M554.2,163.5s14.357,1.683,14.357-10.24c-.477,11.923,8.476,10.24,8.476,10.24s-8.562-.581-7.608,8C567.99,164.351,554.2,163.5,554.2,163.5Z"
              transform="translate(173.505 -552.196) rotate(90)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
            />
          </svg>
        </motion.div>
        <motion.div
          animate={animationRL}
          className="absolute left-[170px] top-[-55px] md:top-[-55px] md:left-[700px] lg:top-[-55px] lg:left-[700px] z-[99]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="6"
            viewBox="0 0 6 6"
          >
            <circle id="Ellipse_6" data-name="Ellipse 6" cx="3" cy="3" r="3" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default Business;


// import React, { useEffect } from "react";
// import Image from "next/image";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import YouTube from "react-youtube";

// const Business = () => {
//   const { ref, inView } = useInView({ threshold: 0.1 });
//   const animationX = useAnimation();
//   const animationY = useAnimation();
//   const animationZ = useAnimation();
//   const pathAnimation = useAnimation();
//   const videoId = "LuSjb7T08m4b";

//   useEffect(() => {
//     if (inView) {
//       animationX.start({
//         x: 0,
//         opacity: 1,
//         transition: { type: "fade", duration: 1 },
//       });
//       animationY.start({
//         x: 0,
//         opacity: 1,
//         transition: { type: "fade", duration: 1 },
//       });
//       animationZ.start({
//         y: 0,
//         opacity: 1,
//         transition: { type: "ease-out", duration: 1 },
//       });
//       pathAnimation.start({
//         opacity: 1,
//         pathLength: 1,
//         transition: { ease: "easeInOut", duration: 2 },
//       });
//     }
//     if (!inView) {
//       animationX.start({ opacity: 0, x: "-30px" });
//       animationY.start({ opacity: 0, x: "30px" });
//       animationZ.start({ opacity: 0, y: "30px" });
//       pathAnimation.start({ opacity: 0, pathLength: 0 });
//     }
//   }, [inView]);

//   return (
//     <div ref={ref} className="w-full h-screen bg-white">
//       <div className="w-full h-full rounded-tl-[100px] relative bg-[#F9F9FC]">
//         <div className="pt-10">
//           <div className="flex flex-col items-center justify-center gap-4">
//             <div
//               data-scroll
//               data-scroll-speed="-6"
//               data-scroll-direction="horizontal"
//               className="pb-2 text-3xl left-[5%]"
//             >
//               <h2>Challenges</h2>
//             </div>
//             <p className="py-2">
//               The Innovators think tank Challenges 
//             </p>
//           </div>
//           <div className="w-[90%] md:w-[70%] md:mx-auto flex justify-between items-center gap-2 md:gap-4 pt-6">
//             <motion.div
//               animate={animationX}
//               className="bg-white w-[130px] md:w-[300px] h-[350px] rounded-xl shadow-xl shadow-gray-300 flex flex-col justify-center items-center p-4"
//             >
//               <div>
//                 <Image
//                   src="/assets/challengeOne/one.jpeg"
//                   width="408"
//                   height="580"
//                   alt="THINK TANK"
//                   className="relative z-20"
//                 />
//               </div>
//               <div>
//                 <h1 className="pt-6 pb-2 text-sm text-center md:text-xl">
//                   ALUxpress
//                 </h1>
//               </div>
//               <div>
//                 <p className="pb-4 text-sm text-center">
//                   The challenge was designed to help students know their campus.
//                 </p>
//               </div>
//               <div>
//                 <button className="pb-2 text-red-600 underline">
//                   Read More
//                 </button>
//               </div>
//             </motion.div>
//             <motion.div
//               animate={animationZ}
//               className="bg-white w-[130px] md:w-[300px] h-[350px] rounded-xl shadow-xl shadow-gray-300 flex flex-col justify-center items-center p-4"
//             >
//               <YouTube
//                 className="w-20"
//                 videoId={videoId}
//                 opts={{
//                   playerVars: {
//                     // https://developers.google.com/youtube/player_parameters
//                     autoplay: 0,
//                   },
//                 }}
//               />
//               <div>
//                 <h1 className="pt-6 pb-2 text-sm text-center md:text-xl">
//                   Get To know Me
//                 </h1>
//               </div>
//               <div>
//                 <p className="pb-4 text-sm text-center md:text-xl">
//                   Think Tank member shared their mission statement
//                 </p>
//               </div>
//               <div>
//                 <button className="pb-4 text-red-600 underline">
//                   Read More
//                 </button>
//               </div>
//             </motion.div>
//             <motion.div
//               animate={animationY}
//               className="bg-white w-[130px] md:w-[300px] h-[350px] rounded-xl shadow-xl shadow-gray-300 flex flex-col justify-center items-center p-4"
//             >
//                   <YouTube
//                 className="w-20"
//                 videoId={videoId}
//                 opts={{
//                   playerVars: {
//                     // https://developers.google.com/youtube/player_parameters
//                     autoplay: 0,
//                   },
//                 }} />
              
//               <div>
//                 <h1 className="pt-6 pb-2 text-sm text-center md:text-xl">
//                   Discover Our Africa
//                 </h1>
//               </div>
//               <div>
//                 <p className="pb-4 text-sm text-center">
//                   We shared a story of a South Africa hero whose name is
//                 </p>
//               </div>
//               <div>
//                 <button className="pb-2 text-red-600 underline">
//                   Read More
//                 </button>
//               </div>
//             </motion.div>

//             <motion.div
//               animate={animationX}
//               className="bg-white w-[130px] md:w-[300px] h-[350px] rounded-xl shadow-xl shadow-gray-300 flex flex-col justify-center items-center p-4"
//             >
//               <div>
//                 <Image
//                   src="/assets/challengeOne/one.jpeg"
//                   width="408"
//                   height="580"
//                   alt="THINK TANK"
//                   className="relative z-20"
//                 />
//               </div>
//               <div>
//                 <h1 className="pt-6 pb-2 text-sm text-center md:text-xl">
//                   ALUxpress
//                 </h1>
//               </div>
//               <div>
//                 <p className="pb-4 text-sm text-center">
//                   The challenge was designed to help students know their campus.
//                 </p>
//               </div>
//               <div>
//                 <button className="pb-2 text-red-600 underline">
//                   Read More
//                 </button>
//               </div>
//             </motion.div>

//             <motion.div
//               animate={animationX}
//               className="bg-white w-[130px] md:w-[300px] h-[350px] rounded-xl shadow-xl shadow-gray-300 flex flex-col justify-center items-center p-4"
//             >
//               <div>
//                 <Image
//                   src="/assets/challengeOne/one.jpeg"
//                   width="408"
//                   height="580"
//                   alt="THINK TANK"
//                   className="relative z-20"
//                 />
//               </div>
//               <div>
//                 <h1 className="pt-6 pb-2 text-sm text-center md:text-xl">
//                   ALUxpress
//                 </h1>
//               </div>
//               <div>
//                 <p className="pb-4 text-sm text-center">
//                   The challenge was designed to help students know their campus.
//                 </p>
//               </div>
//               <div>
//                 <button className="pb-2 text-red-600 underline">
//                   Read More
//                 </button>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//         <motion.div
//           animate={animationX}
//           className="absolute top-[-40px] left-[180px] md:top[-40px] md:left-[700px] lg:top-[-40px] lg:left-[700px]"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="57.753"
//             height="68.729"
//             viewBox="0 0 57.753 68.729"
//           >
//             <motion.path
//               animate={pathAnimation}
//               id="Path_28"
//               data-name="Path 28"
//               d="M427.716,839.841s-7.06,37.653,34.123,40.006c17.05.974,15.906-8.584,11.461-11.49-8.277-4.022-25.408,2.535-11.461,22.757A34.61,34.61,0,0,0,480.426,903.8"
//               transform="translate(-425.11 -837.507)"
//               fill="none"
//               stroke="#000"
//               stroke-linecap="round"
//               stroke-width="4"
//             />
//           </svg>
//         </motion.div>
//         <motion.div
//           animate={animationZ}
//           className="absolute top-[20px] left-[235px] md:top-[20px] md:left-[755px] lg:top-[20px] lg:left-[755px]"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="22.243"
//             height="26.833"
//             viewBox="0 0 22.243 26.833"
//           >
//             <path
//               id="Path_29"
//               data-name="Path 29"
//               d="M554.2,163.5s14.357,1.683,14.357-10.24c-.477,11.923,8.476,10.24,8.476,10.24s-8.562-.581-7.608,8C567.99,164.351,554.2,163.5,554.2,163.5Z"
//               transform="translate(173.505 -552.196) rotate(90)"
//               fill="none"
//               stroke="#000"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="4"
//             />
//           </svg>
//         </motion.div>
//         <motion.div
//           animate={animationY}
//           className="absolute top-[-50px] left-[180px] md:top-[-50px] md:left-[700px] lg:top-[-50px] lg:left-[700px]"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="6"
//             height="6"
//             viewBox="0 0 6 6"
//           >
//             <circle id="Ellipse_6" data-name="Ellipse 6" cx="3" cy="3" r="3" />
//           </svg>
//         </motion.div>
       
//       </div>
//     </div>
//   );
// };

// export default Business;
