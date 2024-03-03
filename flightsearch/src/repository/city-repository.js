const { Op } = require("sequelize");
const {City} = require("../models/index")

class CityRepository{
    async createCity({name}){
        try {
            const city = await City.create({name});
            return city;
        } catch (error) {
            throw error;
        }
    }

    async deleteCity(cityid){
        try {
          await City.destroy({
            where:{
                id:cityid
            }
          }) 
          return true; 
        } catch (error) {
            throw error;
        }
    }

    async updateCity(cityid,data){
        try {
            const city = await City.findByPk(cityid);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            throw error;
        }
    }

    async getCity(cityid){
        try {
            const city = await City.findByPk(cityid);
            return city;
        } catch (error) {
            throw error;
        }
    }

    async getAllCities(filter){
        try {
            if(filter.name){
                const cities = await City.findAll({
                    where:{
                        name:{
                            [Op.startsWith]:filter.name
                        }
                    }
                })
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CityRepository;