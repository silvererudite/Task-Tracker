import Button from './Button'
const Header = ({title}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
           <Button color ='green' text='ADD'/>
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