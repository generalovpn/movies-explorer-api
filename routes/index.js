const router = require('express').Router();
const { login, createUser } = require('../controllers/users');
const NotFoundError = require('../errors/NotFoundError');
const { validationSignup, validationSignin } = require('../utils/validation');
const auth = require('../middlewares/auth');
const userRoutes = require('./users');
const movieRouter = require('./movies');

router.post('/signin', validationSignin, login);
router.post('/signup', validationSignup, createUser);

router.use('/users', auth, userRoutes);
router.use('/movies', auth, movieRouter);

router.use('/*', auth, (req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

module.exports = router;
