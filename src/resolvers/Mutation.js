const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Mutation = {
    async signUp(parent, args, ctx, info) {
        //lowercase their email
        args.email = args.email.toLowerCase();
        //hash their password
        const password = await bcrypt.hash(args.password, 10);

        const user = await ctx.db.mutation.createUser({
            data: {
                ...args,
                password,
            }
        }, info);
        // Create JWT token for them
        const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
        // We set the jwt as a cookie on the response
        ctx.response.cookie('token', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 365, // one year cookie
        });
        console.log(user);
        // return the user
        return user;
    },
    async createTicket(parent, args, ctx, info) {
        const ticket = await ctx.db.mutation.createTicket({
            data: {
                ...args
            }
        }, info);

        console.log(ticket);
        return ticket;

    },
    async commentTicket(parent, args, ctx, info) {
        const commentedTicket = await ctx.db.mutation.updateTicket({
                ...args
        }, info);

        console.log('commentedTicked: ', commentedTicket);
        return commentedTicket;
    },
    async assignDeveloper(parent, args, ctx, info) {
        const assignedDeveloper = await ctx.db.mutation.updateTicket({
                ...args
        }, info);

        console.log('assignedDeveloper: ', assignedDeveloper);
        return assignedDeveloper;
    },
};

module.exports = Mutation;