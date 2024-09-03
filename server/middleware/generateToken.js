const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  const payload = {
    user: {
      id: user.id,
      userType: user.userType,
    },
  };

  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.JWT_SECRET, // Ensure JWT_SECRET is set in your environment variables
      { expiresIn: '1h' }, // Set token expiration time
      (err, token) => {
        if (err) {
          reject(new Error('Token generation failed'));
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = generateToken;
