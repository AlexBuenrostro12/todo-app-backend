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
    tickets: forwardTo('db'),
    async me(paren, args, ctx, info) {
        const me = await ctx.db.query.user({...args });
        if (!me) 
            throw new Error(`You must need sign in!`)
        return me;
    }
};

module.exports = Query;