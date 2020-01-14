import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpRouterService {
  private ApiUrl = `${environment.baseApiUrl}/api/test/${environment.apiVersion}`;

  constructor() {
  }

  /*login url*/
  getProjectsURL = `${this.ApiUrl}/projects`;
  updateProjectURL = (projectId) => `${this.ApiUrl}/projects/${projectId}`;
  deleteProjectURL = (projectId) => `${this.ApiUrl}/projects/${projectId}`;
  createProjectURL = `${this.ApiUrl}/projects`;
  // logoutURL = `${this.ApiUrl}/logout`;
  // getVehiclePartsURL = `${this.ApiUrl}/vehicle-parts`;
  // uploadFileURL = `${this.ApiUrl}/files`;
  // getWxSdkArgument = `${this.ApiUrl}/reports/weiChatSha`;
  // getOrderDetailsURL = (orderNo) => `${this.ApiUrl}/orders/${orderNo}`;
  // reportFileURL = (fileName) => `${environment.baseApiUrl}/files/${fileName}`;
  // queryCaseNoURL = `${this.ApiUrl}/cases/`;
  // initOrderUR = (caseNo) => `${this.ApiUrl}/cases/` + caseNo + `/orders`;
  // updateOrderURL = (orderNo) => `${this.ApiUrl}/orders/` + orderNo;
  // addOrderDamagePointURL = (orderNo) => `${this.ApiUrl}/orders/` + orderNo + `/damages`;
  // queryUpdateDeleteOrderDamagePointURL = (orderNo, damageId) => `${this.ApiUrl}/orders/` + orderNo + `/damages/` + damageId;
  // createReportForClientProviderURL = (orderNo) => `${this.ApiUrl}/reports/` + orderNo + `/provider-client`;
  // createReportForReceiverProviderURL = (orderNo) => `${this.ApiUrl}/reports/` + orderNo + `/provider-receiver`;
  // downloadReportURL = (fileName) => `${this.ApiUrl}/reports/download/` + fileName;
}
