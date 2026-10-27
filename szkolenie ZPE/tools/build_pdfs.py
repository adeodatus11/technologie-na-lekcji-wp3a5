"""Buduje ilustrowany PDF z aktualnego widoku przewodnika."""
from pathlib import Path
import subprocess

if __name__ == '__main__':
    subprocess.run(['node', str(Path(__file__).with_name('check_guide.cjs')), '--pdf'], check=True)
