"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
class serverinfo {
    constructor() {
        this._command = "serverinfo";
    }
    help() {
        return "Informação geral do servidor.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let embed = new Discord.RichEmbed()
                .setColor([0, 104, 171])
                .setTitle("Informações do servidor")
                .setFooter("Legal, não é?")
                .setImage(msgObject.guild.iconURL)
                .setDescription(`Bem-vindo ao ${msgObject.guild.name}! Estas são algumas informações daqui.`)
                .addField("Server Count:", `O servidor tem atualmente ${msgObject.guild.memberCount} membros.`)
                .addField("Server Region:", `${msgObject.guild.region}`)
                .addField("Criado em:", `${msgObject.guild.createdAt}`);
            msgObject.channel.send(embed)
                .catch(console.error);
        });
    }
}
exports.default = serverinfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyaW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9zZXJ2ZXJpbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFHdEMsTUFBcUIsVUFBVTtJQUEvQjtRQUVxQixhQUFRLEdBQUcsWUFBWSxDQUFBO0lBMkI1QyxDQUFDO0lBekJHLElBQUk7UUFDQSxPQUFPLCtCQUErQixDQUFDO0lBQzNDLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFBO0lBQ3BDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBRy9FLElBQUksS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtpQkFDbEIsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDdkIsUUFBUSxDQUFDLHlCQUF5QixDQUFDO2lCQUNuQyxTQUFTLENBQUMsZUFBZSxDQUFDO2lCQUMxQixRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7aUJBQ2pDLGNBQWMsQ0FBQyxnQkFBZ0IsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLHdDQUF3QyxDQUFDO2lCQUM1RixRQUFRLENBQUMsZUFBZSxFQUFDLDZCQUE2QixTQUFTLENBQUMsS0FBSyxDQUFDLFdBQVcsV0FBVyxDQUFDO2lCQUM3RixRQUFRLENBQUMsZ0JBQWdCLEVBQUMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO2lCQUd0RCxRQUFRLENBQUMsWUFBWSxFQUFDLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZFLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztpQkFDeEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUM3QixDQUFDO0tBQUE7Q0FDSjtBQTdCRCw2QkE2QkMifQ==