//triggered kaylee
exports.run = (client, message, args) => {
  console.log(
    `**********Executing kayleetriggered on ${message.guild.name}**********`
  );

  message.channel
    .send(
      "What the fuck did you just fucking say about me, you little bourgeois? I’ll have you know I graduated top of my class in the Soviet Red Army, and I’ve been involved in numerous secret raids on the Imperialists, and I have over 600 confirmed kills. I am trained in People's War, Insurgency, gorilla warfare and Dialectics and I’m the top class warrior in the entire Revolutionary Movement. You are nothing to me but just another class enemy. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that Reactionary Idealist shit to me over the Internet? Think again, Imperialist stooge. As we speak I am contacting my secret network of Communist Party Cells across the world and your IP is being traced right now so you better prepare for the revolution, Reactionary maggot. The revolution that wipes out the pathetic little thing you call your precious petty-bourgeois life. You’re fucking dead, kiddo. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my copy of Capital vol. 1. Not only am I extensively trained in class war, but I have access to the entire arsenal of the People's Army and the Secret Police and I will use it to its full extent to wipe your miserable class off the face of the world, you little bourgeois. If only you could have known what unholy proletarian retribution your little “clever” act of class war was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn’t, you didn’t, and now you’re paying the price, bourgeois scum. I will shit proletarian fury all over you and you will drown in it. You’re fucking dead, petty-bourgeois kid.\nhttps://i.imgur.com/3dADOcN.jpg"
    )
    .catch(console.error);
};
