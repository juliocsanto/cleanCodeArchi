function calculateDigitVerifier(nineFirstDigits: number[]): number{
    let digitVerifier = 0
    let counter = nineFirstDigits.length + 1    
    let sum = 0
   
    nineFirstDigits.forEach((number) => {
        sum = sum + number * counter               
        counter -= 1
    })

    if(sum % 11 >= 2){
        digitVerifier = 11 - (sum % 11) 
    }

    return digitVerifier
} 

export default function isCPFValid(str: string): boolean | undefined {
    if(str == null || str == undefined) return

    const cpf = str
        .replace('.','')
        .replace('.','')
        .replace('-','')
        .replace(" ","");  
    
    if(cpf.length != 11 || cpf.search(/\D+/) >= 0) return 

    const nineFirstDigits = [ ...cpf.slice(0, 9) ].map(num => {
        return parseInt(num)
    })

    const firstDigitVerifier = calculateDigitVerifier( nineFirstDigits )   
    const secondDigitVerifier = calculateDigitVerifier( [ ...nineFirstDigits, firstDigitVerifier ] )

    return (parseInt(cpf.slice(9,10)) == firstDigitVerifier && secondDigitVerifier == parseInt(cpf.slice(10,11)))
}

// console.log(validate("111.111.111-11"));
// console.log(validate("123.456.789-99"));
// console.log(validate("935.411.347-80"));