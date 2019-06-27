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
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
class kiwispin {
    constructor() {
        this._command = "kiwispin";
    }
    help() {
        return "Um Kiwi marrom giratório";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let giro = getRandomArbitrary(1, 667);
            let dogol = Math.trunc(giro);
            var embed = new Discord.RichEmbed()
                .addField("Kiwi Giratório", "Este Kiwi deu o c# girando **" + dogol + "** vezes!")
                .setImage("https://cdn.discordapp.com/attachments/586009016954650632/586250211698016256/there_he_goes_hee_hee_hoo_hoo.gif");
            msgObject.channel.send(embed);
        });
    }
}
exports.default = kiwispin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2l3aXNwaW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMva2l3aXNwaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUFzQztBQUd0QyxTQUFTLGtCQUFrQixDQUFDLEdBQVcsRUFBRSxHQUFXO0lBQ2hELE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUMzQyxDQUFDO0FBRUgsTUFBcUIsUUFBUTtJQUE3QjtRQUVxQixhQUFRLEdBQUcsVUFBVSxDQUFBO0lBb0IxQyxDQUFDO0lBbEJHLElBQUk7UUFDQSxPQUFPLDBCQUEwQixDQUFDO0lBQ3RDLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFBO0lBQ3BDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBRy9FLElBQUksSUFBSSxHQUFHLGtCQUFrQixDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM1QyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZCLElBQUksS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtpQkFDbEMsUUFBUSxDQUFFLGdCQUFnQixFQUFDLCtCQUErQixHQUFHLEtBQUssR0FBRyxXQUFXLENBQUM7aUJBQ2pGLFFBQVEsQ0FBRSxnSEFBZ0gsQ0FBQyxDQUFBO1lBQzVILFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2pDLENBQUM7S0FBQTtDQUNKO0FBdEJELDJCQXNCQyJ9