// export default function ModeTab({ tab, setCurrentTab, currentTab }: Tab) {
//     return(
//         <div className="text-sm font-medium text-center bg-gray-100 dark:bg-gray-800 rounded-xl">
//         <ul className="flex flex-wrap justify-around -mt-4 items-center shadow-md">
//           {tab.map((item: any, i: number) => (
//             <li className="mr-2" key={i}>
//             <button
//               onClick={() => setCurrentTab(false)}
//               className={`inline-block m-2 py-2 px-4 font-semibold w-32 ${
//                 !currentTab
//                   ? "font-black text-gray-500 border-2 border-gray-500"
//                   : "text-gray-300 border-2 border-transparent"
//               } rounded-xl`}
//             >
//               {item}
//             </button>
//           </li>
//           ))
//           }
//         </ul>
//       </div>
//     )
// }
