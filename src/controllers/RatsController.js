import { missionsService } from "../services/MissionsService.js"
import { ratsService } from "../services/RatsService.js"
import BaseController from "../utils/BaseController.js"

export class RatsController extends BaseController {
  constructor(){
  super('/api/rats')
  this.router
    .get('', this.getRats)
    .get('/:ratId/missions', this.getRatMissions)
  
  }
  
  
  
  
  
  async getRats (request, response, next) {
  try {
    const searchQuery = request.query
    const rats = await ratsService.getRats(searchQuery)
    response.send(rats)
  } catch (error) {
    next(error)
  }
  
  }
  
  async getRatMissions(request, response, next){
    try {
      const ratId = request.params.ratId
      const missions = await missionsService.getRatMissions(ratId)
      response.send(missions)
    } catch (error) {
      next(error)
    }

  }
  
  
  
  
  
  
  
  
  
  
  
  
  }