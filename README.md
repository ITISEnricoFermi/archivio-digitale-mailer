<h1 align="center">
  <img src="https://raw.githubusercontent.com/Richard1984/archivio-fermi-client/81041b2932b032ead156777a6927efe1925b52ca/static/shortcut/safari-pinned-tab.svg?sanitize=true" height="100"><br/>
  📚 Archivio Digitale 📚
</h1>
<p align="center">
  Progetto Archivio Digitale sviluppato per l'ITIS Enrico Fermi.
</p>

## Getting Started

La funzione `mailer` restituisce la mail in formato HTML.

```js
const mailer = require('archivio-fermi-mail')

mailer('Questo è il contenuto del messaggio.')
  .then(mail => {
    console.log(mail)
  })
  .catch(e => {
    console.log(e.message)
  })
```

## Authors

* **Riccardo Sangiorgio** - [Richard1984](https://github.com/Richard1984/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
