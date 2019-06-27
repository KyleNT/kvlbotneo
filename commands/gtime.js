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
class gtime { //ALTERAÇÃO 1
    constructor() {
        /*super(client,{
            name: 'flip',
            group: 'simple',
            memberName: 'flip',
            description: 'Flips a coin, landing in either heads or tails'
        });*/
        this._command = "gtime";
    } //FIM DA ALTERAÇÃO 1
    help() {
        return "Conta quantas pessoas participaram de um time";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {//ALTERAÇÃO 2
    currentTeamMembers = []
    msgObject.reply("O time foi resetado!");
            //ALTERAÇÃO PRINCIPAL
        });
    }
}
exports.default = gtime;