const Mutation = {
    async createUser(parent, args, ctx, info) {
        //lowercase their email
        //args.email = args.email.toLowerCase();
        //hash their password
        //const password = await bcrypt.hash(args.password, 10);

        const user = await ctx.db.mutation.createUser({
            data: {
                ...args,
                //password,
                //roles: { set: ['USER'] },
            }
        }, info);
        // Create JWT token for them
        //const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
        // We set the jwt as a cookie on the response
        //ctx.response.cookie('token', token, {
            //httpOnly: true,
            //maxAge: 1000 * 60 * 60 * 24 * 365, // one year cookie
        //});
        console.log(user);
        // return the user
        return user;
    }
};

module.exports = Mutation;