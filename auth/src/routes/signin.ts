import express from 'express';

const router = express.Router();

router.post('/api/users/signin', (req, res) => {
  console.log('Hello signin');
});

export { router as signinRouter };
