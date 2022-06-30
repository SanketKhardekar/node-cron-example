const cron =require('node-cron');

cron.schedule('*/10 * * * * *', function() {
    console.log('running a task every minute');
},{
    scheduled:true,
    timezone:"America/Los_Angles"
});