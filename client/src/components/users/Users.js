import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { getUsers } from "../../actions/users";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";

const Users = ({ getUsers, users: { users, loading } }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);
  return loading ? <Spinner /> : <Fragment>Users</Fragment>;
};

Users.propTypes = {
  getUsers: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  users: state.users
});

export default connect(
  mapStateToProps,
  { getUsers }
)(Users);
