import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { viewClassName } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class ComponentAdderService {

  viewRef: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) { }

  setViewRef(viewRef: ViewContainerRef): void {
    this.viewRef = viewRef;
  }

   addComponent(compToAdd: any): void {

        const factory = this.resolver.resolveComponentFactory(compToAdd);

         console.log(this.viewRef.injector);
         console.log(this.viewRef.parentInjector);

         console.log(this.viewRef.get(1));
        const compRef = factory.create(this.viewRef.parentInjector);

        this.viewRef.insert(compRef.hostView);

        setTimeout(() => this.viewRef.detach() , 5000);

   }


}
