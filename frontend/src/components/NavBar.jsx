function NavBar({ user, displayName, login, signup, Logout, variant}){
    const greeting = user
    ? `Hi, ${displayName || "Love"} 💖`
    : "Happy Valentine's Day Love's💕";
    
    return(
        <div className="nav-container">
            <nav className="navbar">
                <div className="nav-left">{greeting}</div>

                <div className="nav-right">
                {user ? (
                    <button className="nav-btn" onClick={Logout}>Logout</button>
                ) : (
                    <>
                    <button className="nav-btn" onClick={login}>Login</button>
                    <button className="nav-btn outline" onClick={signup}>Sign Up</button>
                    </>
                )}
                </div>
            </nav>
        </div>    
    );
}

export default NavBar;