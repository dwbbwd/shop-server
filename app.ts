export default app => {
    const ctx = app.createAnonymousContext();
    app.beforeStart(async () => {
        ctx.logger.info('Starting');
    });
}