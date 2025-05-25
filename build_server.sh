#!/bin/bash
set -e

echo "Minimal build: Symulacja kompilacji lub lintowania..."
# Ten skrypt może tworzyć pliki lokalnie, np.
# mkdir -p temp_build_output
# echo "To jest tymczasowy wynik budowania" > temp_build_output/output.txt
# echo "Plik output.txt został stworzony w temp_build_output/"
# Pamiętaj, że bez artefaktów, ten plik nie będzie dostępny w kolejnym jobie ('test').
echo "Build zakończony."
