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
class fidget {
    constructor() {
        this._command = "fidget";
    }
    help() {
        return "Um Kiwi marrom giratório";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let fidgeto = getRandomArbitrary(0, 480);
            let spinno = Math.trunc(fidgeto);
            var embed = new Discord.RichEmbed()
                .addField("Fidget Spinner", "Este spinner rodou por **" + spinno + "** segundos.")
                .setImage("https://www.dpciwholesale.com/images/D/9814-motion.gif");
            msgObject.channel.send(embed);
        });
    }
}
exports.default = fidget;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2ZpZGdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQXNDO0FBR3RDLFNBQVMsa0JBQWtCLENBQUMsR0FBVyxFQUFFLEdBQVc7SUFDaEQsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQzNDLENBQUM7QUFFSCxNQUFxQixNQUFNO0lBQTNCO1FBRXFCLGFBQVEsR0FBRyxRQUFRLENBQUE7SUFvQnhDLENBQUM7SUFsQkcsSUFBSTtRQUNBLE9BQU8sMEJBQTBCLENBQUM7SUFDdEMsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUE7SUFDcEMsQ0FBQztJQUVLLFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjs7WUFHckYsSUFBSSxPQUFPLEdBQUcsa0JBQWtCLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3pDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDM0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2lCQUNsQyxRQUFRLENBQUUsZ0JBQWdCLEVBQUMsMkJBQTJCLEdBQUcsTUFBTSxHQUFHLGNBQWMsQ0FBQztpQkFDakYsUUFBUSxDQUFFLHdEQUF3RCxDQUFDLENBQUE7WUFDcEUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDakMsQ0FBQztLQUFBO0NBQ0o7QUF0QkQseUJBc0JDIn0=