// // Context.js
// import { createContext } from "react";

// export const profileContext = createContext(null);

// export const ProfileProvider = profileContext.Provider;



// // Parent context
// import { useEffect, useState } from "react";
// import ChildD24A from "./ChildD24A";
// import { ProfileProvider } from "./context/ProfileContext";
// import axios from "axios";

// const ParentD24A = () => {
//   const [products, setProducts] = useState([]);
//   const [uName, setUName] = useState("Satyam");

//   useEffect(() => {
//     axios.get("https://fakestoreapi.com/products").then((data) => {
//       setProducts(data.data);
//     });
//   }, []);

//   return (
//     <ProfileProvider
//       value={{ name: uName, city: "Jabalpur", productList: products }}
//     >
//       <div>
//         <p>I am Parent D24A</p>
//         <input value={uName} onChange={(e) => setUName(e.target.value)} />
//         <ChildD24A />
//       </div>
//     </ProfileProvider>
//   );
// };

// export default ParentD24A;



// // Child COmp
// import SubChildD24B from "./SubChildD24B";

// const ChildD24A = () => {
//   return (
//     <div>
//       <p>I am Child D24A</p>
//       <SubChildD24B />
//     </div>
//   );
// };

// export default ChildD24A;


// // Subchild
// import { useContext } from "react";
// import { profileContext } from "./context/ProfileContext";

// const SubChildD24B = () => {
//   const { name, city, productList } = useContext(profileContext);

//   console.log("productList: ", productList);
//   return (
//     <div>
//       <p>
//         I am SubChildD D24A : {name} {city}
//       </p>
//       <ul>
//         {!productList || productList.length === 0 ? (
//           <p>No Products available</p>
//         ) : (
//           productList.map((item) => {
//             return <li key={item.id}>{item.title}</li>;
//           })
//         )}
//       </ul>
//     </div>
//   );
// };

// export default SubChildD24B;


// export default SubChildD24B;
