import Button from './Button'
import { useLocation } from 'react-router'
const Header = ({title, onAdd, showAdd}) => {
   const location = useLocation()
    return (
        <header className='header'>
            <h1>{title}</h1>
           {location.pathname === '/' && (<Button color ='green' text={showAdd? 'close': 'Add'} onClick = {onAdd} />)}
        </header>
    )
}
Header.defaultProps = {
    title: 'task tracker'
}
//CSS in js
// const headingStyle ={
//     color: 'green',
//     backgroundColor: 'black',
// }
export default Header