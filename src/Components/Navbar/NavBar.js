import './NavBar.css';
function NavBar(){
    return (
        <nav>
            <ul className="navbar">
                <li class="nav-item"><a href="#home">Home</a></li>
                <li class="nav-item"><a href="#about">About</a></li>
                <li class="nav-item"><a href="#projects">Projects</a></li>
                <li class="nav-item"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;