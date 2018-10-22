import {Funcionario} from "./Funcionario";

export class Terceirizado extends Funcionario{
    private insalubre : boolean;
    private horas : number;

    public constructor (nome:string,diaria:number,insalubre:boolean, horas:number){
        super(nome,diaria);
        this.insalubre = insalubre;
        this.horas = horas;
    }

    public isInsalubre():boolean{
        return this.insalubre;
    }
    public setInsalubre(insalubre:boolean):void{
        this.insalubre=insalubre;
    }
    public getHoras():number{
        return this.horas;
    }
    public setHoras(horas:number):void{
        this.horas=horas;
    }

    public calcularSalario():number{
        let salario:number;
        if (this.insalubre=true){
            salario = 4 * this.horas;
        }else{
            salario = 4 * this.horas + 500;
        }
        return salario;
    }
    public toString():string{
        let tostr:string= "";
        if (this.insalubre==true){
            tostr += "Ter:  " + this.getNome() + this.horas + "h" + " Insalubre"; 
        }else{
            tostr += "Ter:  " + this.getNome() + this.horas + "h";
        }
        tostr += "\nSalario: " + this.calcularSalario();
        return tostr;
    }

}