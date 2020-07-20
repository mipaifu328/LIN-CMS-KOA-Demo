import { LinValidator, Rule } from 'lin-mizar';

class AddPersonValidator extends LinValidator {
  constructor () {
    super();
    this.name = new Rule('isNotEmpty', '人物姓名不能为空');
    this.from = new Rule('isNotEmpty', '作品来源不能为空');
  }
}

export { AddPersonValidator };
