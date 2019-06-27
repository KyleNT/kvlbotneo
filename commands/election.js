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
class election {
    constructor() {
        this._command = "election";
    }
    help() {
        return "Cria uma enquete super básica.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            msgObject.delete(0);
            if (args.length < 1) {
                return;
            }
            let pollEmbed = new Discord.RichEmbed()
                .setTitle("Enquete 2019")
                .setDescription(args.join(" "));
            let pollMessage = yield msgObject.channel.send(pollEmbed);
            yield pollMessage.react("✅");
            yield pollMessage.react("❎");
            const filter = (reaction) => reaction.emoji.name === '✅' || reaction.emoji.name === '❎';
            const results = yield pollMessage.awaitReactions(filter, { time: 10000 });
            let resultsEmbed = new Discord.RichEmbed()
                .setTitle("Resultados da enquete")
                .setDescription(`Resultados da enquete: ${args.join(" ")}`)
                .addField("✅:", `${results.get("✅").count - 1} votos`)
                .addField("❎:", `${results.get("❎").count - 1} votos`);
            msgObject.channel.send(resultsEmbed);
            pollMessage.delete(0);
        });
    }
}
exports.default = election;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvZWxlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUFzQztBQUd0QyxNQUFxQixRQUFRO0lBQTdCO1FBRXFCLGFBQVEsR0FBRyxVQUFVLENBQUE7SUF3QzFDLENBQUM7SUF0Q0csSUFBSTtRQUNBLE9BQU8sZ0NBQWdDLENBQUM7SUFDNUMsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUE7SUFDcEMsQ0FBQztJQUVLLFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjs7WUFHL0UsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVwQixJQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO2dCQUFDLE9BQU87YUFBQztZQUM1QixJQUFJLFNBQVMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7aUJBQ2xDLFFBQVEsQ0FBQyxjQUFjLENBQUM7aUJBQ3hCLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7WUFFbkMsSUFBSSxXQUFXLEdBQUcsTUFBTSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMxRCxNQUFPLFdBQStCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xELE1BQU8sV0FBK0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFHbEQsTUFBTSxNQUFNLEdBQUcsQ0FBQyxRQUFpQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxHQUFHLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDO1lBQ2pILE1BQU0sT0FBTyxHQUFHLE1BQU8sV0FBK0IsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUE7WUFFOUYsSUFBSSxZQUFZLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2lCQUNyQyxRQUFRLENBQUMsdUJBQXVCLENBQUM7aUJBQ2pDLGNBQWMsQ0FBQywwQkFBMEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO2lCQUMxRCxRQUFRLENBQUMsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUMsQ0FBQyxRQUFRLENBQUM7aUJBQ25ELFFBQVEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBRXhELFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3BDLFdBQStCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBSTlDLENBQUM7S0FBQTtDQUNKO0FBMUNELDJCQTBDQyJ9