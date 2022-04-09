import { useState } from "react";

function UserSummary(props) {
  const { name, email, location, picture, cell, dob } = props;
  const [showMore, setMore] = useState(false);
  console.log(showMore);
  if (props == null) {
    console.log("there is no user data");
  } else {
    return (
      <div>
        <span>
          {showMore ? (
            <nav>
              <h2>
                Name: {name.title}. {name.first} {name.last}
              </h2>
              <img src={picture.large} alt="picture" />
              <h3>Email: {email}</h3>
              <h3>Cell: {cell}</h3>
              <h3>Age: {dob.age}</h3>
              <p>
                location: {location.city} {location.state} {location.country}
              </p>
            </nav>
          ) : (
            <nav>
              <h2>
                Name: {name.title}. {name.first} {name.last}
              </h2>
              <h3>Email: {email}</h3>
            </nav>
          )}
        </span>

        <button className="btn" onClick={() => setMore(!showMore)}>
          Toggle for More/Less
        </button>
      </div>
    );
  }
}

export default UserSummary;
