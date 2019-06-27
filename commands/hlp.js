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
class hlp {
    constructor() {
        this._command = "hlp";
    }
    help() {
        return "Comando de ajuda";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            var embed = new Discord.RichEmbed()
                .setTitle("Ajuda")
                .setDescription("Use s86. antes dos comandos")
                .setColor(0x088347)
                .setAuthor("SÜDWESTER BOT, or **KVLBot NEO**", "https://cdn.discordapp.com/attachments/583054750791106561/591688005346000898/Ludericio512.png")
                .setFooter("Desevolvido por KyleWTB & Braguetta, 2019", "https://cdn.discordapp.com/attachments/583054750791106561/591688005346000898/Ludericio512.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/583054750791106561/591688005346000898/Ludericio512.png")
                .setImage("https://cdn.discordapp.com/attachments/583054750791106561/591688005346000898/Ludericio512.png")
                .addField("Textos Típicos", "E; sabedor; apb; adriatic; allright-a; itparece; 3,1415926tron; velberan")
                .addField("Embeds", "avatarurl; election; fidget; itsnouse; kiwispin; brabinho")
                .addField("Voice commands", "join_channel; leave_channel")
                .addField("External Links", "wano")
                .addField("Opctional stuff", "comprar; renda; inventory")
                .addField("Moderação - ADM Only", "kick, purge, ban")
                .addField("Calculator", "plus; minus; times; divided; power; squared; sqrt; pi; round; senoG; senoR; cossenoG; cossenoR; tangenteG; tangenteR; max; min")
                .addField("Another", "softping; serverinfo; userinfo");
            msgObject.channel.send(embed);
        });
    }
}
exports.default = hlp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGxwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2hscC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQXNDO0FBR3RDLE1BQXFCLEdBQUc7SUFBeEI7UUFFcUIsYUFBUSxHQUFHLEtBQUssQ0FBQTtJQThCckMsQ0FBQztJQTVCRyxJQUFJO1FBQ0EsT0FBTyxrQkFBa0IsQ0FBQztJQUM5QixDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQTtJQUNwQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUcvRSxJQUFJLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7aUJBQ3hDLFFBQVEsQ0FBQyxPQUFPLENBQUM7aUJBQ2pCLGNBQWMsQ0FBQyw2QkFBNkIsQ0FBQztpQkFDN0MsUUFBUSxDQUFDLFFBQVEsQ0FBQztpQkFDbEIsU0FBUyxDQUFDLGtDQUFrQyxFQUFFLCtGQUErRixDQUFDO2lCQUM5SSxTQUFTLENBQUMsMkNBQTJDLEVBQUUsK0ZBQStGLENBQUM7aUJBQ3ZKLFlBQVksQ0FBQywrRkFBK0YsQ0FBQztpQkFDN0csUUFBUSxDQUFDLCtGQUErRixDQUFDO2lCQUN6RyxRQUFRLENBQUMsZ0JBQWdCLEVBQUMsMEVBQTBFLENBQUM7aUJBQ3JHLFFBQVEsQ0FBQyxRQUFRLEVBQUMsZ0RBQWdELENBQUM7aUJBQzdELFFBQVEsQ0FBQyxPQUFPLEVBQUMsTUFBTSxDQUFDO2lCQUN4QixRQUFRLENBQUMsaUJBQWlCLEVBQUMsMkJBQTJCLENBQUM7aUJBQ3ZELFFBQVEsQ0FBQyxzQkFBc0IsRUFBQyxpQkFBaUIsQ0FBQztpQkFDeEQsUUFBUSxDQUFDLFlBQVksRUFBQyxnSUFBZ0ksQ0FBQztpQkFDdkosUUFBUSxDQUFDLFNBQVMsRUFBQyxzQkFBc0IsQ0FBQyxDQUFBO1lBQ3JDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLENBQUM7S0FBQTtDQUNKO0FBaENELHNCQWdDQyJ9