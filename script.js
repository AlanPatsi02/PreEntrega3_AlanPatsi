    alert("¡Bienvenido, con este simulador vas a poder calcular tus gastos!");

    let sueldo = parseFloat(prompt("¿Cuál es tu sueldo mensual?"));
while (isNaN(sueldo) || sueldo <= 0) {
    alert("Por favor, ingresa un sueldo válido.");
    sueldo = parseFloat(prompt("¿Cuál es tu sueldo mensual?"));
}

let alquiler = parseFloat(prompt("¿Cuánto pagas de alquiler?"));
while (isNaN(alquiler) || alquiler < 0) {
    alert("Por favor, ingresa un monto de alquiler válido.");
    alquiler = parseFloat(prompt("¿Cuánto pagas de alquiler?"));
}

let comida = parseFloat(prompt("¿Cuánto gastas en alimentos?"));
while (isNaN(comida) || comida < 0) {
    alert("Por favor, ingresa un gasto de comida válido.");
    comida = parseFloat(prompt("¿Cuánto gastas en alimentos?"));
}

let transporte = parseFloat(prompt("¿Cuánto gastas en transporte?"));
while (isNaN(transporte) || transporte < 0) {
    alert("Por favor, ingresa un gasto de transporte válido.");
    transporte = parseFloat(prompt("¿Cuánto gastas en transporte?"));
}
    // Usamos array
    const gastos = [
        { descripcion: "alquiler", monto: alquiler },
        { descripcion: "comida", monto: comida },
        { descripcion: "transporte", monto: transporte },
    ];
    
    // calculamos gastos totales
    function calcularTotalGastos() {
        return gastos.reduce((total, gasto) => total + gasto.monto, 0);
    }
    
    // calculamos gastos restante
    function calcularSaldoRestante(sueldo, totalGastos) {
        return sueldo - totalGastos;
    }
    
    // mostramos los resultados
    function mostrarResultados() {
        const totalGastos = calcularTotalGastos();
        const saldoRestante = calcularSaldoRestante(sueldo, totalGastos);
        
        console.log("Resumen de gastos:");
        gastos.forEach(gasto => console.log(`Categoría: ${gasto.descripcion}, Monto: ${gasto.monto}`));
        console.log(`Total de gastos: ${totalGastos}`);
        console.log(`Saldo restante: ${saldoRestante}`);
        
        alert(`Resumen de gastos:\n${gastos.map(gasto => `Categoría: ${gasto.descripcion}, Monto: ${gasto.monto}`).join('\n')}\n\nTotal de gastos: ${totalGastos}\nSaldo restante: ${saldoRestante}`);
    }

    mostrarResultados();