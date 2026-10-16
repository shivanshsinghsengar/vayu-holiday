#!/usr/bin/env python3
import os

BASE = r'c:\Users\HP\Desktop\vayuholidays\vayu-holiday'

REPLACEMENTS = [
    ("+91 755 492 8899", "+91 888 975 4969"),
    ("+91-755-492-8899", "+91-888-975-4969"),
    ("7554928899", "8889754969"),
    ("+91 98260 12345", "+91 888 975 4969"),
    ("+91-98260-12345", "+91-888-975-4969"),
    ("919826012345", "918889754969"),
    ("9826012345", "8889754969"),
    ("Tatkaal", "Tatkal"),
    ("462030", "462031"),
    ("Raksha Vihar, Vayu Pride Residency, Airport Road, Bhopal", "Vayu Pride Residency, Raksha Vihar, Bhopal"),
    ("Raksha Vihar, Vayu Pride Residency, Airport Road", "Vayu Pride Residency, Raksha Vihar"),
    ("Raksha Vihar, Airport Road, Bhopal", "Vayu Pride Residency, Raksha Vihar, Bhopal"),
    ("GST: 23XXXXX0000X1ZX &nbsp;|&nbsp; IATA Accredited Agent", "IATA Accredited Agent"),
]

FILES = [
    'services/visa/index.html',
    'services/train/index.html',
    'services/flights/index.html',
    'services/insurance/index.html',
    'services/hotels/index.html',
    'services/forex/index.html',
    'services/bus/index.html',
    'honeymoon/index.html',
    'mice/index.html',
    'blog/schengen-visa-guide-india-2026/index.html',
    'blog/kashmir-travel-guide-2026/index.html',
    'blog/bali-private-pool-villas-guide/index.html',
    'index.html',
    '404.html',
    'domestic/index.html',
    'international/index.html',
    'group-tours/index.html',
    'packages/index.html',
    'js/app.js',
    'js/views/home.js',
    'js/views/contact.js',
    'js/views/services.js',
    'js/views/about.js',
    'js/components.js',
    'js/data.js',
]

for rel_path in FILES:
    full_path = os.path.join(BASE, rel_path)
    if not os.path.exists(full_path):
        print(f'SKIP (not found): {rel_path}')
        continue
    try:
        with open(full_path, 'r', encoding='utf-8', errors='replace') as f:
            content = f.read()
        original = content
        for old, new in REPLACEMENTS:
            content = content.replace(old, new)
        if content != original:
            with open(full_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f'UPDATED: {rel_path}')
        else:
            print(f'NO CHANGE: {rel_path}')
    except Exception as e:
        print(f'ERROR {rel_path}: {e}')

print('Done.')
