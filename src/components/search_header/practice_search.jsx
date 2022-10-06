// import React, { useRef } from "react";
// import styles from "./search_header.module.css";

// const practice_search = ({ onSearch }) => {
//   const inputRef = useRef();
//   const handleSearch = () => {
//     const value = inputRef.current.value;
//     onSearch(value);
//   };

//   const onKeyPress = (event) => {
//     if (event.key === "Enter") {
//       handleSearch();
//     }
//   };

//   const onClick = () => {
//     handleSearch();
//   };

//   return (
//     <header className={styles.header}>
//       <div className={styles.logo}>
//         <img className={styles.img} src="/images/logo.png" alt="logo" />
//         <h1 className={styles.title}>Youtube</h1>
//       </div>

//       <input
//         ref={inputRef}
//         className={styles.input}
//         type="search"
//         placeholder="Search..."
//         onKeyPress={onKeyPress}
//       ></input>
//       <button className={styles.button} type="button" onClick={onClick}>
//         <img
//           className={styles.buttonImg}
//           src="/images/search.png"
//           alt="search"
//         ></img>
//       </button>
//     </header>
//   );
// };
// export default practice_search;
