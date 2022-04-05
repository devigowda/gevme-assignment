import React, { useState } from "react";
import "./Table.css";
import sort from "./bothsort.jpg";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useDispatch, useSelector } from "react-redux";
import { GetPosts } from "../../store/actions/uaserAction";

export const Table = (props) => {
  const [tableData, setTableData] = useState(props.Users);
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = React.useState(false);
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  const [currentUser, setIsCurrentUser] = React.useState({});
  const posts = useSelector((state) => state.task.Posts);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const toggleProfileDrawer = () => {
    setIsProfileOpen((prevState) => !prevState);
  };

  const setCurrentUser = (user) => {
    setIsCurrentUser(user);
    dispatch(GetPosts(user.id));
  };

  const handleSortingChange = (accessor) => {
    const sortOrder = accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };

  return (
    <div className="tablediv">
      <table>
        <thead>
          <tr>
            <th>
              Name <img src={sort} alt="Sort" onClick={() => handleSortingChange("name")} />
            </th>
            <th>
              User Name <img src={sort} alt="Sort" onClick={() => handleSortingChange("username")} />
            </th>
            <th>
              Email <img src={sort} alt="Sort" onClick={() => handleSortingChange("email")} />
            </th>
            <th>
              Phone <img src={sort} alt="Sort" onClick={() => handleSortingChange("phone")} />
            </th>
            <th>
              Website <img src={sort} alt="Sort" onClick={() => handleSortingChange("website")} />
            </th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>
                  <a
                    onClick={() => {
                      toggleProfileDrawer();
                      setCurrentUser(user);
                    }}>
                    View Profile
                  </a>
                </td>
                <td>
                  <a
                    onClick={() => {
                      toggleDrawer();
                      setCurrentUser(user);
                    }}>
                    View Post
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Drawer open={isOpen} onClose={toggleDrawer} direction="right" className="drawer" size="350px">
        <h2>Post</h2>
        <div style={{ margin: "15px 0px" }}>
          <div className="userAvatar">{currentUser.nameInitials}</div>
          <div className="drawerUserName">
            <h4>{currentUser.username}</h4>
          </div>
        </div>
        {posts.map((post) => {
          return (
            <div key={post.id} className="postdiv">
              <h5>2 Days ago</h5>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          );
        })}
      </Drawer>
      <Drawer open={isProfileOpen} onClose={toggleProfileDrawer} direction="right" className="drawer" size="350px">
        <h2>Profile</h2>
        <div className="profile">
          <div className="profileAvatar">
            <h4>{currentUser.nameInitials}</h4>
          </div>
          <div>
            <h4>{currentUser.username}</h4>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <label for="email">Email:</label>
          <br />
          <input type="email" id="email" name="email" placeholder={currentUser.email} />
          <br />
          <br />
          <label for="address">Address:</label>
          <br />
          <input type="text" id="address" name="address" placeholder={currentUser.address && currentUser.address.street} />
          <br />
          <br />
          <label for="phone">Phone:</label>
          <br />
          <input type="text" id="phone" name="phone" placeholder={currentUser.phone} />
          <br />
          <br />
          <label for="website">Website:</label>
          <br />
          <input type="text" id="website" name="website" placeholder={currentUser.website} />
          <br />
          <br />
          <label for="companyName">Company Name:</label>
          <br />
          <input type="text" id="companyName" name="companyName" placeholder={currentUser.company && currentUser.company.name} />
          <br />
          <br />
        </div>
      </Drawer>
    </div>
  );
};

export default Table;