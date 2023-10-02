
const db = require('../database/models')

module.exports={
    list:(req,res)=>{
        db.Movie.findAll()/* select * from movie */
            .then((movies)=>{
                return res.render('moviesList',{
                    movies 
                })
            })
            .catch((error)=> console.log(error))
    },
    detail:(req,res)=>{
        const {id} =req.params;
        db.Movie.findByPk(id)
            .then(movie => {
                return res.render('moviesDetail',{
                    movie
                })
            })
            .catch(error => console.log(error))
    },
    new:(req,res)=>{
        db.Movie.findAll({
            order: [    /* el order recibe un array de array */
                ['release_date','DESC']/* el primer array es la columna que nosotros queremos tomar como referencia */
            ]
        })
            .then(movies =>{
                return res.render('newestMovies',{
                    movies
                })
            })
            .catch(error => console.log(error))
    },
    recomended:(req,res)=>{
        db.Movie.findAll({
            limit:5,
            order:[['rating', 'DESC']]
        })
            .then(movies =>{
                return res.render('recommendedMovies',{
                    movies
                })
            })
            .catch(error => console.log(error))
    }
}