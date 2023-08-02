// ANIMATIONS EXAMPLE 1

// import { useState } from "react";
// import { motion } from "framer-motion";
// import Input from "./Input";
// import { AnimatePresence } from "framer-motion";

// export default function App() {
//   const [x, setX] = useState(0);
//   const [y, setY] = useState(0);
//   const [rotate, setRotate] = useState(0);
//   const [isVisible, setIsVisible] = useState(true)

//   return (
//     <div className="fixed">
//       <div>
//         <AnimatePresence>
//             { isVisible ?
//             <motion.div
//                 className="fixed left-[15rem] w-[200px] h-[200px] m-[2rem] bg-red-500"
//                 initial={{opacity: 0}}
//                 animate={{ x, y, rotate, opacity: [0, 0.7, 0.2, 1]}} // recibe los estados de React. los estados deben llamarse igual a las propiedades de animación que modifican. en este caso, 'x', 'y' y 'rotate'. Al cambiar un estado, modifica solo esa propiedad del objeto 'motion' (animación declarativa)
//                 exit={{ opacity: 0 }}
//                 transition={{ type: "anticipate" }}
//             />
//             : <></>
//             }
//         </AnimatePresence>
//       </div>

//       <div>
//         <Input value={x} set={setX}>
//           x
//         </Input>
//         <Input value={y} set={setY}>
//           y
//         </Input>
//         <Input value={rotate} set={setRotate} min={-180} max={180}>
//           rotate
//         </Input>
//       </div>

//         <div>
//         <button onClick={()=> setIsVisible(!(isVisible))}>Is visible?</button>
//         <h1>{isVisible ? 'true' : 'false'}</h1>
//         </div>
//     </div>
//   );
// }

// ------------------------------------------------
// KEYFRAMES EXAMPLE 2

// import { motion } from "framer-motion";

// export default function App() {
//   return (
//     <motion.div
//       className="fixed left-[15rem] w-[200px] h-[200px] m-[2rem] bg-red-500"
//       animate={{
//         scale: [1, 2, 2, 1, 1], // cada elemento en los arreglos es un paso donde sucede una animación (keyframes). se modifican 5 veces la escala, la rotacion y el radio del borde
//         rotate: [0, 0, 180, 180, 0],
//         borderRadius: ["0%", "0%", "50%", "50%", "0%"]
//       }}
//       transition={{
//         duration: 4,
//         ease: "easeInOut",
//         times: [0, 0.25, 0.5, 0.75, 1], // es un arreglo que divide el tiempo entre cada hit de animación porcentualmente a 1
//         repeat: Infinity,
//       }}
//     />
//   );
// }

// import { motion } from "framer-motion";

// export default function App() {
//   return (<>
//     <motion.div
//     className="fixed left-[15rem] w-[200px] h-[200px] m-[2rem] bg-red-500"
//       /**
//        * Setting the initial keyframe to "null" will use
//        * the current value to allow for interruptable keyframes.
//        */
//       whileHover={{ scale: [null, 1.5, 1.4] }} // null toma el valor actual del objeto como valor inicial de la animación. si null fuera 0, la animación comenzaría con el valor de escala en 0.
//       transition={{ duration: 0.3 }}
//     />
//     <motion.circle cx={500} animate={{ cx: [null, 100] }} />
//     </>
//   );
// }
// -----------------------------------------------
// VARIANTS, PROPAGATION EXAMPLE 3

// import "./styles.css";
// import { useState } from "react";
// import { motion, Variants } from "framer-motion";

// const itemVariants: Variants = {
//   open: {
//     opacity: 1,
//     y: 0,
//     transition: { type: "spring", stiffness: 300, damping: 24 }
//   },
//   closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
// };

// export default function App() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <motion.nav
//       initial={false}
//       animate={isOpen ? "open" : "closed"}
//       className="menu"
//     >
//       <motion.button
//         whileTap={{ scale: 0.97 }}
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         Menu
//         <motion.div
//           variants={{
//             open: { rotate: 180 },
//             closed: { rotate: 0 }
//           }}
//           transition={{ duration: 0.2 }}
//           style={{ originY: 0.55 }}
//         >
//           <svg width="15" height="15" viewBox="0 0 20 20">
//             <path d="M0 7 L 20 7 L 10 16" />
//           </svg>
//         </motion.div>
//       </motion.button>
//       <motion.ul
//         variants={{
//           open: {
//             clipPath: "inset(0% 0% 0% 0% round 10px)",
//             transition: {
//               type: "spring",
//               bounce: 0,
//               duration: 0.7,
//               delayChildren: 0.3,
//               staggerChildren: 0.05
//             }
//           },
//           closed: {
//             clipPath: "inset(10% 50% 90% 50% round 10px)",
//             transition: {
//               type: "spring",
//               bounce: 0,
//               duration: 0.3
//             }
//           }
//         }}
//         style={{ pointerEvents: isOpen ? "auto" : "none" }}
//       >
//         <motion.li variants={itemVariants}>Item 1 </motion.li>
//         <motion.li variants={itemVariants}>Item 2 </motion.li>
//         <motion.li variants={itemVariants}>Item 3 </motion.li>
//         <motion.li variants={itemVariants}>Item 4 </motion.li>
//         <motion.li variants={itemVariants}>Item 5 </motion.li>
//       </motion.ul>
//     </motion.nav>
//   );
// }

// import { motion } from "framer-motion"

// export default function Framer(){
//   const list = {
//     visible: { opacity: 1 },
//     hidden: { opacity: 0 },
//   }
  
//   const item = {
//     visible: { opacity: 1, x: 0 },
//     hidden: { opacity: 0, x: -100 },
//   }
  
//   return (
//     <motion.ul
//       initial="hidden"
//       animate="visible"
//       variants={list}
//     >
//       <motion.li variants={item}>Item 1</motion.li>
//       <motion.li variants={item}>Item 2</motion.li>
//       <motion.li variants={item}>Item 3</motion.li>
//     </motion.ul>
//   )

// }

// import { motion } from "framer-motion"

// export default function Framer(){
//   const items = ['item1', 'item2', 'item3']

//   const variants = {
//     visible: (i: number) => ({
//       opacity: 1,
//       transition: {
//         delay: i * 0.3,
//       },
//     }),
//     hidden: { opacity: 0 },
//   }
  
//   return items.map((item, i) => (
//     <motion.li
//       custom={i}
//       animate="visible"
//       variants={variants}
//     >{item}</motion.li>
//   ))
// }
{/* import { motion } from "framer-motion"
import { useState } from "react"

export default function Animations(){

  const [move, setMove] = useState(false)

  const square= {
    initial: {
      x: 0,
      opacity: 1,
      transition: {duration: 1, type: 'easeOut'}
    },
    move: {
      opacity: 1,
      x: 500,
      backgroundColor: 'blue',
      transition: {duration: 0.3, type: 'spring'}
    }
  }

  return <div className="w-[60%] h-[60%] bg-white p-[5rem]">
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 500 }}
      dragElastic={0.05}
      initial={{opacity: 0}}
      animate={move ? 'move' : 'initial'}
      whileHover={{scale: 1.2, transition: {duration: 0.2}}}
      onClick={()=>setMove(!move)}
      variants={square}
      className="w-[100px] h-[100px] bg-red-500 rounded-xl"/>
  </div>
} 
*/}

// import "./styles.css";
// import { useState } from "react";
// import { initialTabs as tabs } from "./ingredients";
// import { motion, AnimatePresence } from "framer-motion";

// export default function App() {
//   const [selectedTab, setSelectedTab] = useState(tabs[0]);

//   return (
//     <div className="window">
//       <nav>
//         <ul>
//           {tabs.map((item) => (
//             <li
//               key={item.label}
//               className={item === selectedTab ? "selected" : ""}
//               onClick={() => setSelectedTab(item)}
//             >
//               {`${item.icon} ${item.label}`}
//               {item === selectedTab ? (
//                 <motion.div className="underline" />
//               ) : null}
//             </li>
//           ))}
//         </ul>
//       </nav>
//       <main>
//         <AnimatePresence mode='wait'>
//           <motion.div
//             key={selectedTab ? selectedTab.label : "empty"}
//             initial={{ y: 10, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: -10, opacity: 0 }}
//             transition={{ duration: 0.2 }}
//           >
//             {selectedTab ? selectedTab.icon : "😋"}
//           </motion.div>
//         </AnimatePresence>
//       </main>
//     </div>
//   );
// }