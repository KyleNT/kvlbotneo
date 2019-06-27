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
class allrighta {
    constructor() {
        this._command = "allright-a";
    }
    help() {
        return "Repostas rápidas";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            msgObject.channel.send(':cowboy: All right-a paisano, It parece que not delete the cheat-a! I sugiro for delete-a now, if not eu atiro. :gun:');
        });
    }
}
exports.default = allrighta;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxscmlnaHQtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9hbGxyaWdodC1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFHQSxNQUFxQixTQUFTO0lBQTlCO1FBRXFCLGFBQVEsR0FBRyxZQUFZLENBQUE7SUFlNUMsQ0FBQztJQWJHLElBQUk7UUFDQSxPQUFPLGtCQUFrQixDQUFDO0lBQzlCLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFBO0lBQ3BDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBRy9FLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLHVIQUF1SCxDQUFDLENBQUE7UUFDbkosQ0FBQztLQUFBO0NBQ0o7QUFqQkQsNEJBaUJDIn0=