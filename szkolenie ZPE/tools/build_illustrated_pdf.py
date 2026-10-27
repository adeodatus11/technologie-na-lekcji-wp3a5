"""Składa pełną treść z przeglądarki z okładką i stroną zamykającą."""
import sys
from pdf_publication import assemble

if __name__ == '__main__':
    if len(sys.argv)!=2:
        raise SystemExit('Uruchom python3 tools/build_pdfs.py, aby przygotować pełną treść strony.')
    assemble(sys.argv[1])
