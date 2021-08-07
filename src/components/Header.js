import Button from './Button'
const Header = ({title, onAdd, showAdd}) => {
   
    return (
        <header className='header'>
            <h1>{title}</h1>
           <Button color ='green' text={showAdd? 'close': 'Add'} onClick = {onAdd} />
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