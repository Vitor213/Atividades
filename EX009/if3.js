var idade = 18

console.log("Você tem " + idade + " anos. ")

if (idade < 16){
    console.log('Você não vota amigo. ')
} else{ 
    if (idade >= 16 && idade < 18 || idade >= 67) 
    console.log('Você pode votar, mas não é obrigado. ')
}   if (idade >=18 && idade < 67){
    console.log('Voto obrigatorio. ')
}
