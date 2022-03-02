const express=require( "express" );
const { protect, restrictTo }=require( "../controllers/authController" );
const { approvedInstallment }=require( "../controllers/installmentController" );
const { getAllRequestApproval, updateApprovalRequest }=require( "../controllers/requestApprovalController" );






const Router=express.Router();

//Optimize:   ************** Routes ***************


Router.get( '/', protect, restrictTo( 'admin' ), getAllRequestApproval );
Router.patch( '/:id', protect, restrictTo( 'admin' ), approvedInstallment, updateApprovalRequest );





module.exports=Router;