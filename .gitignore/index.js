const Discord = require("discord.js");
const YTDL = require("ytdl-core");

const TOKEN = "NDc4MTc1Mjk4MzkxOTAwMTYw.DlG4EQ.FwCR3OTLRznECpsLBJTt03CCeNQ";
const PREFIX = "'";
let cooldown = new Set();

function generateHex() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function play(connection, message){
    var server =servers[message.guild.id];

    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

    server.queue.shift();

    server.dispatcher.on("end", function (){
        if (server.queue[0]) play(connection, message);
        else connection.disconnect();
    });
}

var bot = new Discord.Client();

var servers = {};

bot.on("ready", function (){
	let cooldown = new Set();
	let cdseconds = 5;
    bot.user.setAvatar("./avatar.png").catch(console.error)
    bot.user.setStatus("Online")
    bot.user.setGame("SenileMC | 'help | Welcome ! | Bot by PotDeItalie | v.1.0.0")
    bot.user.setGame("SenileMC | 'help | Welcome ! | Bot by PotDeItalie | v.1.0.0")
})

bot.on("guildMemberAdd", function(member){

    member.addRole(member.guild.roles.find("name", "Joueur"));
})

bot.on("message", function(message){  
	let cont = message.content.slice(PREFIX.length).split("https://www.twitch.tv/twitch");
	let arg = cont.slice(1);

	    if (cooldown.has(message.author.id)) {
            message.channel.send("Merci d'attendre 5 secondes avant de réecrire. - " + message.author);
    } else {
		if(!message.member.hasPermission("ADMINISTRATOR")){
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 5000);
		}
    }
    if (message.content === "Bonjour") {
        message.delete();
        message.reply ("bonjour !")
        
		
    }
    if (message.content === "fuck") {
        message.delete();
        message.reply ("merci de ne pas utiliser de gros mots !")
        
		
    }
    if (message.content === "fdp") {
        message.delete();
        message.reply ("merci de ne pas utiliser de gros mots !")
       	
    }
    if (message.content === "pute") {
        message.delete();
        message.reply ("merci de ne pas utiliser de gros mots !")
        
		
	}
    if (message.content === "con") {
        message.delete();
        message.reply ("merci de ne pas utiliser de gros mots !")
       
		
	}
    if (message.content === "connard") {
        message.delete();
        message.reply ("merci de ne pas utiliser de gros mots !")
        
		
    }
    if (message.content === "nigga") {
        message.delete();
        message.reply ("merci de ne pas utiliser de gros mots !")
        
		
		}
    if (message.content === "fuck") {
        message.delete();
        message.reply ("merci de ne pas utiliser de gros mots !")
        
		
    }
    if (message.content === "tg") {
        message.delete();
        message.reply ("merci de ne pas utiliser de gros mots !")
		
    }
    if (message.content === "ta gueule") {
        message.delete();
        message.reply ("merci de ne pas utiliser de gros mots !")
		
    }
    if (message.content === "fils de pute") {
        message.delete();
        message.reply ("merci de ne pas utiliser de gros mots !")
        
		
    }
    if (message.content === "bouffon") {
        message.delete();
        message.reply ("merci de ne pas utiliser de gros mots !")
    }
    if (message.content === "nique ta mère") {
        message.delete();
        message.reply ("merci de ne pas utiliser de gros mots !")
		
    }
    if (message.content === "ntm") {
        message.delete();
        message.reply ("merci de ne pas utiliser de gros mots !")
        
    }
    if (message.content === "nique ta mere") {
        message.delete();
        message.reply ("merci de ne pas utiliser de gros mots !")
        
		
    }
    if (message.content === "bonjour") {
        message.delete();
        message.reply ("bonjour !")
        
		
    }
    if (message.content === "Bonsoir") {
        message.delete();
        message.reply ("bonsoir !")
        
        		
    }
    if (message.content === "bonsoir") {
        message.delete();
        message.reply ("bonsoir !")
        
		
    }
    if (message.content === "Coucou") {
        message.delete();
         message.reply ("coucou !")
        
		 
    }
    if (message.content === "coucou") {
        message.delete();
        message.reply ("coucou !")
        
		
    }
    if (message.content === "cc") {
        message.delete();
        message.reply ("coucou !")
        
		
    }
   if (message.content === "salut") {
        message.delete();
        message.reply ("salutations !")
        
		
    }
    if (message.content === "Salut") {
        message.delete();
        message.reply ("salutations !")
        
		
   }

    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()){
        case "ip":
			message.delete();
            message.reply("l'ip du serveur est : **play.SenileMC.eu**");
        
            break;
        case "ts":
			message.delete();
            message.reply("l'ip du TeamSpeak est : **ts.SenileMC.eu**");
			
        
            break;
		case "twitter":
			message.delete();
			message.reply("le lien du Twitter est : **https://twitter.com/SenileMC**");       

            break;
        case "invite":
			message.delete();
            message.reply("le lien d'invitation du discord est : **https://discord.gg/K4Hgty3**");

			break;
        case "help":
			message.delete();
            var embed = new Discord.RichEmbed()
                .setColor("#4075A4")
				.setTitle("**Serveur | SenileMC™**")
				.setTitle("Liste des commandes :")
                .addField("'ip :", "Avoir L'ip de nos serveur.")
                .addField("'ts: ", "Avoir L'ip de notre TeamSpeak")
				.addField("'twitter:", "Avoir le Twitter du serveur")
				.addField("'invite:", "Avoir le lien d'invitation du serveur discord.")
				.addField("Developper avec <3 par PotDeItalie")
                .setThumbnail(message.author.avatarURL)
				message.channel.sendEmbed(embed)
			
        
            break;
        case "mute":
			message.delete();
            if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("tu n'as pas les permissions de mute un utilisateur !");

                let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
                if(!toMute) return message.reply("merci d'entrer un utilisateur !");
                if(toMute.roles.has(toMute.guild.roles.find("name", "Mute"))) return message.reply('cet utilisateur est déjà muté !');
                if (!toMute.addRole(toMute.guild.roles.find("name", "Mute")));
                message.reply("vous avez mute " + toMute);
				
        
        break;
        case "unmute":
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("tu n'as pas les permissions de unmute un utilisateur !");

            let toUnMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
            if(!toUnMute) return message.reply("merci d'entrer un utilisateur !");
            if (!toUnMute.removeRole(toUnMute.guild.roles.find("name", "Mute")));
            message.reply("vous avez unmute " + toUnMute + " !")
			
        
        break;
        case "ban":
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("tu n'as pas les permissions de ban un utilisateur !");

                let toBan = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
                if(!toBan) return message.reply("merci d'entrer un utilisateur !");
                !toBan.ban(toBan);
                message.reply("vous avez ban " + toBan + " !");
				
        break;
        case "kick":
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("tu n'as pas les permissions de kick un utilisateur !");

                let toKick = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
                if(!toKick) return message.reply("merci d'entrer un utilisateur !");
                !toKick.kick(toKick);
                message.reply("vous avez kick " + toKick + " !"); 
			     
                
        break;
        default:
            message.reply("cette commande est introuvable. Pour avoir la liste des commandes, faites **'help**.")
    
	}
});

bot.login(TOKEN);
