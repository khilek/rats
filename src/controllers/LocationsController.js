import { locationsService } from "../services/LocationsService.js";
import { missionsService } from "../services/MissionsService.js";
import BaseController from "../utils/BaseController.js";

export class LocationsController extends BaseController {
constructor(){
super('/api/locations')
this.router
  .get('', this.getLocations)

  .get('/:locationId/missions', this.getLocationsMissions)
  .put('/missions', this.updateMission)
}





async getLocations (request, response, next) {
try {
  const searchQuery = request.query
  const locations = await locationsService.getLocations(searchQuery)
  response.send(locations)
} catch (error) {
  next(error)
}

}




async getLocationsMissions(request, response, next){
  try {
    const locationId = request.params.locationId
    const missions = await missionsService.getLocationsMissions(locationId)
    response.send(missions)
  } catch (error) {
    next(error)
  }
}




async updateMission(request, response, next){
  try {
    const locationId = request.params.locationId
    const updateData = request.body
    const updateMission = await missionsService.updateMission(locationId, updateData)
    response.send(updateMission)
  } catch (error) {
    next(error)
  }
}




}