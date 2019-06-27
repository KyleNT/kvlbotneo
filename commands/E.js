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
class e {
    constructor() {
        this._command = "e";
    }
    help() {
        return "Rush E";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            msgObject.channel.send({ files: [
                    {
                        attachment: 'https://cdn.discordapp.com/attachments/583054750791106561/591663953793384493/Screen_Shot_2018-04-25_at_12.png',
                        name: "E.png"
                    }
                ] });
        });
    }
}
exports.default = e;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFHQSxNQUFxQixDQUFDO0lBQXRCO1FBRXFCLGFBQVEsR0FBRyxHQUFHLENBQUE7SUFvQm5DLENBQUM7SUFsQkcsSUFBSTtRQUNBLE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFBO0lBQ3BDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBRy9FLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFO29CQUMzQjt3QkFDSSxVQUFVLEVBQUUsK0dBQStHO3dCQUMzSCxJQUFJLEVBQUUsT0FBTztxQkFDaEI7aUJBQ0osRUFBQyxDQUFDLENBQUM7UUFDUixDQUFDO0tBQUE7Q0FDSjtBQXRCRCxvQkFzQkMifQ==