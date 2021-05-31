class ListaNegociacao{

    constructor(gatilho){
        this._negociacoes = [];
        this._gatilho = gatilho;
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
        this._gatilho(this);
    }
    
    limpa(){
        this._negociacoes = [];
        this._gatilho(this);
    }

    get negociacoes(){
        return [].concat(this._negociacoes);
    }


}