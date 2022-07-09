import axios from "axios";

class UserService {
  async login(user: any): Promise<any> {
    return await axios.post(
      `${process.env.REACT_APP_API_URL}/user/login`,
      user
    );
  }
}

export default new UserService();
