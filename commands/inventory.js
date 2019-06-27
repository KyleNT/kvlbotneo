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
const db = require("quick.db");
class inventory {
    constructor() {
        this._command = "inventory";
    }
    help() {
        return "Este comando abre o seu inventário, ou do usuário mencionado.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let mentionedUser;
            if (args.length > 0) {
                if (msgObject.mentions.users.size > 0) {
                    mentionedUser = msgObject.mentions.users.first();
                }
                else {
                    return;
                }
            }
            else {
                mentionedUser = msgObject.member.user;
            }
            let userMoney = db.get(`${mentionedUser.id}.money`);
            let userItems = db.get(`${mentionedUser.id}.items`).join(" ");
            if (userItems === "") {
                userItems = "Vazio";
            }
            let inventoryEmbed = new Discord.RichEmbed()
                .setTitle(`Inventário de ${mentionedUser.username}`)
                .setColor([0, 200, 0])
                .addField("Money:", `${userMoney} WTB`)
                .addField("Items:", `${userItems}`);
            msgObject.channel.send(inventoryEmbed)
                .then(msg => {
                msg.delete(10000)
                    .catch(console.error);
            });
        });
    }
}
exports.default = inventory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52ZW50b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2ludmVudG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQXNDO0FBQ3RDLCtCQUErQjtBQUcvQixNQUFxQixTQUFTO0lBQTlCO1FBRXFCLGFBQVEsR0FBRyxXQUFXLENBQUE7SUEyQzNDLENBQUM7SUF6Q0csSUFBSTtRQUNBLE9BQU8sK0RBQStELENBQUM7SUFDM0UsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUE7SUFDcEMsQ0FBQztJQUVLLFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjs7WUFFL0UsSUFBSSxhQUEyQixDQUFDO1lBR2hDLElBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUM7Z0JBQ2YsSUFBRyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFDO29CQUNqQyxhQUFhLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ3BEO3FCQUNHO29CQUFFLE9BQU87aUJBQUU7YUFFbEI7aUJBQU07Z0JBQ0gsYUFBYSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2FBQ3pDO1lBQ0QsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFBO1lBQ25ELElBQUksU0FBUyxHQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxhQUFhLENBQUMsRUFBRSxRQUFRLENBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkYsSUFBRyxTQUFTLEtBQUssRUFBRSxFQUFDO2dCQUNoQixTQUFTLEdBQUcsT0FBTyxDQUFDO2FBQ3ZCO1lBRUQsSUFBSSxjQUFjLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2lCQUN2QyxRQUFRLENBQUMsaUJBQWlCLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDbkQsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDckIsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLFNBQVMsTUFBTSxDQUFDO2lCQUN0QyxRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUcsU0FBUyxFQUFFLENBQUMsQ0FBQTtZQUV2QyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7aUJBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDVCxHQUF1QixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7cUJBQ2hDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFFVixDQUFDO0tBQUE7Q0FDSjtBQTdDRCw0QkE2Q0MifQ==