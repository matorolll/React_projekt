# Projekt FrontEnd

Użyte technologię:
- React
- Bootstrap
- Firebase

Tematyka projektu: Serwis samochodowy

Projekt stworzony za pomocą: [Create React App](https://github.com/facebook/create-react-app).

## Struktura

Projekt Ten posiada dwa branche
- gh-pages (domyślny): Jest to branch stworzony do użycia w płatnym hostingu git pages.\
zawiera przebudowaną strukturę projektu (za biedny jestem jak coś)
- master: folder z kodem źródłowym projektu na którym dochodzi do większość zmian, (na ten moment to główny folder roboczy)



## Aby pobrać (najszybsza metoda)

- Tworzymy nowy folder
- Uruchamiamy w nim Git Bash
- Wpisujemy:
```
git clone -b master https://github.com/matorolll/React_projekt.git
cd React_projekt
npm install
npm start
```
Metoda ta pobiera brancha "master" i tworzy kopie naszej aplikacji.\
Po wprowadzeniu zmian możemy je przesłać tak jak opisano niżej.


## Dostępne Skrypty
Można użyć:

### `npm start`

Uruchamia aplikację w trybie deweloperskim.\
Pod adresem [http://localhost:3000](http://localhost:3000)

### `npm test`
Może kiedyś do zaimplementowania [Testy](https://facebook.github.io/create-react-app/docs/running-tests)

### `npm run build`

Przebudowywuje strukture strony do folderu `build`.\
Więcej info [deploy](https://facebook.github.io/create-react-app/docs/deployment)

## Aby przesłać kod źródłowy strony uruchamiany nastepujące komendy, ten zostanie przesłany do master-branch

```
$ git add .
$ git commit -m "Czytelny którki komentarz"
$ git push origin master
```

## Aby przesłać stronę w postaci gh-pages 
Kiedyś tam do rozbudowy
 [tut1](https://github.com/gitname/react-gh-pages/tree/master)
 [tut2](https://www.c-sharpcorner.com/article/how-to-deploy-react-application-on-github-pages/)
 
 
## TO-DO

- Podstawowy zarys strony
- Podstawowy Routing strony
- Podział strony na podstrony
- Rozbudowa podstron
- Dopracowanie stylu strony głównej
- Dopracowanie stylu podstrony Aukcji
- Dopracowanie stylu podstrony Kontakt
- Dopracowanie stylu podstrony Archiwum
- Stworzenie Szybkiego wyszukiwania po kategoriach
- Stworzenie zarysu Systemu rejestracji i logowania

Dodanie Bazy Danych

- Podłączenie bazy danych FIREBASE
- System logownaia
- System Rejestracji
- Stworzenie prywatnego profilu
- Stworzenie prywatnego koszyka
- Stworzenie prywatnnej historii zakupów
- Dodanie statusu użytkownika na stronach
- Dodanie opcji dodania aukcji
- Dodanie opcji usuwania aukcji
- Dodanie opcji wyświetlania aukcji (więcej info w podstronie albo popup)
- Dodanie filtrowania aukcji po typie nadwozia
- Dodanie filtrowania aukcji po typie paliwa
- Dodanie wyszukiwania po słowach

Zarysy na przyszłośc

- Dodanie systemu dodawania automatycznie aukcji w zależność od daty
- Aktualizacja aukcji (po danym czasie wygasają i przechodzą do podstrony Archiwum)
- Dodanie systemu giełdowego (obstawianie i licytację na dany obiekt) 





