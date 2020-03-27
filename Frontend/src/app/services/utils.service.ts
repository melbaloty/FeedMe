import { Injectable } from '@angular/core';
import { PersistenceService, StorageType } from 'angular-persistence';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private presistance: PersistenceService) { }



  insertInCach(key, value) {
    console.log(this.presistance)
    return this.presistance.set(key, value, { type: StorageType.SESSION })
  }

  getFromCache(key) {
    return this.presistance.get(key, StorageType.SESSION)
  }

  clearFromCache(key) {
    this.presistance.remove(key, StorageType.SESSION)
  }

  updateCache(key, value){
    return this.insertInCach(key, value)
  }

  clearAllFromCache(){
    return this.presistance.removeAll(StorageType.SESSION)
  }

}