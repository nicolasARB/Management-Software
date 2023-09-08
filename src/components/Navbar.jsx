import { Link, useNavigate } from "react-router-dom"

export default function Navbar() {

    return (
        <nav class="nav flex-row" id="navbar" style={{ backgroundColor: '#FBC05D' }}>
            <Link to="/" class="nav-link active itemsnav" aria-current="page">Clientes</Link>
            <Link to="/Stock" class="nav-link itemsnav itemsnav">Stock</Link>
            <Link to="/Stats" class="nav-link itemsnav itemsnav">Estadisticas</Link>
        </nav>
    )
}