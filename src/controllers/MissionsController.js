import { missionsService } from "../services/MissionsService.js";
import BaseController from "../utils/BaseController.js";


export class MissionsController extends BaseController {

constructor (){
super('api/missions')
this.router
  .get('', this.getMissions)


.post('', this.createMission)
.put('/:missionId', this.updateMission)

}



async getMissions(request, response, next) {
  try {
  const searchQuery = request.query
  const missions = await missionsService.getMissions()
  response.send (missions)
  } catch (error){
    next(error)
  }
}


async createMission(request, response, next){
try {
  const missionData = request.body
  const mission = await missionsService.createMission(missionData)
  response.send(mission)
} catch (error) {
  next(error)
}

}



async updateMission(request, response, next){
  try {
    const locationId = request.params.locationId
    const updateData = request.body
    const updatedMission = await missionsService.updateMission(locationId, updateData)
    response.send(updatedMission)
  } catch (error) {
    next(error)
  }
}













}