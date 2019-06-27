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
class kick {
    constructor() {
        this._command = "kick";
    }
    help() {
        return "(Artillery ADM Only) Expulsa alguém, apenas mencionando";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let mentionedUser = msgObject.mentions.users.first();
            let suppliedReason = args.slice(1).join(" ") || "";
            let kickLog = `${msgObject.author.username}: ${suppliedReason}`;
            msgObject.delete()
                .catch(console.error);
            if (!msgObject.member.hasPermission("ADMINISTRATOR")) {
                msgObject.channel.send(`Mas tu é um(a) corno(a) ${msgObject.author.username}, você não tem poder de expulsar ninguém aqui.`)
                    .then(msg => [
                    msg.delete(5000)
                        .catch(console.error)
                ]);
                return;
            }
            if (!msgObject.member.hasPermission("KICK_MEMBERS")) {
                msgObject.channel.send(`Mas tu é um(a) corno(a) ${msgObject.author.username}, você não tem poder de banir ninguém aqui.`)
                    .then(msg => [
                    msg.delete(5000)
                        .catch(console.error)
                ]);
                return;
            }
            if (!mentionedUser) {
                msgObject.channel.send(`Ok ${msgObject.author.username}, **Ninguém** foi expulso.`)
                    .then(msg => [
                    msg.delete(5000)
                        .catch(console.error)
                ]);
                return;
            }
            msgObject.guild.member(mentionedUser).kick(kickLog)
                .then(console.log)
                .catch(console.error);
        });
    }
}
exports.default = kick;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2ljay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9raWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFHQSxNQUFxQixJQUFJO0lBQXpCO1FBRXFCLGFBQVEsR0FBRyxNQUFNLENBQUE7SUFtRHRDLENBQUM7SUFqREcsSUFBSTtRQUNBLE9BQU8seURBQXlELENBQUM7SUFDckUsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUE7SUFDcEMsQ0FBQztJQUVLLFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjs7WUFHL0UsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDckQsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ25ELElBQUksT0FBTyxHQUFHLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEtBQUssY0FBYyxFQUFFLENBQUM7WUFFaEUsU0FBUyxDQUFDLE1BQU0sRUFBRTtpQkFDakIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUVyQixJQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLEVBQUM7Z0JBQ2hELFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDJCQUEyQixTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsZ0RBQWdELENBQUM7cUJBQzNILElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFBO29CQUNILEdBQXVCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzt5QkFDcEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7aUJBQzVCLENBQUMsQ0FBQztnQkFDSCxPQUFPO2FBQ1Y7WUFFRCxJQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQUM7Z0JBQy9DLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDJCQUEyQixTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsNkNBQTZDLENBQUM7cUJBQ3hILElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFBO29CQUNQLEdBQXVCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzt5QkFDcEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7aUJBQzVCLENBQUMsQ0FBQztnQkFDQyxPQUFPO2FBQ1Y7WUFFRCxJQUFHLENBQUMsYUFBYSxFQUFDO2dCQUNkLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLDRCQUE0QixDQUFDO3FCQUNsRixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQTtvQkFDUCxHQUF1QixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7eUJBQ3BDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2lCQUM1QixDQUFDLENBQUM7Z0JBQ0MsT0FBTzthQUNWO1lBRUQsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztpQkFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7aUJBQ2pCLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDN0IsQ0FBQztLQUFBO0NBQ0o7QUFyREQsdUJBcURDIn0=