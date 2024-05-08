import { Provider } from '@nestjs/common';
import { AgeService } from './utils/age/age.service';
import { PasswordService } from './utils/bcrypt/bcrypt.service';
import { CodeRandomService } from './utils/code/codeRandom.service';
import { DateService } from './utils/date/date.service';
import { DescriptionService } from './utils/description/description.service';
import { ObjectEntriesService } from './utils/objectEntries/objectEntries.service';
import { RandomTokenService } from './utils/randomToken/randomToken.service';
import { ConstructorNameService } from './utils/constructorName';

/**
 * This module injects the dependencies of the shared
 */
export const DependenciesInyectionShared: Provider[] = [
  DateService,
  AgeService,
  PasswordService,
  CodeRandomService,
  DescriptionService,
  ObjectEntriesService,
  RandomTokenService,
  ConstructorNameService,
];
