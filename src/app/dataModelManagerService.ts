import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataModelManagerService {
  private dataModels = new Map<string, object>();

  registerDataModel(key: string, dataModel: object, overwrite: boolean = true): boolean {
    if (this.dataModels.has(key) && !overwrite) {
      console.warn(`Data model with key '${key}' already exists and overwrite is set to false.`);
      return false;
    }
    this.dataModels.set(key, dataModel);
    return true;
  }

  deregisterDataModel(key: string): boolean {
    if (!this.dataModels.has(key)) {
      console.warn(`Data model with key '${key}' does not exist.`);
      return false;
    }
    this.dataModels.delete(key);
    return true;
  }

  has(key: string): boolean {
    return this.dataModels.has(key);
  }

  get(key: string): object | undefined {
    return this.dataModels.get(key);
  }
}
