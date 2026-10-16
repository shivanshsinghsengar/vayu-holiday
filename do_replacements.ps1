$base = 'c:\Users\HP\Desktop\vayuholidays\vayu-holiday'

$files = @(
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
    'js/data.js'
)

$replacements = @(
    @('+91 755 492 8899', '+91 888 975 4969'),
    @('+91-755-492-8899', '+91-888-975-4969'),
    @('7554928899', '8889754969'),
    @('+91 98260 12345', '+91 888 975 4969'),
    @('+91-98260-12345', '+91-888-975-4969'),
    @('919826012345', '918889754969'),
    @('9826012345', '8889754969'),
    @('Tatkaal', 'Tatkal'),
    @('462030', '462031'),
    @('Raksha Vihar, Vayu Pride Residency, Airport Road, Bhopal', 'Vayu Pride Residency, Raksha Vihar, Bhopal'),
    @('Raksha Vihar, Vayu Pride Residency, Airport Road', 'Vayu Pride Residency, Raksha Vihar'),
    @('Raksha Vihar, Airport Road, Bhopal', 'Vayu Pride Residency, Raksha Vihar, Bhopal'),
    @('GST: 23XXXXX0000X1ZX &nbsp;|&nbsp; IATA Accredited Agent', 'IATA Accredited Agent')
)

foreach ($rel in $files) {
    $path = Join-Path $base ($rel -replace '/', '\')
    if (-not (Test-Path $path)) {
        Write-Host "SKIP (not found): $rel"
        continue
    }
    $content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
    $original = $content
    foreach ($pair in $replacements) {
        $content = $content.Replace($pair[0], $pair[1])
    }
    if ($content -ne $original) {
        [System.IO.File]::WriteAllText($path, $content, [System.Text.Encoding]::UTF8)
        Write-Host "UPDATED: $rel"
    } else {
        Write-Host "NO CHANGE: $rel"
    }
}
Write-Host "Done."
