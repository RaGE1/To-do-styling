const router = require('express').Router();
const {getTodos,
    postTodos,
    updateTodos,
    updateStatus,
    deleteTodo,
    signup_post,
    login_post,
    logout_get,} = require('../controllers/todocontrollers');
const {requireAuth} = require('../middleware/authMiddleware');

router.post('/signup',signup_post);
router.post('/login',login_post);

router.get('/' ,requireAuth,getTodos);

router.get('/logout',requireAuth,logout_get)

router.post('/',requireAuth,postTodos);
router.put('/:id',requireAuth,updateTodos);
router.patch('/:id',requireAuth,updateStatus);
router.delete('/:id',requireAuth,deleteTodo);

module.exports = router;