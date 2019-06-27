//JS-ONLY PROGRAMMING

///NEM PENSE EM MEXER NISSO PARA FUDER O BOT INTEIRO
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

///NEM PENSE EM MEXER NISSO PARA FUDER O BOT INTEIRO
const commando = require('discord.js-commando');
class coinflip { //ALTERAÇÃO 1
    constructor() {
        /*super(client,{
            name: 'flip',
            group: 'simple',
            memberName: 'flip',
            description: 'Flips a coin, landing in either heads or tails'
        });*/
        this._command = "coinflip";
    } //FIM DA ALTERAÇÃO 1
    help() {
        return "Cara ou Coroa, basicamente";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {//ALTERAÇÃO 2
            var chance = Math.floor(Math.random() * 2);
            if(chance == 0)
            {
                msgObject.channel.send(msgObject.author + ' jogou uma moeda, e deu cara!');
            }
            else
            {
                msgObject.channel.send(msgObject.author + ' jogou uma moeda, e deu coroa!');
            } 
            //ALTERAÇÃO PRINCIPAL
        });
    }
}
exports.default = coinflip;