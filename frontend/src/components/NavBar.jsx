function NavBar({ user, login, signup, Logout}){
    return(
        <nav className="navbar">
            <div className="nav-left"> Happy Valentine's Day Love's💕</div>
                <div className="nav-right">
                    {user ? (
                            <>
                                <span className="nav-user">Hi, {user.email}</span>
                                <button className="nav-btn" onClick={Logout}>Logout</button>
                            </>
                            ) : (
                            <>
                      <button className="nav-btn" onClick={login}>Login</button>
                      <button className="nav-btn outline" onClick={signup}>Sign Up</button>
                      </>
                     )}
            </div>
        </nav>    
    );
}

export default NavBar;