const login = (id, password) => {
  return (dispatch) => {
    console.log("login success action");
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: { id, password },
    });
  };
};

const logout = () => {
  return (dispatch) => {
    dispatch({
      type: "LOGOUT_SUCCESS",
    });
  };
};

export const authenticateAction = { login, logout };
