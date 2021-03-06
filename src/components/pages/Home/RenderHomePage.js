import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import NavBar from '../../common/NavBar';

function RenderHomePage(props) {
  const { userInfo, authService } = props;

  return (
    <div>
      <NavBar />
      <h1>Hi {userInfo.name} Welcome to Labs Basic SPA</h1>
      <div>
        <p>
          This is an example of a common example of how we'd like for you to
          approach components.
        </p>

        <p>
          <Link to="/profile-list">Profiles Example</Link>
        </p>
        <p>
          <Link to="/example-list">Example List of Items</Link>
        </p>
        <p>
          <Link to="/datavis">Data Visualizations Example</Link>
        </p>
        <p>
          <Link to="/loading">Loading Page</Link>
        </p>
        <p>
          <Link to="/map">Map Visualizations Example</Link>
        </p>
        <p>
          <Button type="primary" onClick={() => authService.logout()}>
            Logout
          </Button>
        </p>
      </div>
    </div>
  );
}
export default RenderHomePage;
