import { useState } from "react";
import "./Login.modale.css";
import { BlogPost } from "../Blogpost/Blogpost";

export function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [users, setUsers] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setUsers([...users, formData]);

    setFormData({
      username: "",
      password: "",
    });

    setSubmitted(true);
  };

  return (
    <>
      <div className="login">
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div className="user-login">
              <h6>username</h6>
              <input
                type="text"
                name="username"
                id="user"
                required
                pattern=".{3,}"
                title="You shall not pass! Without a username of at least 3 characters"
                maxLength={10}
                autoComplete="off"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="pass">
              <h6>password</h6>
              <input
                type="password"
                name="password"
                id="pass"
                required
                pattern=".{8,}"
                title="You shall not pass! Without a password of a minimum of 8 characters"
                maxLength={10}
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="submit">
              <input type="submit" value="submit" id="submit" />
            </div>
          </form>
        ) : (
          <div>
            <div className="welcome">
              <h2>Welcome back, {users[users.length - 1].username}!</h2>
              <h3>Have anything on your mind?</h3>
            </div>
            <BlogPost />
          </div>
        )}
      </div>
    </>
  );
}
