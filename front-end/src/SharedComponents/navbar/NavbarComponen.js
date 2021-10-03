import React from "react";

function NavbarComponent (props) {
    console.log(props)
    return (
        <nav classname="navbar navbar-expand-lg navbar-light bg-light">
                <div classname="container-fluid">
                    <a classname="navbar-brand" href="#">Navbar</a>
                    <button classname="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span classname="navbar-toggler-icon"></span>
                    </button>
                    <div classname="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div classname="navbar-nav">
                            <a classname="nav-link active" aria-current="page" href="#">Home</a>
                            <a classname="nav-link" href="#">Features</a>
                            <a classname="nav-link" href="#">Pricing</a>
                            <a classname="nav-link disabled">Disabled</a>
                        </div>
                    </div>
                </div>
            </nav>

    )
}

export default NavbarComponent;