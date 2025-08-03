import { TemplateRef, ViewContainerRef } from '@angular/core';
import { UnlessDirective } from './unless.directive';

describe('UnlessDirective', () => {
  it('should create an instance', () => {
    const mockTemplateRef: TemplateRef<any> = {
      createEmbeddedView: () => null
    } as unknown as TemplateRef<any>;
    const mockViewContainer: ViewContainerRef = {} as ViewContainerRef;
    const directive = new UnlessDirective(mockTemplateRef, mockViewContainer);
    expect(directive).toBeTruthy();
  });
});
