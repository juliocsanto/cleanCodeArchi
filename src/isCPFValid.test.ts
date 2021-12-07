import isCPFValid from './isCPFValid'

test("Valida se um CPF válido é dado como válido", function () {
    const cpf = '111.444.777-35';  
    expect(isCPFValid(cpf)).toBe(true);
});

test("Valida se um CPF inválido é dado como inválido", function () {
    const cpf = '111.444.777-05';
    expect(isCPFValid(cpf)).not.toBe(true);
});

test("Valida se recebeu CPF em branco/nulo", function () {
    const cpf = '';  
    expect(isCPFValid(cpf)).not.toBe(true);
});

test("Valida o tamanho do valor passado como CPF", function () {
    const cpf = '423';  
    expect(isCPFValid(cpf)).not.toBe(true);
});

test("Valida se CPF não possui letras", function () {
    const cpf = '4AA54A0A';  
    expect(isCPFValid(cpf)).not.toBe(true);
});