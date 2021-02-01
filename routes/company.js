const express = require('express');
const router = express.Router();
const User = require('../db/user');
const Sticker = require('../db/sticker');
const Company = require('../db/company');

router.get('/:company', (req, res) => {
  if (req.params.company !== 'canalbarge' && req.params.company !== null) {
    Company.getCompanyUsers(req.params.company).then(user => {
      if (user) {
        delete user.password;
        res.render('dashboard', { 'user' : user, title : 'Eat My Butt' });
        // console.log(user);
      } else {
        resError(res, 404, "No Users");
      }
    });
  } else {
    if (req.params.company == 'canalbarge') {
      Company.getAllUsers().then(user => {
        if (user) {
          delete user.password;
          res.render('dashboard', { 'user' : user, title : 'Eat My Butt' });
        // console.log(user);
        } 
      });
    }
  }});

// router.get('/:id/sticker', (req,res)=>{
//   if (!isNaN(req.params.id)) {
//     Sticker.getByUser(req.params.id).then(stickers => {
//       res.json(stickers);
//     });
//   } else {
//     resError(res, 500, "Invalid ID");
//   }
// })

function resError(res, statusCode, message) {
  res.status(statusCode);
  res.json({message});
}

module.exports = router;
