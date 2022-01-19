

exports.generateMainPageBody = (app, univerity, author, idx) => {
  return `
      <center style="background-color:grey">
        <h1>Strona główna</h1>
        <img height="10%" width="10%" src='https://pcz.pl/fcp/aGBUKOQtTKlQhbx08SlkTUQdKUWRuHQwFDBoIVURNFDgPW1ZpCFghUHcKVigEQR1BXQEsKTwdAQsKJBVYCRlYdxdFDy5IGzpEMEIrMQxBC0EGRUtwf08Q/_users/code_YCFYXIghYYUQ6UhciCQgDI0QRCWY8AQ/kamila/logo/logo_paczka/logo_pl/pcz_logo_piol_pion_kolor.png'>
        <h1>PCZ</h1>
        <h1>Mateusz Zawadzki</h1>
        <h2>Prosta aplikacji w Node.js z wykorzytaniem Express.js i bazy MongoDB</h2>
        <h3>W bazie danych stworzyłem następujące kolekcje:</h3>
        ${collections}

        <h3><a href="/people">Wszystkie osoby z kolekcji OSOBY</a></h3>
        <h3><a href="/vehicles">Wszystkie pojazdy z kolekcji "vehicle"</a></h3>
        <h3><a href="/year_from/2000">Pojazdy wyprodukowane po roku 2000</a></h3>
        <h3><a href="/vehicles/yellow/van">Pojazdy o nadwoziu van w kolorze żółtym</a></h3>
        <h3><a href="/total_mileage">Łączny przebieg wszystkich pojazdów w danym roczniku</a></h3>
        <h3><a href="/change_address">[GET]Formularz pozwalający na zmianę adresu danej osoby</a></h3>
        <h3><a href="/delete_partner">[POST]Formularz pozwalający na usunięcie pola "partner" u konkretnej osoby</a></h3>
        <h3><a href="/delete_vehicle">[POST]Formularz pozwalający na usunięcie konkretnego pojazdu z kolekcji</a></h3>
      </center>`;
};
