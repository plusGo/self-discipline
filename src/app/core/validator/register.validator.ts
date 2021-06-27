import {Observable} from 'rxjs';
import {ErrorData} from '@delon/form/src/errors';
import {SFValue} from '@delon/form/src/interface';
import {FormProperty, PropertyGroup} from '@delon/form/src/model/form.property';

export class RegisterValidator {

  static nickNameValidator(value: SFValue, formProperty: FormProperty, form: PropertyGroup): ErrorData[] | Observable<ErrorData[]> {
    return null;
  }
}
