import User from '../models/User';

class UserService {
  async getUserById(userId: string) {
    return User.findById(userId);
  }

  async updateUser(userId: string, updatedData: any) {
    return User.findByIdAndUpdate(userId, updatedData, { new: true });
  }
}

export default new UserService();
