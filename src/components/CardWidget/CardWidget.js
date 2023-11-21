import { useCart } from '../../context/CartContext'
import {Link} from 'react-router-dom'
import card_widget_icon_pet_stroller from './assets/card_widget_icon_pet_stroller.svg'

const CardWidget = () => {
    
    const { totalQuantity } = useCart()
    console.log('CartWidget '+ totalQuantity)
 return (
   <Link to='/cart'>
    <div className='CartWidget-Contador'>
     <img className="logoCart" src={card_widget_icon_pet_stroller} alt="cart-icon"/>
     <h2>{totalQuantity}</h2>    
     </div>
   </Link>
  


   
 )
}
export default CardWidget