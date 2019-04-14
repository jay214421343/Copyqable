exports.run = (client, message, args) => {
  const messagecount = parseInt(args.join(' '));
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 'Moderator'
};

exports.help = {
  name: 'clear'
  category: 'Miscelaneous',
  description: 'clears X amount of messages from a given channel.',
  usage: 'clear <number>'
};
