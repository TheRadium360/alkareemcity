const express = require("express");
const { protect, restrictTo } = require("../controllers/authController");
const { approvedInstallment } = require("../controllers/installmentController");
const { getAllRequestApproval, updateApprovalRequest, createRequestApproval, deleteRequestApproval, uploadTransactionImage, resizeTransactionImage, getSingleRequestApproval }=require( "../controllers/requestApprovalController" );






const Router = express.Router();

//Optimize:   ************** Routes ***************


Router.get('/', getAllRequestApproval);
Router.patch('/:id', protect, restrictTo('admin'), approvedInstallment, updateApprovalRequest);
Router.post( '/', protect, uploadTransactionImage, resizeTransactionImage, createRequestApproval );
// Router.get( '/:id', protect, restrictTo( 'admin' ), getSingleRequestApproval )



Router.delete("/:id", deleteRequestApproval)



module.exports = Router;