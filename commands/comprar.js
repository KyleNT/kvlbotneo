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
const db = require("quick.db");
const ItemData = require("../itemData");
class comprar {
    constructor() {
        this._command = "comprar";
    }
    help() {
        return "Realiza uma compra de um item";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            msgObject.delete()
                .catch(console.error);
            if (args.length < 1) {
                return;
            }
            let newItemName = args.join(" ");
            let item = null;
            ItemData.itemData.items.forEach(element => {
                if (element.name.toLocaleLowerCase() == newItemName.toLocaleLowerCase()) {
                    item = element;
                }
            });
            if (item === null) {
                msgObject.channel.send(`Desculpe ${msgObject.author.username}, ${newItemName} não existe.`)
                    .then(msg => [
                    msg.delete(5000)
                        .catch(console.error)
                ]);
                return;
            }
            let userMoney = db.get(`${msgObject.author.id}.money`);
            if (userMoney < item.price) {
                msgObject.channel.send(`Desculpe ${msgObject.author.username}, ${item.name} custa ${item.price} WTBs mas você só tem ${userMoney} WTBs.`)
                    .then(msg => [
                    msg.delete(5000)
                        .catch(console.error)
                ]);
                return;
            }
            db.add(`${msgObject.author.id}.money`, -item.price);
            db.push(`${msgObject.author.id}.items`, item.name);
            msgObject.channel.send(`${msgObject.member.displayName} comprou: ${item.name} que custou ${item.price} WTBs! `)
                .then(msg => [
                msg.delete(5000)
                    .catch(console.error)
            ]);
        });
    }
}
exports.default = comprar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcHJhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9jb21wcmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSwrQkFBK0I7QUFDL0Isd0NBQXdDO0FBS3hDLE1BQXFCLE9BQU87SUFBNUI7UUFFcUIsYUFBUSxHQUFHLFNBQVMsQ0FBQTtJQTZEekMsQ0FBQztJQTNERyxJQUFJO1FBQ0EsT0FBTywrQkFBK0IsQ0FBQztJQUMzQyxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQTtJQUNwQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUcvRSxTQUFTLENBQUMsTUFBTSxFQUFFO2lCQUNiLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFMUIsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFBRSxPQUFPO2FBQUU7WUFDaEMsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVqQyxJQUFJLElBQUksR0FBZSxJQUFJLENBQUM7WUFHNUIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUN0QyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxXQUFXLENBQUMsaUJBQWlCLEVBQUUsRUFBRTtvQkFDckUsSUFBSSxHQUFHLE9BQU8sQ0FBQztpQkFDbEI7WUFDTCxDQUFDLENBQUMsQ0FBQztZQU1ILElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtnQkFDZixTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLFdBQVcsY0FBYyxDQUFDO3FCQUNsRixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztvQkFDVCxHQUF1QixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7eUJBQy9CLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2lCQUNoQyxDQUFDLENBQUM7Z0JBQ1AsT0FBTzthQUNWO1lBR0QsSUFBSSxTQUFTLEdBQVksRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQTtZQUMvRCxJQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFDO2dCQUN0QixTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxJQUFJLFVBQVUsSUFBSSxDQUFDLEtBQUsseUJBQXlCLFNBQVMsUUFBUSxDQUFDO3FCQUN2SSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztvQkFDVCxHQUF1QixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7eUJBQ2hDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2lCQUMzQixDQUFDLENBQUM7Z0JBQ1IsT0FBTzthQUNOO1lBRUQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDcEQsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRW5ELFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLGFBQWEsSUFBSSxDQUFDLElBQUksZUFBZSxJQUFJLENBQUMsS0FBSyxTQUFTLENBQUM7aUJBQzlHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUNULEdBQXVCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztxQkFDaEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7YUFDM0IsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztLQUFBO0NBQ0o7QUEvREQsMEJBK0RDIn0=