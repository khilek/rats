import { dbContext } from "../db/DbContext.js"


class MissionsService {

async updateMission(missionId, updateData){
  const missionToUpdate = await dbContext.Missions.findById(missionId)

  if (!missionToUpdate) throw new Error (`Not location with id: ${missionId}`)

  missionToUpdate.completed = updateData.true ??  missionToUpdate.completed
  missionToUpdate.completed = true

  await missionToUpdate.save()

  return missionToUpdate
}



async getRatMissions(ratId){
const ratMissions = await dbContext.Missions.find({ratId: ratId}).populate('rat', '-email')
return ratMissions
}

async getLocationsMissions(locationId){
  const missionsLocations = await dbContext.Missions.find({locationId: locationId}).populate('rat', '-name -picture')
  return missionsLocations
}



async getMissions (){
const missions = await dbContext.Missions.find().populate('location').populate('rat', '-name -picture')
return missions

}

async createMission(missionData){
  const mission = await dbContext.Missions.create(missionData)
  await mission.populate('location')
  await mission.populate('rat', '-name -picture')
  return mission
}


}

export const missionsService = new MissionsService()