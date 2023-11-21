import Item from '../Item/Item';
import classes from './ItemList.module.css'
const ItemList = ({productos}) => {
    console.log('ItemList', productos);
  return(
   
    <div className={classes.myflex} >
        { 
           productos.map(prod => {
            return(
            <Item key={prod.id} {...prod}/>
           )
        })
    }
    </div>

    
  )
}

export default ItemList;