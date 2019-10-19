let express = require('express');
const uuidv1 = require('uuid/v1');
let _ = require('lodash');
let router = express.Router();

 
/* GET home page. */
// router.get('/', function(req, res, next) {
// er('index', { title: 'Express' });
// });


let arr = []



router.get('/get-user', function(req, res, next) {
  res.send(arr)
});
router.post('/insert-user', function(req, res, next) {
let detail = {
  "id":uuidv1(),
  'name':req.body['name'],
  'email':req.body['email'],
  'number':req.body['number']
}
arr.push(detail)

 res.send(detail)
});
router.delete('/remove-user/:id',function(req,res,next){
 let id = req.params['id']
 let user = _.find(arr, { 'id': id });
 if(user){
  arr.pop(user)
  res.send('Success')
  }
 else{
  res.send('user not found')
 
 }
})



router.put('/update-user/:id',function(req,res,next){
  let id = req.params['id']
  let user = _.find(arr, {'id': id});
  if(user){
    index = _.findIndex(arr, {'id':id});
    let detail = {
      "id":id,
      'name':req.body['name'],
      'email':req.body['email'],
      'number':req.body['number']
    }
    arr.pop(user)
    arr.push(detail)
    
    res.send('Success')
   }
  else{
   res.send('user not found')
  
  }
 })

module.exports = router;
