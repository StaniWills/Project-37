import { useNavigate } from 'react-router-dom'
import GoodItem from '../GoodItem/GoodItem'


function GoodsList(props){

    const {goods} = props


    return(
        <div>
           {goods.map(elem => 
            <GoodItem  
                key={elem.id} 
                title={elem.title} 
                id = {elem.id}
                price={elem.price}
                count = {elem.rating.count}
            />    
            )} 
        </div>
    )
}

export default GoodsList