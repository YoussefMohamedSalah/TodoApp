// import { useState, useEffect } from 'react';

// function Test() {
//   const [apidata, setApiData] = useState([]);

//   const getData = async () => {
//     const check = localStorage.getItem('apidata');

//     if (check) {
//       setApiData(JSON.parse(check));
//     } else {
//       const api = await fetch(
//         `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=25`
//       );
//       const data = await api.json();

//       localStorage.setItem('apidata', JSON.stringify(data.recipes));
//       setApiData(data.recipes);
//     }
//   }; 

//   useEffect(() => {
//     getData();
//   }, []);


//   return (
//     <div className="text-wrapper">
//       {apidata.map((apidata) => {
//         return (
//           <div key={apidata.id}>
//             <h1 className="h11">{apidata.title}</h1>
//             <p className="ppp">{apidata.instructions}</p>
//             <img className="image" src={apidata.image} alt={apidata.title} />
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Test;
