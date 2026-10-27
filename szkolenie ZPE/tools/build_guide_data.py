"""Eksportuje wyłącznie dane używane w ilustrowanym przewodniku."""
from pathlib import Path
import json
root=Path(__file__).resolve().parents[1]
data=json.loads((root/'content.json').read_text())
public={key:data[key] for key in ('resources','sources','pdf_guides')}
(root/'guide-data.js').write_text('window.WORKSHOP = '+json.dumps(public,ensure_ascii=False)+';\n')
