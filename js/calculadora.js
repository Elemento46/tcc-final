document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-calculadora');
  const resultadoDiv = document.getElementById('resultado');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const energia = parseFloat(document.getElementById('energia').value) || 0;
    const transporte = parseFloat(document.getElementById('transporte').value) || 0;
    const aviao = parseFloat(document.getElementById('aviao').value) || 0;
    const gas = parseFloat(document.getElementById('gas').value) || 0;
    const residuos = parseFloat(document.getElementById('residuos').value) || 0;

    const fatorEnergia = 0.084;
    const fatorTransporte = 0.192;
    const fatorAviao = 0.255;
    const fatorGas = 2.9;
    const fatorResiduos = 0.75;

    const emissaoEnergia = energia * fatorEnergia;
    const emissaoTransporte = transporte * fatorTransporte;
    const emissaoAviao = aviao * fatorAviao;
    const emissaoGas = gas * fatorGas;
    const emissaoResiduos = residuos * fatorResiduos;

    const emissaoTotal = emissaoEnergia + emissaoTransporte + emissaoAviao + emissaoGas + emissaoResiduos;
    const toneladasCO2 = emissaoTotal / 1000;
    const creditosNecessarios = Math.ceil(toneladasCO2);

    resultadoDiv.innerHTML = `
      <h3>Resultado da sua pegada de carbono:</h3>
      <p>Energia: <strong>${emissaoEnergia.toFixed(2)} kg CO₂</strong></p>
      <p>Transporte terrestre: <strong>${emissaoTransporte.toFixed(2)} kg CO₂</strong></p>
      <p>Viagens de avião: <strong>${emissaoAviao.toFixed(2)} kg CO₂</strong></p>
      <p>Gás de cozinha: <strong>${emissaoGas.toFixed(2)} kg CO₂</strong></p>
      <p>Resíduos: <strong>${emissaoResiduos.toFixed(2)} kg CO₂</strong></p>
      <hr />
      <p><strong>Emissão total: ${emissaoTotal.toFixed(2)} kg CO₂</strong></p>
      <p><strong>Estimativa de créditos de carbono necessários: ${creditosNecessarios} créditos</strong></p>
    `;
  });
});
