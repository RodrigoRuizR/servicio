const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

const juegos =[
    {id: 1, name: 'clash royale', plataforma: 'movil', enroll: true},
    {id: 2, name: 'Lol', plataforma: 'pc', enroll: true},
    {id: 3, name: 'Fortnite', plataforma: 'multiplataforma', enroll: true},
    {id: 4, name: 'Rocket league', plataforma: 'multiplataforma', enroll: true},
    {id: 5, name: 'fall guys', plataforma: 'pc', enroll: true},
    {id: 6, name: 'Warzone', plataforma: 'multiplatadorma', enroll: true},
    {id: 7, name: 'Halo', plataforma: 'consola', enroll: true},
];

app.get('/',(req, res )=> {
    res.send('microservicios activo');
})

app.get('/api/juegos/:id',(req ,res) =>{
    const juegos = juegos.find(c => c.id === parseInt(req.params.id));
    if(!juegos) return res.status(404).send('juego no encontrado');
    else res.json(juegos);
});

app.listen(PORT,()=>console.log(`funcionando en el puerto ${PORT}`));