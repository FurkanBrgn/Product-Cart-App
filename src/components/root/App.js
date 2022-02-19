import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "../root/Dashboard";
import {Route,Routes} from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";

function App() {
  return (
    <Container>
      <Navi/>
      <Routes>
        <Route path='/' element={<Dashboard/>} exact />
        <Route path='/saveproduct/:productId' element={<AddOrUpdateProduct/>} exact />
        <Route path='/saveproduct' element={<AddOrUpdateProduct/>} exact />
        <Route path='/cart' element={<CartDetail/>} exact />
        <Route path='*' element={<NotFound/>} exact />
      </Routes>
    </Container>
  );
}

export default App;
