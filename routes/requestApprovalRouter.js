const express = require("express");
const { protect, restrictTo } = require("../controllers/authController");
const { approvedInstallment } = require("../controllers/installmentController");
const { getAllRequestApproval, updateApprovalRequest, createRequestApproval, deleteRequestApproval, uploadTransactionImage, resizeTransactionImage } = require("../controllers/requestApprovalController");






const Router = express.Router();

//Optimize:   ************** Routes ***************


Router.get('/', protect, restrictTo('admin'), getAllRequestApproval);
Router.patch('/:id', protect, restrictTo('admin'), approvedInstallment, updateApprovalRequest);
Router.post('/', uploadTransactionImage, resizeTransactionImage, createRequestApproval);




Router.delete("/:id", deleteRequestApproval)



module.exports = Router;