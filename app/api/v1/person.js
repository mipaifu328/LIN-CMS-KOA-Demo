import {LinRouter} from "lin-mizar";
import {AddPersonValidator} from "../../validator/person";
import {PersonDao} from "../../dao/person";

const personApi = new LinRouter({
    prefix: '/v1/person'
})

// 新增
personApi.post('/', async ctx => {
    const v = await new AddPersonValidator().validate(ctx);
    await PersonDao.addPerson(v.get('body'));
    ctx.success({
        message: '新增人物成功！'
    })
})

// 查询
personApi.get('/', async ctx => {
    const page = parseInt( ctx.query.page );
    const rows = parseInt( ctx.query.rows );
    console.log(rows, page)
    const { datas, total } = await PersonDao.getPersons(page, rows);
    ctx.json({
        datas,
        total,
        rows,
        page
    });
});


module.exports = { personApi };