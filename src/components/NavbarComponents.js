const NavbarComponents = () => {
  return (
    <div className="top_navbar">
      {/* <div className="hamburger">
              <div className="hamburger__inner">
                <div className="one"></div>
                <div className="two"></div>
                <div className="three"></div>
              </div>
            </div> */}
      <div className="menu">
        <div className="logo">Rajutan Koding</div>
        <div className="right_menu">
          <ul>
            <li>
              <i className="fas fa-user color"></i>
              <div className="profile_dd">
                <div className="dd_item">Profile</div>
                <div className="dd_item">Change Password</div>
                <div className="dd_item">Logout</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponents;
