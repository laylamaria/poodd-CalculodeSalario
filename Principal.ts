
declare function require(msg : string) : any;
var readline = require('readline-sync');

import {Professor} from "./Professor";
import {STA} from "./STA";
import {Terceirizado} from "./Terceirizado";
import {Funcionario} from "./Funcionario";

let funcionarios: Array<Funcionario> = [];
while(true){
    let possiveisComandos : string = "" + 
        "---------------------------------------------------" +
        "addprof - adiciona um professor\n" +
        "addsta - adiciona um sta\n" + 
        "addter - adiciona um terceirizado\n" + 
        "show - mostra um funcionario\n" + 
        "rm - remove um funcionario\n" + 
        "adddiaria - adiciona diaria\n" + 
        "parar - sair do programa\n";
    console.log(possiveisComandos);
    let comando : string = readline.question("Digite um comando: ");
    if(comando == "parar"){
        console.log("Até a próxima");
        break;
    }
    switch(comando){
        case "addprof" :
            let n:string = readline.question("Digite um nome: ");
            let c:string = readline.question("Digite a classe: ");
            let prof : Professor = new Professor (n,0,c);
            funcionarios.push(prof);
            console.log("Professor adicionado!");
            break;
        case "addsta" :
            let no:string = readline.question("Digite um nome: ");
            let nv:number = readline.question("Digite a nivel: ");
            let sta : STA = new STA (no,0,nv);
            funcionarios.push(sta);
            console.log("STA adicionado!");
            break;
        case "addter" :
            let nom:string = readline.question("Digite um nome: ");
            let h:number = readline.question("Digite as horas: ");
            let i:string = readline.question("Eh insalubre: ");
            let ter :Terceirizado = new Terceirizado (nom,0,true,h);
            if(i=="nao"){
                ter.setInsalubre(false);
            }
            funcionarios.push(ter);
            console.log("Terceirizado adicionado!");
            break;
        case "adddiaria" :
            let achou: boolean = false;
            nom = readline.question("Digite um nome: ");
            for(let i of funcionarios){
                if(i.getNome()==nom){
                    achou = true;
                    if(i instanceof Professor){
                        let prof : Professor = i;
                        if(prof.addDiaria()==true){
                            console.log("Diaria adicionada!")
                        }else{
                            console.log("Nao adicionado!");
                        }
                    }else if(i instanceof STA){
                        let sta : STA = i;
                        if(sta.addDiaria()==true){
                            console.log("Diaria adicionada!")
                        }else{
                            console.log("Nao adicionado!");
                        }  
                    }else{
                        console.log("Esse funcionario nao recebe diaria!");
                    }
                }
            }
            if(!achou){
                console.log("Nao encontrado");
            } 
            break;
        case "show" :
            let funci: string = readline.question("Digite o nome do funcionario: ");
            let f: Funcionario|undefined = undefined;
            for(let i of funcionarios){
                if(i.getNome()==funci){
                    f = i;
                }
            }if(f == undefined){
                console.log("Nao existe.");
            }else{
                if(f instanceof Professor){
                    let prof : Professor = f;
                    console.log(prof.toString());
                }else if(f instanceof STA){
                    let sta : STA = f;
                    console.log(sta.toString());  
                }else if(f instanceof Terceirizado){
                    let ter : Terceirizado = f;
                    console.log(ter.toString());      
                } 
            }
            break;

        case "rm" :
            let funcionarinho:string = readline.question("Digite um nome: ");
            for(let i in funcionarios){
                if(funcionarios[i].getNome()==funcionarinho){
                    funcionarios.splice(parseInt(i),1);
                }
            }
            console.log("Funcionario removido!");
            break;
        default:
            console.log("Comando inválido");
    }
}
