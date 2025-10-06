import './App.css'
import CFeild from './Comp/Form/ControlledField/CFeild'
import FormAction from './Comp/Form/FormAction'
import HookForm from './Comp/Form/HookForm/HookForm'
import Uncontrolled from './Comp/Form/UncontrolledF/Uncontrolled'
import FamilyTree from './FamlilyTree/FamilyTree'
import ProductManag from './ProductManag'
// import productManag from './Comp/ProductManagment/productManag'

function App() {

  return (
    <>
      <div>
        <h1>Welcome React Form!</h1>
        {/* <ProductManag></ProductManag> */}
        <FamilyTree></FamilyTree>
      </div>
    </>
  )
}

export default App
