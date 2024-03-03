const {FlightService} = require("../services/index")

const flightService = new FlightService();

const create = async(req,res) =>{
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data:flight,
            success:true,
            message:"successfully created flight",
            err:{},
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"not able to create flight",
            err:error,
            data:{}
         })
    }
}

const getAll = async(req,res) =>{
    try {
         const  flight = await flightService.getAllFlight(req.query);
         return res.status(201).json({
            data:flight,
            success:true,
            message:"successfully get all flight",
            err:{},
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"not able to get all flight",
            err:error,
            data:{}
         })
    }
}

const get = async (req, res) => {
    try {
        const response = await flightService.getFlight(req.params.id);
        return res.status(201).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully fetched the flight'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the flight',
            err: error
        });
    }
}

const update = async (req, res) => {
    try {
        const response = await flightService.updateFlight(req.params.id, req.body);
        return res.status(201).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully updated the flight'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the flight',
            err: error
        });
    }
}

module.exports  = {
    create,
    getAll,
    get,
    update
}