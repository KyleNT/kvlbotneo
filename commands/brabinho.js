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
class brabinho {
    constructor() {
        this._command = "brabinho";
    }
    help() {
        return "Preciso responder?";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            msgObject.channel.send({ files: [
                    {
                        attachment: 'https://cdn.discordapp.com/attachments/583054750791106561/591672961715404825/brabinho.mp4',
                    }
                ] });
        });
    }
}
exports.default = brabinho;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJhYmluaG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvYnJhYmluaG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBLE1BQXFCLFFBQVE7SUFBN0I7UUFFcUIsYUFBUSxHQUFHLFVBQVUsQ0FBQTtJQW1CMUMsQ0FBQztJQWpCRyxJQUFJO1FBQ0EsT0FBTyxvQkFBb0IsQ0FBQztJQUNoQyxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQTtJQUNwQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUc5RSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRTtvQkFDNUI7d0JBQ0ksVUFBVSxFQUFFLDJGQUEyRjtxQkFDMUc7aUJBQ0osRUFBQyxDQUFDLENBQUM7UUFDUixDQUFDO0tBQUE7Q0FDSjtBQXJCRCwyQkFxQkMifQ==