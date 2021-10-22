/**
 * @license
 * Copyright 2021 Energinet DataHub A/S
 *
 * Licensed under the Apache License, Version 2.0 (the "License2");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { WattShellComponent } from '@energinet-datahub/watt';

import { EttShellComponent, EttShellScam } from './ett-shell.component';

describe(EttShellComponent.name, () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EttShellScam, NoopAnimationsModule, RouterTestingModule],
      // https://github.com/thymikee/jest-preset-angular/issues/83
      providers: [{ provide: MATERIAL_SANITY_CHECKS, useValue: false }],
    }).compileComponents();

    fixture = TestBed.createComponent(EttShellComponent);
  });

  let fixture: ComponentFixture<EttShellComponent>;

  it('displays the Watt shell', () => {
    const wattShell = fixture.debugElement.query(
      By.directive(WattShellComponent)
    );

    expect(wattShell.componentInstance).toBeInstanceOf(WattShellComponent);
  });
});