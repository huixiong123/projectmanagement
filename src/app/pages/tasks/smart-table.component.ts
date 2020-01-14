import { Component } from '@angular/core';
import { SmartTableData } from '../../@core/data/smart-table';
import {LocalDataSource} from 'ng2-smart-table';
import {HttpService} from '../../services/http.service';
import {HttpRouterService} from '../../services/http-router.service';
import {StorageService} from '../../services/storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent {

  settings = {
    // mode: 'external',
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      title: {
        title: 'title',
        type: 'string',
      },
      comment: {
        title: 'comment',
        type: 'string',
      },
      startDate: {
        title: 'Start Time',
        type: 'date',
      },
      expiredDate: {
        title: 'Expired Time',
        type: 'string',
      },
      status: {
        title: 'status',
        type: 'string',
      },
      createTime: {
        title: 'Create Time',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData,
              private httpService: HttpService,
              private httpRouterService: HttpRouterService,
              private storageService: StorageService,
              private router: Router) {
    this.httpService.get(this.httpRouterService.getProjectsURL).subscribe(res => {
     if (!res.resource) {
       // this.error = 'cannot find data';
       return;
     }
     const data = res.resource || [];
     this.source.load(data);
    });
    // const data = this.service.getData();
    // this.source.load(data);
  }

  onEditConfirm(event): void {
    if (window.confirm('Are you sure you want to modify?')) {
      event.confirm.resolve();
      this.httpService.put(this.httpRouterService.updateProjectURL(event.data.id), event.newData).subscribe(res => {
        console.log('update success');
      }, error => {
        console.log('update failed');
      });
    } else {
      event.confirm.reject();
    }
  }

  onAddConfirm(event): void {
    event.confirm.resolve();
    event.newData.userId = '1';
    event.newData.areaId = '1';
    this.httpService.post(this.httpRouterService.createProjectURL, event.newData).subscribe(res => {
      console.log('create success');
    }, error => {
      console.log('create failed');
    });

  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
      this.httpService.delete(this.httpRouterService.deleteProjectURL(event.data.id)).subscribe(res => {
        console.log('update success');
      }, error => {
        console.log('update failed');
      });
    } else {
      event.confirm.reject();
    }
  }
}
