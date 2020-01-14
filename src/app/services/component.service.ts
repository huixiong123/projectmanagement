import { Injectable, ComponentRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ConfirmComponent } from '../modal/confirm/confirm.component';
import { MessageComponent } from '../modal/message/message.component';


@Injectable({
  providedIn: 'root'
})
export class ComponentService {
  private _componentRef: ComponentRef<any>;
  private _container: ViewContainerRef;
  constructor(
    private _resolver: ComponentFactoryResolver
  ) { }

  initContainer(container) {
    this._container = container;
  }

  _createComponent(component, args?: { key: any }) {
    // this._container.clear();
    const factory = this._resolver.resolveComponentFactory(component);
    this._componentRef = this._container.createComponent(factory);
    this._componentRef.instance.close.subscribe((res) => {
      this._destroyComponent();
    });

    if (args) {
      Object.keys(args).map((key) => {
        this._componentRef.instance[key] = args[key];
      });
    }
    // $('body').addClass('overflow_hidden');
    return this._componentRef;
  }

  _destroyComponent() {
    this._container.clear();
    // $('body').removeClass('overflow_hidden');
  }

  close() {
    this._destroyComponent();
  }

  message(args?: any) {
    this._createComponent(MessageComponent, args);
  }

  confirm(callback: any, args?: any) {
    const componentRef = this._createComponent(ConfirmComponent, args);
    componentRef.instance.close.subscribe((res) => {
      res ? callback() : this._destroyComponent();
    });
  }
}
