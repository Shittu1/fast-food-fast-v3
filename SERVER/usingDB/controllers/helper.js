import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const Helper = {
  /** Hash Password */
  hashPassword(password) {
    return bcrypt.hashsync(password, bcrypt.genSaltSync(8));
  },
  /** Compare Passwords */
  comparePassword(hashPassword, password) {
    return bcrypt.compareSync(password, hashPassword);
  },
  /** Valid Email Checker */
  isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  },
  /** Generate Token */
  generateToken(id) {
    const token = jwt.sign({
      userId: id
    },
    process.env.SECRET, { expiresIn: '7d' });
    return token;
  }
};

// eslint-disable-next-line linebreak-style
export default Helper;
