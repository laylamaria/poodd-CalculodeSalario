import {Funcionario} from "./Funcionario";

export class STA extends Funcionario{
    private nivel : number;

    public constructor (nome:string,diaria:number,nivel:number){
        super(nome,diaria);
        this.nivel = nivel;
    }

    public getNivel():number{
        return this.nivel;
    }
    public setNivel(nivel:number):void{
        this.nivel=nivel;
    }

    public calcularSalario():number{
        let salario:number = 3000 + (300 * this.nivel + (100*this.getDiaria()));
        return salario;
    }
     
    public addDiaria():boolean{
        if(this.getDiaria()<1){
            this.setDiaria(this.getDiaria()+1);
            return true;
        }else{
            return false;
        }
    }

    public toString():string{
        let tostr:string= "";
        tostr += "Sta:  " + this.getNome() + " nivel: " + this.nivel;
        tostr += "\nSalario: " + this.calcularSalario();
        return tostr;
    }
}
