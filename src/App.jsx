import './App.css'
// import Box from './components/Box';
import ColorBigBox from './components/ColorBigBox';
function App() {
  const colors = [
    "#FF5722",
    "#E91E63",
    "#9C27B0",
    "#673AB7",
    "#3F51B5",
    "#2196F3",
    "#03A9F4",
    "#00BCD4",
    "#009688",
    "#4CAF50",
    "#8BC34A",
    "#CDDC39",
    "#FFEB3B",
    "#FFC107",
    "#FF9800",
  ];
  return (
    <>
      <ColorBigBox colors={colors}/>
    </>
  )
}

export default App
