#!/bin-bash
set -e

echo "Minimal test: Symulacja uruchamiania testów..."
# Ten skrypt działa na świeżo pobranym kodzie źródłowym.
# Można sprawdzić istnienie jakiegoś pliku z repozytorium:
if [ -f README.md ]; then
  echo "Test: Plik README.md istnieje."
else
  echo "Test: Błąd - Plik README.md nie istnieje!"
  exit 1
fi
echo "Testy zakończone pomyślnie."
