import { NavLink } from "react-router-dom";

const SidebarComponents = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__inner">
        <div className="profile">
          <div className="img">
            {/* <img src="https://i.imgur.com/Ctwf8HA.png" alt="profile_pic"> */}
          </div>
          <div className="profile_info">
            <p>Welcome</p>
            <p className="profile_name">Alex John</p>
          </div>
        </div>
        <ul>
          <li>
            <NavLink to={"/"}>
              <span className="icon">
                <i className="fas fa-dice-d6"></i>
              </span>
              <span className="title">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/second"}>
              <span className="icon">
                <i className="fab fa-delicious"></i>
              </span>
              <span className="title">Second</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"third"}>
              <span className="icon">
                <i className="fab fa-elementor"></i>
              </span>
              <span className="title">Third</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/list"}>
              <span className="icon">
                <i className="fas fa-chart-pie"></i>
              </span>
              <span className="title">list</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/table"}>
              <span className="icon">
                <i className="fas fa-border-all"></i>
              </span>
              <span className="title">Tables</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarComponents;
