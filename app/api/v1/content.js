import { LinRouter } from 'lin-mizar';
import { AddContentValidator, EditConentValidator, DeleteConentValidator } from '../../validator/content';
import { ContentService } from '../../service/content';
import { groupRequired } from '../../middleware/jwt';
import { logger } from '../../middleware/logger';
const contentApi = new LinRouter({
  prefix: '/v1/content'
});

// 新增
contentApi.linPost(
  'addContent',
  '/',
  {
    permission: '新增期刊内容',
    module: '内容管理',
    mount: true
  },
  groupRequired,
  logger('{user.username} 新增了期刊'),
  async ctx => {
  // 1. 参数校验
    const v = await new AddContentValidator().validate(ctx);
    // 2. 业务逻辑
    // 3. 插入数据库
    await ContentService.addContent(v.get('body'));
    // 4. 返回成功
    ctx.success({
      message: '期刊内容新增成功！'
    });
  });

// 查询
contentApi.get('/', async ctx => {
  const contentList = await ContentService.getContentList();
  ctx.json(contentList);
});

// 编辑
contentApi.linPut(
  'editContent',
  '/:id',
  {
    permission: '编辑期刊内容',
    module: '内容管理',
    mount: true
  },
  groupRequired,
  logger('{user.username} 编辑了期刊'),
  async ctx => {
    const v = await new EditConentValidator().validate(ctx);
    const id = v.get('path.id');
    const params = v.get('body');
    await ContentService.editContent(id, params);
    ctx.success({
      message: '期刊修改成功！'
    });
  });

// 删除
contentApi.linDelete(
  'delContent',
  '/:id',
  {
    permission: '删除期刊内容',
    module: '内容管理',
    mount: true
  },
  groupRequired,
  logger('{user.username} 删除了期刊'),
  async ctx => {
    const v = await new DeleteConentValidator().validate(ctx);
    const id = v.get('path.id');
    const type = v.get('query.type');
    await ContentService.deleteContent(id, type);
    ctx.success({
      message: '期刊删除成功！'
    });
  });

module.exports = { contentApi };