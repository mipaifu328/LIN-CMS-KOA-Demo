import { LinValidator, Rule } from 'lin-mizar';

class AddContentValidator extends LinValidator {
  constructor () {
    super();
    this.image = new Rule('isNotEmpty', '内容封面不能为空');
    this.type = [
      new Rule('isNotEmpty', '内容类型不能为空'),
      new Rule('isInt', '内容类型必须为数字')
    ];
    this.title = new Rule('isNotEmpty', '内容标题不能为空');
  }
}
class EditConentValidator extends AddContentValidator {
  constructor () {
    super();
    this.id = [
      new Rule('isNotEmpty', '内容id不能为空'),
      new Rule('isInt', '内容类id必须为数字')
    ];
  }
}
class DeleteConentValidator extends LinValidator {
  constructor () {
    super();
    this.id = [
      new Rule('isNotEmpty', '内容id不能为空'),
      new Rule('isInt', '内容类id必须为数字')
    ];
    this.type = [
      new Rule('isNotEmpty', '内容类型不能为空'),
      new Rule('isInt', '内容类型必须为数字')
    ];
  }
}

export { AddContentValidator, EditConentValidator, DeleteConentValidator };
