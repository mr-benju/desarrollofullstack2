var express = require('express');
var router = express.Router();
const dinosaurios = [
  { 
    id: 1,
    name: 'Tyrannosaurus Rex',
    diet: 'Carnivore'
   },    
  {
    id: 2,
    name: 'Triceratops',
    diet: 'Herbivore' 
    },
  { 
    id: 3,
    name: 'Velociraptor',
    diet: 'Carnivore' 
    }];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET all dinosaurs */
router.get('/dinosaurios', (req, res) => {
  res.json(dinosaurios);
});
/* GET dinosaurio por id*/
router.get('/dinosaurios/:id',(req, res) =>{
  const id = parseInt(req.params.id);
  const dino = dinosaurios.find(d=> d.id === id);

  if (dino) {
    res.json(dino);
  } else {
    res.status(404).json({ error: 'Dinosaurio no encontrado'})
  }

  res.json(dinosaurios);
})

module.exports = router;
