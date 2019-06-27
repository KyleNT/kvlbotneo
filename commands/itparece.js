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
class itparece {
    constructor() {
        this._command = "itparece";
    }
    help() {
        return "Repostas rápidas";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            msgObject.channel.send('*Le luigi pulando o bloco* It seems que you not delete essa cheat-a! Pode dizer adeus :gun:');
        });
    }
}
exports.default = itparece;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRwYXJlY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvaXRwYXJlY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBLE1BQXFCLFFBQVE7SUFBN0I7UUFFcUIsYUFBUSxHQUFHLFVBQVUsQ0FBQTtJQWUxQyxDQUFDO0lBYkcsSUFBSTtRQUNBLE9BQU8sa0JBQWtCLENBQUM7SUFDOUIsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUE7SUFDcEMsQ0FBQztJQUVLLFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjs7WUFHL0UsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsNkZBQTZGLENBQUMsQ0FBQTtRQUN6SCxDQUFDO0tBQUE7Q0FDSjtBQWpCRCwyQkFpQkMifQ==