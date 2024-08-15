import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  startPageData: string = '';
  clarifyRequirementsData: any = {
    'funcAnswer0': '',
    'funcAnswer1': '',
    'funcAnswer2': '',
    'funcAnswer3': '',
    'funcAnswer4': '',
    'funcAnswer5': '',
    'funcAnswer6': '',
    'funcAnswer7': '',
    'nonFuncAnswer0': '',
    'nonFuncAnswer1': '',
    'nonFuncAnswer2': '',
    'nonFuncAnswer3': '',
    'nonFuncAnswer4': '',
    'nonFuncAnswer5': '',
    'nonFuncAnswer6': '',
    'nonFuncAnswer7': '',
  }
  capacityEstimationData: any = {
    'dailyUsersAnswer': '',
    'maxConcurrentUsersAnswer': '',
    'readOpsAnswer': '',
    'writeOpsAnswer': '',
    'peakReadOpsAnswer': '',
    'peakWriteOpsAnswer': '',
    'storageTypeAnswer': '',
    'totalAmountStorageAnswer': '',
    'growthRateAnswer': '',
    'includeCacheMemoryAnswer': '',
    'cacheMemorySizeAnswer': '',
    'trafficVolumeAnswer': '',
    'dataTransferSizeAnswer': ''
  };
  highLevelDesignData: any = {
    'imageBase64': '' 
  }
  databaseDesignData: any = {
    'imageBase64': '' 
  }
  designAPIandCommunicatonProtocols: any = {
    'apiRequests': {}
  }
}
