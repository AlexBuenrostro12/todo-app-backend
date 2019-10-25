const bcrypt = require('bcryptjs');

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

        console.log(user);
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
    async updateTicket(parent, args, ctx, info) {
        const updatedTicket = await ctx.db.mutation.updateTicket({
            ...args
        }, info);
        return updatedTicket;
    },
    async deleteTicket(parent, args, ctx, info) {
        const deletedTicket = await ctx.db.mutation.deleteTicket({
            ...args
        }, info);
        return deletedTicket;
    }
};

module.exports = Mutation;