import { NavLink } from 'react-router-dom';

export const Dashboard = () => {
    return(
        <nav className="dashboard">
                  <NavLink className="app-name" to="/">
                    <img src="./images/fact-check.png" alt="" />
                    <h1>Fact-Checking Tool</h1>
                    <p>Verify claims to see how true they are</p>
                  </NavLink>
                  <div className="links">
                    <NavLink className="link" to="/workings">
                        <img src="./images/workings.png" alt="" />
                        <h2>How It Works</h2>
                    </NavLink>

                      <NavLink className="link" to="/history">
                        <img src="./images/time.png" alt="" />
                        <h2>Past Claims</h2>
                      </NavLink>        
                  </div>
        </nav>

    )
}