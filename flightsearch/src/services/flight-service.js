const {FlightRepository,AirplaneRepository}  = require("../repository/index")
const {comapareTime} = require("../utils/helper")
class FlightService{
   constructor(){
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
   }

   async createFlight(data){
        try {
              if(!comapareTime(data.arrivalTime,data.departureTime)){
                  throw {error:"arrival time cannot be less then departure time"}
              }
            const airplane= await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.CreateFlight({
                ...data,totalSeats:airplane.capacity
            })
            return flight;
        } catch (error) {
           throw error; 
        }
   }

   async getAllFlight(filter){
         try {
            const flight = await this.flightRepository.GetAllFlight(filter);
            return flight;
         } catch (error) {
            throw error;
         }
   }

   async getFlight(flightId) {
      try {
          const flight = await this.flightRepository.GetFlight(flightId);
          return flight;
      } catch (error) {
          console.log("Something went wrong at service layer");
          throw {error};
      }
  }

  async updateFlight(flightId, data) {
      try {
          const response = await this.flightRepository.updateFlights(flightId, data);
          return response;
      } catch (error) {
          console.log("Something went wrong at service layer");
          throw {error};
      }
  }
}

module.exports =FlightService;