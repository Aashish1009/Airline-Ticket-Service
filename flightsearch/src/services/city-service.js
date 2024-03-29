const {CityRepository}= require("../repository/index")

class CityService {
    constructor(){
        this.cityRepository = new CityRepository();
    }

    async createCity(data){
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            throw error;
        }
    }

    async deleteCity(data){
        try {
            const city = await this.cityRepository.deleteCity(data);
            return city;
        } catch (error) {
            throw error;
        }
    }

    async updateCity(cityid,data){
        try {
            const city = await this.cityRepository.updateCity(cityid, data)
            return city;
        } catch (error) {
            throw error;
        }
    }

    async getCity(cityid){
        try {
            const city = await this.cityRepository.getCity(cityid)
            return city;
        } catch (error) {
            throw error;
        }
    }

    async getAllCities(filter){
        try {
            const cities = await this.cityRepository.getAllCities({name:filter.name});
            return cities;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CityService;