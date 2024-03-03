
const {CityService} = require("../services/index")

const cityService = new CityService();

const create = async(req,res) =>{
    try {
        const city = await  cityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:"successfully created city",
            err:{}
        })
    } catch (error) {
       
        return res.status(500).json({
           success:false,
           message:"not able to create city",
           err:error,
           data:{}
        })
    }
}


const destroy = async(req,res) =>{
    try {
        const response = await  cityService.deleteCity(req.params.id);
        return res.status(201).json({
            data:response,
            success:true,
            message:"successfully deleted city",
            err:{}
        })
    } catch (error) {
       
        return res.status(500).json({
           success:false,
           message:"not able to delete city",
           err:error,
           data:{}
        })
    }
}


const get = async(req,res) =>{
    try {
        const response = await  cityService.getCity(req.params.id);
        return res.status(201).json({
            data:response,
            success:true,
            message:"successfully fetched city",
            err:{}
        })
    } catch (error) {
       
        return res.status(500).json({
           success:false,
           message:"not able to fetch a city",
           err:error,
           data:{}
        })
    }
}

const update = async(req,res) =>{
    try {
        const response = await  cityService.updateCity(req.params.id, req.body);
        return res.status(201).json({
            data:response,
            success:true,
            message:"successfully updated city",
            err:{}
        })
    } catch (error) {
       
        return res.status(500).json({
           success:false,
           message:"not able to update a city",
           err:error,
           data:{}
        })
    }
}

const getAll = async(req,res) =>{
    try {
        const cities = await cityService.getAllCities(req.query);
        return res.status(201).json({
            data:cities,
            success:true,
            message:"successfully updated city",
            err:{}
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"not able to fetch all cities",
            err:error,
            data:{}
         })
    }
}

module.exports  = {
    create,
    destroy,
    get,
    update,
    getAll
}

