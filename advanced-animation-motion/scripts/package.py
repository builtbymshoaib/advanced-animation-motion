from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
from validate import validate, ROOT
validate()
output = ROOT.with_suffix(".zip")
with ZipFile(output, "w", ZIP_DEFLATED) as z:
    for p in sorted(ROOT.rglob("*")):
        if p.is_file() and not p.is_symlink() and not any(x in {".git","__pycache__","node_modules",".next"} or x.startswith(".env") for x in p.relative_to(ROOT).parts) and p.suffix not in {".zip",".pyc"}:
            z.write(p, p.relative_to(ROOT.parent))
with ZipFile(output) as z:
    assert z.testzip() is None
    print(f"PASS: {len(z.namelist())} files, ZIP integrity: {output}")
