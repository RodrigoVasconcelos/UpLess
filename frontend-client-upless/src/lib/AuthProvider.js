import React, { Component } from "react";
import auth from "./auth-service";
import material from "./material-service";
const { Consumer, Provider } = React.createContext();




export { Consumer };

export const withAuth = Comp => {
  return class WithAuth extends Component {
    render() {
      return (
        <Consumer>
          {authStore => {
            return (
              <Comp
                login={authStore.login}
                signup={authStore.signup}
                update={authStore.update}
                user={authStore.user}
                logout={authStore.logout}
                isLoggedin={authStore.isLoggedin}
                imageUpload={authStore.imageUpload}
                {...this.props}
              />
            );
          }}
        </Consumer>
      );
    }
  };
};

class AuthProvider extends Component {
  state = {
    isLoggedin: false,
    user: null,
    isLoading: true,
    pictureUrl: "",
  };

  componentDidMount() {
    auth
      .me()
      .then(user => {
        this.setState({
          isLoggedin: true,
          user,
          isLoading: false
        });
      })
      .catch(() => {
        this.setState({
          isLoggedin: false,
          user: null,
          isLoading: false
        });
      });
  }

  signup = user => {
    const { username, password, description, email, pictureUrl } = user;
    auth
      .signup({ username, password, description, email, pictureUrl })
      .then(user => {
        this.setState({
          isLoggedin: true,
          user
        });
      })
      .catch(({ response: { data: error } }) => {
        this.setState({
          message: error.statusMessage
        });
      });
  };

  update = user => {
    const { username, password, description, email, pictureUrl } = user;
    auth
      .update({ username, password, description, email, pictureUrl })
      .then(user => {
        this.setState({
          user
        });
      })
      .catch(({ response: { data: error } }) => {
        this.setState({
          message: error.statusMessage
        });
      });}

  login = user => {
    const { username, password } = user;
    auth
      .login({ username, password })
      .then(user => {
        this.setState({
          isLoggedin: true,
          user
        });
      })
      .catch(() => {});
  };

  logout = () => {
    auth
      .logout()
      .then(() => {
        this.setState({
          isLoggedin: false,
          user: null
        });
      })
      .catch(() => {});
  };

  imageUpload = (file) => {
    return auth.imageUpload(file)
  }

  render() {
    const { isLoading, isLoggedin, user } = this.state;
    return isLoading ? (
      <div>Loading</div>
    ) : (
      <Provider
        value={{
          isLoggedin,
          user,
          login: this.login,
          logout: this.logout,
          signup: this.signup,
          update: this.update,
          imageUpload: this.imageUpload,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export default AuthProvider;
