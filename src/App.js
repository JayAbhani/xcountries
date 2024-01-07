import { useEffect, useState } from 'react';

function App() {
  const [countries, setCountries] = useState([]);
  async function fetchData() {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    // console.log(data[0].name.common);
    // console.log(data[0].flags.png);
    setCountries(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

// let containerStyle = {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   flexWrap: "wrap"
// }

// let cardStyle = {
//   width: "200px",
//   border: "1px solid grey",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   padding: "10px",
//   margin: "20px",
//   height: "200px"
// }

// let imageStyle = {
//   height: "100px",
//   width: "100px",
//   marginRight: "10px"
// }

let containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  padding: "20px"
}

let cardStyle = {
  width: "250px",
  border: "1px solid #e1e1e1",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  margin: "20px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease-in-out",
  cursor: "pointer",
  backgroundColor: "#fff"
}

let imageStyle = {
  height: "100px",
  width: "100px",
  borderRadius: "50%",
  marginBottom: "10px",
  objectFit: "cover"
} 

let textStyle = {
  textAlign: "center",
  fontSize: "16px",
  fontWeight: "bold",
  color: "#333"
}


  return (
    <div style={containerStyle}>
      {
        countries.map((item) => {
          return (
            <div style={cardStyle}>
              <img style={imageStyle} src={item.flags.png} alt={item.name.common}/>
              <p style={textStyle}>{item.name.common}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
