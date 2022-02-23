const express = require("express");
const router = express.Router();
const flexController = require("../controllers/flexController");



router.post(
    "/",
    flexController.uploadFlexImage,
    flexController.resizeFlexImage,
    flexController.createFlex
);
router.delete('/:id', flexController.deleteFlex)
router.delete('/', flexController.deleteAllFlexes)


module.exports = router;