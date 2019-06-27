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
class ban {
    constructor() {
        this._command = "ban";
    }
    help() {
        return "(Artillery ADM Only) Bane alguém, apenas mencionando";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let mentionedUser = msgObject.mentions.users.first();
            let suppliedReason = args.slice(1).join(" ") || "";
            let banLog = `${msgObject.author.username}: ${suppliedReason}`;
            msgObject.delete()
                .catch(console.error);
            if (!msgObject.member.hasPermission("ADMINISTRATOR")) {
                msgObject.channel.send(`Mas tu é um(a) corno(a) ${msgObject.author.username}, você não tem poder de banir ninguém aqui.`)
                    .then(msg => [
                    msg.delete(5000)
                        .catch(console.error)
                ]);
                return;
            }
            if (!msgObject.member.hasPermission("BAN_MEMBERS")) {
                msgObject.channel.send(`Mas tu é um(a) corno(a) ${msgObject.author.username}, você não tem poder de banir ninguém aqui.`)
                    .then(msg => [
                    msg.delete(5000)
                        .catch(console.error)
                ]);
                return;
            }
            if (!mentionedUser) {
                msgObject.channel.send(`Ok ${msgObject.author.username}, **Ninguém** foi banido.`)
                    .then(msg => [
                    msg.delete(5000)
                        .catch(console.error)
                ]);
                return;
            }
            msgObject.guild.member(mentionedUser).ban(banLog)
                .then(console.log)
                .catch(console.error);
        });
    }
}
exports.default = ban;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2Jhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR0EsTUFBcUIsR0FBRztJQUF4QjtRQUVxQixhQUFRLEdBQUcsS0FBSyxDQUFBO0lBbURyQyxDQUFDO0lBakRHLElBQUk7UUFDQSxPQUFPLHNEQUFzRCxDQUFDO0lBQ2xFLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFBO0lBQ3BDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBRy9FLElBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3JELElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNuRCxJQUFJLE1BQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLGNBQWMsRUFBRSxDQUFDO1lBRS9ELFNBQVMsQ0FBQyxNQUFNLEVBQUU7aUJBQ2pCLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFdEIsSUFBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxFQUFDO2dCQUNoRCxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQywyQkFBMkIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLDZDQUE2QyxDQUFDO3FCQUN4SCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQTtvQkFDUCxHQUF1QixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7eUJBQ2hDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2lCQUNoQyxDQUFDLENBQUM7Z0JBQ0MsT0FBTzthQUNWO1lBRUQsSUFBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxFQUFDO2dCQUM5QyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQywyQkFBMkIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLDZDQUE2QyxDQUFDO3FCQUN4SCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQTtvQkFDUCxHQUF1QixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7eUJBQ25DLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2lCQUM3QixDQUFDLENBQUM7Z0JBQ0MsT0FBTzthQUNWO1lBRUQsSUFBRyxDQUFDLGFBQWEsRUFBQztnQkFDZCxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSwyQkFBMkIsQ0FBQztxQkFDakYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUE7b0JBQ1AsR0FBdUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO3lCQUNuQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztpQkFDN0IsQ0FBQyxDQUFDO2dCQUNDLE9BQU87YUFDVjtZQUVELFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7aUJBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO2lCQUNqQixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzdCLENBQUM7S0FBQTtDQUNKO0FBckRELHNCQXFEQyJ9