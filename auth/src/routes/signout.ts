import express from 'express';

const router = express.Router();

router.post('/api/users/signout', (req, res) => {
  console.log('Hello signout');
});

export { router as signoutRouter };
