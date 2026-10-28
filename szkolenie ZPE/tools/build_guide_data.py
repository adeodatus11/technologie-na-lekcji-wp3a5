"""Eksportuje wyłącznie dane używane w ilustrowanym przewodniku."""
from pathlib import Path
import json
root=Path(__file__).resolve().parents[1]
data=json.loads((root/'content.json').read_text())
public={key:data[key] for key in ('resources','sources','pdf_guides')}
public['resources']=[r for r in public['resources'] if r['id'] in ('procenty','sarmatyzm','fotosynteza')]+json.loads((root/'zasoby-zawodowe.json').read_text())
public['case_examples']=json.loads((root/'subject-examples.json').read_text())
brand=json.loads((root/'project-branding.json').read_text())
(root/'guide-data.js').write_text('window.WORKSHOP = '+json.dumps(public,ensure_ascii=False)+';\nwindow.PROJECT_BRANDING = '+json.dumps(brand,ensure_ascii=False)+';\n')
