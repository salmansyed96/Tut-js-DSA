// // Context.js
// import { createContext } from "react";

// export const profileContext = createContext(null);

// export const ProfileProvider = profileContext.Provider;



// // Parent context
// import ChildD24A from "./ChildD24A";
// import { ProfileProvider } from "./context/ProfileContext";

// const ParentD24A = () => {
//   return (
//     <ProfileProvider value={{ name: "Satyam", city: "Jabalpur" }}>
//       <div>
//         <p>I am Parent D24A</p>
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
//   const { name, city } = useContext(profileContext);
//   return (
//     <div>
//       <p>
//         I am SubChildD D24A : {name} {city}
//       </p>
//     </div>
//   );
// };

// export default SubChildD24B;
