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
var fortunes = [
    "Sim",
    "Não",
    "Talvez sim",
    "Talvez não",
    "Pergunta pro velberan",
    "A resposta será dada pela centésima pessoa que você irá ver, começandando no horário em que mandei a resposta",
];
class sabedor {
    constructor() {
        this._command = "sabedor";
    }
    help() {
        return "O Sabedor, pergunte a ele e dirá as respostas!";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            if (args[1])
                msgObject.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
            else
                msgObject.channel.send("Impossível");
        });
    }
}
exports.default = sabedor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FiZWRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9zYWJlZG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFJQSxJQUFJLFFBQVEsR0FBRztJQUNYLEtBQUs7SUFDTCxLQUFLO0lBQ0wsWUFBWTtJQUNaLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsK0dBQStHO0NBQzlHLENBQUM7QUFFTixNQUFxQixPQUFPO0lBQTVCO1FBRXFCLGFBQVEsR0FBRyxTQUFTLENBQUE7SUFnQnpDLENBQUM7SUFkRyxJQUFJO1FBQ0EsT0FBTyxnREFBZ0QsQ0FBQztJQUM1RCxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQTtJQUNwQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUcvRSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7O2dCQUM3RixTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM5QyxDQUFDO0tBQUE7Q0FDSjtBQWxCRCwwQkFrQkMifQ==