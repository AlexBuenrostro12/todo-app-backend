const { forwardTo } = require('prisma-binding');
const bcrypt = require('bcryptjs');

const Query = {
    users: forwardTo('db'),
    async signIn(parent, args, ctx, info) {
        console.log('args: ', args);
        const user = await ctx.db.query.user({ ...args });
        if (!user) 
            throw new Error(`No such user for ${ args.email }`)

        const valid = await bcrypt.compare(args.password, user.password)
        if(!valid)
            throw new Error(`Invalid password`)
        console.log('user: ', user);
        return user;
    },
    tickets: forwardTo('db')
};

module.exports = Query;