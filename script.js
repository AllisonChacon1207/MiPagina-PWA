if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(reg => console.log('Registro de SW exitoso', reg))
    .catch(err => console.warn('Error al tratar de registrar el sw', err))
}

document.getElementById('writeButton').addEventListener('click', async () => {
  if (!('NDEFReader' in window)) {
      alert('Web NFC no es compatible con este navegador.');
      return;
  }

  try {
      const ndef = new NDEFReader();
      await ndef.write({
          records: [
              { recordType: "text", data: "Hola, NFC!" }
          ]
      });
      alert('Datos escritos correctamente en el tag NFC.');
  } catch (error) {
      alert('Error al escribir en el tag NFC: ' + error.message);
  }
});