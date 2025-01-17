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
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LetModule } from '@rx-angular/template';
import { map, Observable } from 'rxjs';
import { WattSpinnerModule } from '@energinet-datahub/watt';
import { dhMeteringPointIdParam } from '@energinet-datahub/dh/metering-point/routing';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'dh-metering-point-overview',
  styleUrls: ['./dh-metering-point-overview.component.scss'],
  templateUrl: './dh-metering-point-overview.component.html',
})
export class DhMeteringPointOverviewComponent {
  meteringPointId$: Observable<string> = this.route.params.pipe(
    map((params) => params[dhMeteringPointIdParam])
  );

  constructor(private route: ActivatedRoute) {}
}

@NgModule({
  declarations: [DhMeteringPointOverviewComponent],
  imports: [CommonModule, LetModule, WattSpinnerModule],
})
export class DhMeteringPointOverviewScam {}
