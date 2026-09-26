import { useRoutes } from "react-router-dom";
import { myrout } from "./page/rout/Rout";






function App() {
const allrouts=useRoutes(myrout)


  return allrouts







  
}

export default App;
