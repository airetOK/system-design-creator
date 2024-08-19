import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  GENERATE_PDF_PATH: string = '/generate_pdf';

  startPageData: any = {
    'name': '',
    'language': ''
  };

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
  };

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
  };

  databaseDesignData: any = {
    'imageBase64': ''
  };

  designAPIandCommunicatonProtocols: any = {
    'apiRequests': {}
  };

  deepDiveIntoKeyComponentsData: any = {
    'databaseAnswer': '',
    'webAppServersAnswer': '',
    'loadBalancersAnswer': '',
    'cachingAnswer': '',
    'singlePointsFailureAnswer': '',
    'authenticationAuthorizationAnswer': '',
    'rateLimitingAnswer': ''
  };

  constructor(private client: HttpClient) { }

  sendData() {
    const requestBody = {
      "name": this.startPageData.name,
      "language": this.startPageData.language,
      "clarify_requirements": {
        "func_req_answers": [this.clarifyRequirementsData.funcAnswer0, this.clarifyRequirementsData.funcAnswer1,
        this.clarifyRequirementsData.funcAnswer2, this.clarifyRequirementsData.funcAnswer3,
        this.clarifyRequirementsData.funcAnswer4, this.clarifyRequirementsData.funcAnswer5,
        this.clarifyRequirementsData.funcAnswer6, this.clarifyRequirementsData.funcAnswer7,
        ],
        "nonfunc_req_answers": [this.clarifyRequirementsData.nonFuncAnswer0, this.clarifyRequirementsData.nonFuncAnswer1,
          this.clarifyRequirementsData.nonFuncAnswer2, this.clarifyRequirementsData.nonFuncAnswer3,
          this.clarifyRequirementsData.nonFuncAnswer4, this.clarifyRequirementsData.nonFuncAnswer5,
          this.clarifyRequirementsData.nonFuncAnswer6, this.clarifyRequirementsData.nonFuncAnswer7,
          ]
      },
      "capacity_estimation": {
        "daily_users_count": this.capacityEstimationData.dailyUsersAnswer,
        "max_concurrent_users_count": this.capacityEstimationData.maxConcurrentUsersAnswer,
        "read_ops_count": this.capacityEstimationData.readOpsAnswer,
        "write_ops_count": this.capacityEstimationData.writeOpsAnswer,
        "peak_read_ops_count": this.capacityEstimationData.peakReadOpsAnswer,
        "peak_write_ops_count": this.capacityEstimationData.peakWriteOpsAnswer,
        "storage": this.capacityEstimationData.storageTypeAnswer,
        "total_amount_storage": this.capacityEstimationData.totalAmountStorageAnswer,
        "growth_rate": this.capacityEstimationData.growthRateAnswer,
        "include_cache_memory": this.capacityEstimationData.includeCacheMemoryAnswer,
        "cache_memory_size": this.capacityEstimationData.cacheMemorySizeAnswer,
        "traffic_volume": this.capacityEstimationData.trafficVolumeAnswer,
        "data_transfer_size": this.capacityEstimationData.dataTransferSizeAnswer
      },
      "high_level_design": {
        "image_base64": this.highLevelDesignData.imageBase64
      },
      "database_design": {
        "image_base64": this.databaseDesignData.imageBase64
      },
      "design_api_and_communicaton_protocols": {
        "api_requests": this.designAPIandCommunicatonProtocols.apiRequests
      },
      "deep_dive_into_key_components": {
        "database": this.deepDiveIntoKeyComponentsData.databaseAnswer,
        "web_app_servers": this.deepDiveIntoKeyComponentsData.webAppServersAnswer,
        "load_balancers": this.deepDiveIntoKeyComponentsData.loadBalancersAnswer,
        "caching": this.deepDiveIntoKeyComponentsData.cachingAnswer,
        "single_points_failure": this.deepDiveIntoKeyComponentsData.singlePointsFailureAnswer,
        "authentication_authorization": this.deepDiveIntoKeyComponentsData.authenticationAuthorizationAnswer,
        "rate_limiting": this.deepDiveIntoKeyComponentsData.rateLimitingAnswer
      }
    };
    console.log(requestBody);
    this.client.post(`${environment.apiUrl}${this.GENERATE_PDF_PATH}`, requestBody, {
      "responseType": "blob"
    }).subscribe(response => {
      const file = new Blob([response], { type: 'application/pdf' })
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    });
  }
}
