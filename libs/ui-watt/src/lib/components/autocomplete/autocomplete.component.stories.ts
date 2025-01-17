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
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { WattAutocompleteComponent } from './autocomplete.component';
import { WattAutocompleteModule } from './autocomplete.module';

export default {
  title: 'Components/Autocomplete',
  component: WattAutocompleteComponent,
  decorators: [
    moduleMetadata({
      imports: [NoopAnimationsModule, WattAutocompleteModule],
    }),
  ],
} as Meta<WattAutocompleteComponent>;

//👇 We create a “template” of how args map to rendering
const Template: Story<WattAutocompleteComponent> = (args) => ({
  props: args,
});

//👇 Each story then reuses that template
export const Autocomplete = Template.bind({});

Autocomplete.args = {
  label: 'Numbers',
  placeholder: 'Pick a number',
  options: ['1', '2', '3'],
};
