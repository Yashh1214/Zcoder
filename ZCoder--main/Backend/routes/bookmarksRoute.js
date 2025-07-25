// routes/bookmarkRoutes.js
const express = require('express');
const { addBookmark,getBookmarks, deleteBookmark } = require('../controllers/bookmarksController');

const router = express.Router();

router.post('/bookmarks', addBookmark);
router.delete('/bookmarks/:userId/:titleSlug/:id',deleteBookmark);
router.get('/bookmarks/:userId',getBookmarks);
module.exports = router;
