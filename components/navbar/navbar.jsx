import classes from './Navbar.module.css'
const Navbar = () => {
    return (
        <header className={classes.header}>
            <h4 style={{ color: `red`, fontSize: 30}}>Ecommerce Nombre</h4>
            <nav>
                <a className= 'btn btn-primary' >Celulares</a>
                <a>Tablets</a>
                <a>Notebooks</a>
            </nav>
        </header>
    )
}

export default Navbar