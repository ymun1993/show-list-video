// import React, { useState } from "react";

// const practice_app = (props) => {
//   const [video, setVideo] = useState([]);
//   const search = (query) => {
//     const requestOptions = {
//       method: "GET",
//       redirect: "follow",
//     };

//     fetch(
//       `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyAF7_xjPbtjIlhooRL6uS1zR3pkrnNSBiw`,
//       requestOptions
//     )
//       .then((response) => response.json())
//       .then(result) => result.items.map(item => ({... item, id: item.id.videoId}))
//       .then((items) => setVideo(items))
//       .catch((error) => console.log("error", error));
//   };
// };

// export default practice_app;
