import { useState, useEffect } from "react"

const Formulario = ()=> {
    
    let [pesoImc,setPesoImc] = useState(0); // UseState nos dá um valor e uma função para alterar este valor
    let [alturaImc,setAlturaImc] = useState(0); 
    // let [materiaC,setMateriaC] = useState(0);
    let [nome,setNome] = useState('');

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            return evento.target.value;
        })
    }

    const renderizaResultado = ()=> {
        const soma = (pesoImc/alturaImc**2);

        if (soma <= 16.9) {
            return (
                <p>{nome}, Seu IMC é {soma.toFixed(2)}. Você está <strong> Muito abaixo do Peso</strong> </p>
            )
        }else if (soma <= 17 || soma <=18.4) {
            return (
                <p>{nome}, Seu IMC é {soma.toFixed(2)}. Você está <strong> Abaixo do Peso</strong> </p>
            )
        }else if (soma ===18.5 || soma <=24.9) {
            return(
                <p>{nome}, Parabéns! Seu IMC é {soma.toFixed(2)}. Você tem <strong> Peso normal</strong> </p>
            )
        }else if (soma ===25 || soma <=29.9){
            return(
                <p>{nome}, Seu IMC é {soma.toFixed(2)}. Você está <strong> Acima do Peso</strong> </p>
            )            
        }else if (soma ===30 || soma <=34.9){
            return(<p>{nome}, atenção! Seu IMC é {soma.toFixed(2)}. Você está com<strong> Obesidade Grau I</strong> </p>
            )            
        }else if (soma ===35 || soma <=40){
            return(<p>{nome}, atenção! Seu IMC é {soma.toFixed(2)}. Você está com<strong> Obesidade Grau II</strong> </p>
            )            
        }else if (soma >=40){
            return(<p>{nome}, atenção! Seu IMC é {soma.toFixed(2)}. Você está com<strong> Obesidade Grau I</strong> </p>
            )       
        }
    }

    return (
       <>
       <form>
        <input type="text" placeholder="Insira seu nome" onChange={alteraNome} />
        <input type="number" placeholder="Peso" onChange={evento => setPesoImc(parseFloat(evento.target.value))}/>
        <input type="number" placeholder="Altura" onChange={evento => setAlturaImc(parseFloat(evento.target.value))}/> 
        {renderizaResultado()}      
        </form>

        </>
    )
}

export default Formulario;