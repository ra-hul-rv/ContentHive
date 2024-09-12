import { Box } from "@mui/material"
import { useSelector } from "react-redux"
import Home from "./Components/Home/Home"


function App() {
  const themeMode=useSelector(state=>state.global.themeMode)

  return (
    <Box className={themeMode==='dark'?'dark-mode':'light-mode'} >
 <Home />
    </Box>
  )
}

export default App
