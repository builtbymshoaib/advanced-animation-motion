from pathlib import Path
import re
ROOT = Path(__file__).resolve().parents[1]
def validate():
    s = (ROOT / "SKILL.md").read_text(encoding="utf-8")
    m = re.match(r"^---\nname: ([a-z0-9-]+)\ndescription: ([^\n]+)\n---\n", s)
    assert m and m[1] == ROOT.name and len(m[1]) <= 64 and len(m[2]) <= 1024
    assert len(list((ROOT / "references").glob("*.md"))) == 18
    assert len(list((ROOT / "assets/components").glob("*.tsx"))) == 8
    for p in ROOT.rglob("*.md"):
        for link in re.findall(r"\]\(([^)]+)\)", p.read_text(encoding="utf-8")):
            if link.startswith(("https://", "http://", "#")): continue
            target = (p.parent / link.split("#")[0]).resolve()
            assert target.is_relative_to(ROOT) and target.exists(), f"Bad link {p}: {link}"
    print("PASS: frontmatter, 17 modules, 8 components, local links")
if __name__ == "__main__": validate()
