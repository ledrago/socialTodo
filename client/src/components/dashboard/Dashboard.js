import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentUser } from "../../actions/users";
import Spinner from "../layout/Spinner";

const Dashboard = ({ getCurrentUser, auth: { user, loading } }) => {
  useEffect(() => {
    getCurrentUser();
  }, []);
  return loading && user === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user' />
        Welcome {user && `${user.firstname} ${user.lastname}`}
      </p>
      {user !== null ? (
        <Fragment>has</Fragment>
      ) : (
        <Fragment>
          You have not yet setup a profile, please add some info
          <Link to='/create-profile' className='btn btn-primary my-1'>
            Create
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  users: state.users
});

export default connect(
  mapStateToProps,
  { getCurrentUser }
)(Dashboard);
