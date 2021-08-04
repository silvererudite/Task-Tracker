import Button from './Button'
const Header = ({title}) => {
    const onClick = ()=>{
        console.log('click')
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
           <Button color ='green' text='ADD' onClick = {onClick} />
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