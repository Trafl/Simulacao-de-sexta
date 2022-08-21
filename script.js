  
realCombat=()=>{
  const trabalhadorCansado = {
    Raça: 'Humano',
    Nome: '',
    Magias:['Boleto Atrasado', 'Cafe expresso', 'Canivete enferrujado'],
    Atk: 2,
    Def: 3,
    Agi: 2,
    Const: 2,
  }
  
  const bebado = {
    Raça: 'Pinguçu',
    Nome: 'Zé',
    Magias:['Vomitar almoço de ontem', 'Ressaca Paralela', 'Me da um cigarro ai'
    ],
    Atk: 2,
    Def: 1,
    Agi: 2,
    Const: 2,
  }

    const {Atk,Agi} = trabalhadorCansado;
    const {Def,Const} = bebado;
    
    trabalhadorCansado.Nome = prompt('Ei amigo, qual e o seu nome ?');
    
    move1 = (Atk * Math.round(Math.random()*20)) - (Def * Math.round(Math.random()*20));
    move2 = (Agi * Math.round(Math.random()*20)) - (Const* Math.round(Math.random()*20));
    
    let d = '';
    let g = '';

    let dialogo1 = prompt('Você entrou no bar e viu 2 mesas vazias, a da direita tem 2 homens conversando e na esquerda uma linda mulher, aonde você escolhe para sentar, direita ou esquerda ?');
    
    let dialogo2;

    
      
      if(dialogo1 == 'direita'){
      dialogo2 = prompt('Chegando na mesa você percebe que os dois estão tendo uma conversa que parece um tanto particular, ainda vai se sentar a mesa ?');  
      }
      if(dialogo1 == 'esquerda'){
      dialogo2 = prompt('Ao se aproximar você sente um cheiro que chega a ser nostalgico, você reconhece, e uma das funcionarias da empresa, voce se senta ?');
      }
      /* else{
      return alert('Nesse momento de indecisão você olha seu celular e vê que são 23h e você vai embora')
      } */

    //
      if(dialogo2 =='sim'){
       alert('Puxou a cadeira para se sentar')
      }if(dialogo2 =='não'){
      alert('Pensou melhor e deu meia volta')
      }

      alert('Nessa hora você se sente totalmente relaxado, foram horas de conversa, nunca sentiu seu corpo tão leve como hoje... é nessa bendita hora tropeça esbarrando em um cara é derrubando a bebida dele no chão');

    let escolha1 = prompt('Ele te empurra na parede e quer tirar satisfação, oque vocé fala ?');
    
    alert(`${escolha1} OQUE RAPA, QUERO UM COPO NOVO, MELHOR TU ARRANJAR.`);

    let escolha2 = prompt('Só oque você sente nessa hora e indignação, porque um cara qualquer quer interromper o seu unico dia de paz na semana ?!, oque você faz, brigar ou paga ele ?.');
  
    if(escolha2 == 'brigar'){ 
        if(move1>0){
        d = 'Você acertou o Primeiro soco esquivando por pura sorte do segundo.'
      } else {
        d = 'Você não viu o soco vindo e...perdeu 3 dentes.'
      }
       if(move2<0){
        g = 'infelizmente tomou uma facada na barriga, melhor você não se mexer.'
        } else  
        g =' esquivou da facada, não sei como mas você conseguiu imobilizar ele.'
        
        console.log(move1);
        console.log(move2);

        return alert(`Ei ${trabalhadorCansado.Nome}, lembra oque aconteceu ontem ? Deixa eu te contar ${d}, teve iniciativa no golpe é ${g}.`)

      }else{
        return alert(`Eu sei ${trabalhadorCansado.Nome}, você normalmente nunca se deixaria ser rebaixado assim porem você tem responsabilidades na sua vida, volte um outro dia.`)
      }
}

irParaCasa =()=> alert('E foi uma boa escolha, amanha tem um longo dia pela frente.')

const start = document.getElementById('beberCaneco');
const close = document.getElementById('irPraCasa');
start.addEventListener('click', realCombat);
close.addEventListener('click', irParaCasa);


