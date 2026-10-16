import os, re

base = r"c:\Users\HP\Desktop\vayuholidays\vayu-holiday"
exts = (".js", ".html")

replacements = [
    # Phone numbers
    (r'\+91[\s\-]*755[\s\-]*492[\s\-]*8899', '+91 888 975 4969'),
    (r'7554928899', '8889754969'),
    (r'\+91[\s\-]*98260[\s\-]*12345', '+91 888 975 4969'),
    (r'919826012345', '918889754969'),
    (r'9826012345', '8889754969'),
    (r'\+91-755-492-8899', '+91-888-975-4969'),
    (r'\+91-98260-12345', '+91-888-975-4969'),
    # Tatkaal fix
    ('Tatkaal', 'Tatkal'),
    # Broken chars (literal "")
    ('\u201c\u201d', '\u2013'),
    ('""', '\u2013'),
    # GST placeholder
    ('GST: 23XXXXX0000X1ZX &nbsp;|&nbsp; IATA Accredited Agent', 'IATA Accredited Agent'),
    # Pincode
    ('462030', '462031'),
    # Address order
    ('Raksha Vihar, Vayu Pride Residency, Airport Road, Bhopal', 'Vayu Pride Residency, Raksha Vihar, Bhopal'),
    ('Raksha Vihar, Vayu Pride Residency, Airport Road', 'Vayu Pride Residency, Raksha Vihar'),
    # Hours broken chars
    ('9 AM \u201c\u201d 9 PM', '9 AM \u2013 9 PM'),
    ('9 AM "" 9 PM', '9 AM \u2013 9 PM'),
]

fixed = []
for root, dirs, files in os.walk(base):
    dirs[:] = [d for d in dirs if d not in ['.git', 'node_modules']]
    for fname in files:
        if any(fname.endswith(e) for e in exts):
            path = os.path.join(root, fname)
            try:
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                original = content
                for old, new in replacements:
                    content = re.sub(old, new, content) if old.startswith('\\') or '\\s' in old or '\\-' in old else content.replace(old, new)
                if content != original:
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(content)
                    fixed.append(fname)
            except Exception as e:
                print(f"ERROR {fname}: {e}")

print("Fixed:", fixed)
print("DONE")
