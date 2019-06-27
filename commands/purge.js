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
class purge {
    constructor() {
        this._command = "purge";
    }
    help() {
        return "(Artillery ADM Only) Deleta uma certa quantidade de mensagens no canal";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            msgObject.delete()
                .catch(console.error);
            if (!msgObject.member.hasPermission("ADMINISTRATOR")) {
                msgObject.channel.send(`Deu para perceber, meu caro ${msgObject.author.username} mas este comando somente é para administradores e gerenciadores de mensagens.`)
                    .then(msg => {
                    msgObject.delete(5000)
                        .catch(console.error);
                });
                return;
            }
            if (!msgObject.member.hasPermission("MANAGE_MESSAGES")) {
                msgObject.channel.send(`Deu para perceber, meu caro ${msgObject.author.username} mas este comando somente é para administradores e gerenciadores de mensagens.`)
                    .then(msg => {
                    msgObject.delete(5000)
                        .catch(console.error);
                });
                return;
            }
            if (!args[0]) {
                msgObject.channel.send(`Deu para perceber, meu caro ${msgObject.author.username} mas você não especificou o número de mensagens para apagar.`)
                    .then(msg => {
                    msgObject.delete(5000)
                        .catch(console.error);
                });
                return;
            }
            let numberofMessagesToDelete = Number(args[0]);
            if (isNaN(numberofMessagesToDelete)) {
                msgObject.channel.send(`Desculpe ${msgObject.author.username} o número requerido é inválido.`)
                    .then(msg => {
                    msgObject.delete(5000)
                        .catch(console.error);
                });
                return;
            }
            numberofMessagesToDelete = Math.round(numberofMessagesToDelete + 1);
            msgObject.channel.bulkDelete(numberofMessagesToDelete)
                .catch(console.error);
        });
    }
}
exports.default = purge;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVyZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvcHVyZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBLE1BQXFCLEtBQUs7SUFBMUI7UUFFcUIsYUFBUSxHQUFHLE9BQU8sQ0FBQTtJQWlFdkMsQ0FBQztJQS9ERyxJQUFJO1FBQ0EsT0FBTyx3RUFBd0UsQ0FBQztJQUNwRixDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQTtJQUNwQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUcvRSxTQUFTLENBQUMsTUFBTSxFQUFFO2lCQUNqQixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBR3JCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsRUFBRTtnQkFDbEQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxnRkFBZ0YsQ0FBQztxQkFDM0osSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNQLFNBQTZCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzt5QkFDMUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDekIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsT0FBTzthQUNWO1lBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLEVBQUU7Z0JBQ3BELFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLCtCQUErQixTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsZ0ZBQWdGLENBQUM7cUJBQzNKLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDUCxTQUE2QixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7eUJBQzFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQ3pCLENBQUMsQ0FBQyxDQUFDO2dCQUNQLE9BQU87YUFDVjtZQUdELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUM7Z0JBQ1QsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSw4REFBOEQsQ0FBQztxQkFDekksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNQLFNBQTZCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzt5QkFDMUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDekIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsT0FBTzthQUNWO1lBR0QsSUFBSSx3QkFBd0IsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFHL0MsSUFBSSxLQUFLLENBQUMsd0JBQXdCLENBQUMsRUFDbkM7Z0JBQ0ksU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsaUNBQWlDLENBQUM7cUJBQ3pGLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDUCxTQUE2QixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7eUJBQzFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQ3pCLENBQUMsQ0FBQyxDQUFDO2dCQUNQLE9BQU87YUFDVjtZQUVELHdCQUF3QixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFHcEUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7aUJBQ2pELEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDN0IsQ0FBQztLQUFBO0NBQ0o7QUFuRUQsd0JBbUVDIn0=