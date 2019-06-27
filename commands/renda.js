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
class renda {
    constructor() {
        this._command = "renda";
    }
    help() {
        return "Mostra o quanto de pessoa tem na conta";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            msgObject.delete(0);
            let moneyAmount = db.get(`${msgObject.author.id}.money`);
            let moneyEmbed = new Discord.RichEmbed()
                .setTitle(`A renda de ${msgObject.author.username}`)
                .setColor([0, 200, 0])
                .setDescription(`${moneyAmount} WTB`);
            msgObject.channel.send(moneyEmbed)
                .then(msg => {
                msg.delete(5000)
                    .catch(console.error);
            });
        });
    }
}
exports.default = renda;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvcmVuZGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHNDQUFzQztBQUN0QywrQkFBK0I7QUFHL0IsTUFBcUIsS0FBSztJQUExQjtRQUVxQixhQUFRLEdBQUcsT0FBTyxDQUFBO0lBNkJ2QyxDQUFDO0lBM0JHLElBQUk7UUFDQSxPQUFPLHdDQUF3QyxDQUFDO0lBQ3BELENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFBO0lBQ3BDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBSS9FLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxXQUFXLEdBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQTtZQUV6RCxJQUFJLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7aUJBQ25DLFFBQVEsQ0FBQyxjQUFjLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQ25ELFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ25CLGNBQWMsQ0FBQyxHQUFHLFdBQVcsTUFBTSxDQUFDLENBQUE7WUFFekMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2lCQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ1AsR0FBdUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO3FCQUNoQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxDQUFBO1FBRVYsQ0FBQztLQUFBO0NBQ0o7QUEvQkQsd0JBK0JDIn0=