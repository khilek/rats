import { dbContext } from "../db/DbContext.js"

class RatsService {





  async getRats(searchQuery){
    const locations = await dbContext.Rats.find(searchQuery)
    return locations
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  }
  
  export const ratsService = new RatsService()