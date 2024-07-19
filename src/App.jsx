
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Card from './Components/Card'
import Navbar from './Components/Navbar'
import { data } from './Data/Data'
import { payArticle } from './redux/userSlice'
import { reset } from './redux/ProductSlice'
import SendMessageButton from './Components/SendMessageButton'

function App() {


  const res = useSelector((state) => state.article.totality)
  const dispatch = useDispatch()




  return (





    <div style={{height:"100vh"}}>

      <Navbar /><div style={{

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>

        <div style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center'
          , alignItems: 'center', height: '90vh', width: '60%',
          overflow: 'auto',
          // padding: '10px',

        }}>
          {data.map(product => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>




      <button
        onClick={() => { dispatch(payArticle(res)), dispatch(reset()) }}
      >
        buy  me
      </button>

      {/* <SendMessageButton/> */}

    </div>


  )
}

export default App