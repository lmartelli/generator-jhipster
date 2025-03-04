/**
 * Copyright 2013-2023 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see https://www.jhipster.tech/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {
  ApplicationTaskParam,
  BaseApplicationGeneratorDefinition,
  EntitiesTaskParam,
  GenericApplicationDefinition,
} from '../base-application/tasks.mjs';
import { GenericSourceTypeDefinition } from '../base/tasks.mjs';
import { ClientApplication } from './types.mjs';

export { default } from './generator.mjs';
export { files as commonFiles } from './files-common.mjs';

export type ApplicationDefinition = GenericApplicationDefinition<ClientApplication> & GenericSourceTypeDefinition<never>;

type ApplicationAndEntitiesSourceMethodArg = ApplicationTaskParam<ApplicationDefinition> & EntitiesTaskParam<ApplicationDefinition>;

export type SourceType = {
  addEntitiesToClient: (arg1: ApplicationAndEntitiesSourceMethodArg) => void;
};

export type GeneratorDefinition = BaseApplicationGeneratorDefinition<ApplicationDefinition & GenericSourceTypeDefinition<SourceType>>;
