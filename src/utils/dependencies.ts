import { Provider } from '@nestjs/common';
import { AgeService } from './age/age.service';
import { PasswordService } from './bcrypt/bcrypt.service';
import { CodeRandomService } from './code/codeRandom.service';
import { DateService } from './date/date.service';
import { DescriptionService } from './description/description.service';
import { ObjectEntriesService } from './objectEntries/objectEntries.service';
import { RandomTokenService } from './randomToken/randomToken.service';

export const DependenciesInyection: Provider[] = [
  AgeService,
  PasswordService,
  CodeRandomService,
  DateService,
  DescriptionService,
  ObjectEntriesService,
  RandomTokenService,
];
