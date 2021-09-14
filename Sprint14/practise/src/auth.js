class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(cb) {
    this.authenticated = this.handleChange();
    cb();
  }

  logout(cb) {
    this.authenticated = this.handleChange();
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }

  handleChange(e) {
    let value = document.getElementById('protected').value;
      if (value % 2 === 0) {
        return true;
      } else {
        return false;
      }
    }
}

export default new Auth();
