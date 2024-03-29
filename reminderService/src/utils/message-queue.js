const amqplib = require('amqplib');
const {MESSAGE_BROKER_URL,EXCHANGE_NAME} = require("../config/serverconfig")

const createChannel = async () =>{
     try {
    const connection  = await amqplib.connect(MESSAGE_BROKER_URL);
     const channel = await connection.createChannel();
     await channel.assertExchange(EXCHANGE_NAME,"direct",false);
     return channel;
     } catch (error) {
        throw error;
     }
}

const subscribeMessage =async (channel,service,binding_key)=>{
    const applicationqueue = await channel.assertQueue(QUEUE_NAME);

    channel.bindQueue(applicationqueue.queue,EXCHANGE_NAME,binding_key);

    channel.consume(applicationqueue.queue,msg =>{
        console.log('recieved Data');
        console.log(msg.content.toString());
        channel.ack(msg);
    })
}

const publishmessage = async(channel,binding_key,message) =>{
    try {
        await channel.assertQueue('QUEUE_NAME');
        await channel.publish(EXCHANGE_NAME,binding_key,Buffer.from(message));
    } catch (error) {
       throw error; 
    }
}

module.exports = {
    createChannel,
    subscribeMessage,
    publishmessage
}