const { forwardTo } = require('prisma-binding');

const Query = {
    users: forwardTo('db'),
    async signIn(parent, args, ctx, info) {
        console.log('args: ', args);
        const user = await ctx.db.query.user({ ...args });
        console.log('user: ', user);
        return user;
    },
    tickets: forwardTo('db')
};

module.exports = Query;