import { LOCAL_STORAGE_KEYS, severity } from "../../config/constants";
import api from "../../services/api";
import { actions } from "../app/actions";

const login = async (data, dispatch, navigate) => {
  // api.unAuth
  //   .post("beta-users/signin/upcat", data)
  //   .then((res) => {
  //     if (res?.data?.code === "S") {
  //       window.localStorage.setItem(
  //         LOCAL_STORAGE_KEYS.TOKEN,
  //         JSON.stringify(res.data.data.token)
  //       );
  //       window.localStorage.setItem(
  //         LOCAL_STORAGE_KEYS.CURRENT_USER,
  //         JSON.stringify(res.data.data.user)
  //       );
  //       navigate("/dashboard");
  //     } else {
  //       const message = res?.data?.data?.message;
  //       dispatch({
  //         type: actions.SHOW_SNACKBAR,
  //         data: { severity: severity.ERROR, message },
  //       });
  //     }
  //   })
  //   .catch((err) => {
  //     const message = err?.response?.data?.errors[0].message;
  //     dispatch({
  //       type: actions.SHOW_SNACKBAR,
  //       data: { severity: severity.ERROR, message },
  //     });
  //   });
  navigate("/dashboard");
};

const logout = (navigate) => {
  window.localStorage.removeItem(LOCAL_STORAGE_KEYS.TOKEN);
  window.localStorage.removeItem(LOCAL_STORAGE_KEYS.CURRENT_USER);
  navigate("/login");
};

export { login, logout };
