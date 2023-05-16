const CardComponents = (props) => {
  return (
    <div className="card-container">
      <span className="pro">PRO</span>
      {/* <img className="round" src="images/users.jpg" alt="user"> */}
      <div className="card-content">
        <h3>{props.title}</h3>
        <h6>India</h6>
        <p>
          {props.category} <br />
          Front-end Developer{" "}
        </p>
        <div className="buttons">
          <button className="primary">Message</button>
          <button className="primary follow">Following</button>
        </div>
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          <li>UI/UX</li>
          <li>Front End Development</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Angular</li>
        </ul>
      </div>
    </div>
  );
};

export default CardComponents;
