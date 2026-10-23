Add-Type -AssemblyName System.Drawing

$file01 = "C:\GreenCares\dist\assets\LOGO GCS-01.png"
$file02 = "C:\GreenCares\dist\assets\LOGO GCS-02.png"

$bmp1 = [System.Drawing.Bitmap]::new($file01)
$bmp2 = [System.Drawing.Bitmap]::new($file02)

$ox = 1148
$oy = 1056

$contentLeft = 170
$contentTop = 48
$contentRight = $ox + 2841
$contentBottom = [Math]::Max(2298, $oy + 1242) # = 2298

$contentW = $contentRight - $contentLeft
$contentH = $contentBottom - $contentTop

$brandGreen = [System.Drawing.Color]::FromArgb(255, 0, 146, 69)

# -------------------------------------------------------------------------
# 1. CLEAN HIGH-RES LOGO (House + Wordmark)
# -------------------------------------------------------------------------
$pad = 60
$w1 = $contentW + ($pad * 2)
$h1 = $contentH + ($pad * 2)

$bmpClean = [System.Drawing.Bitmap]::new($w1, $h1, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g1 = [System.Drawing.Graphics]::FromImage($bmpClean)
$g1.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g1.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g1.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g1.Clear([System.Drawing.Color]::Transparent)

$hX = $pad - $contentLeft
$hY = $pad - $contentTop
$g1.DrawImage($bmp2, $hX, $hY, $bmp2.Width, $bmp2.Height)
$g1.DrawImage($bmp1, $hX + $ox, $hY + $oy, $bmp1.Width, $bmp1.Height)
$g1.Dispose()

$cleanOutputs = @(
    "C:\GreenCares\dist\assets\LOGO GCS-OVERLAY.png",
    "C:\GreenCares\src\assets\images\gcs-brand-logo-hd.png"
)
foreach ($out in $cleanOutputs) {
    $bmpClean.Save($out, [System.Drawing.Imaging.ImageFormat]::Png)
    Write-Host "Saved clean HD logo: $out ($w1 x $h1)"
}

# -------------------------------------------------------------------------
# 2. FULL LOCKUP LOGO (With bottom divider line + contact info)
# -------------------------------------------------------------------------
$extraBottom = 230
$w2 = $w1
$h2 = $h1 + $extraBottom

$bmpFull = [System.Drawing.Bitmap]::new($w2, $h2, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g2 = [System.Drawing.Graphics]::FromImage($bmpFull)
$g2.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g2.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g2.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g2.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
$g2.Clear([System.Drawing.Color]::Transparent)

# Draw house and text
$g2.DrawImage($bmp2, $hX, $hY, $bmp2.Width, $bmp2.Height)
$g2.DrawImage($bmp1, $hX + $ox, $hY + $oy, $bmp1.Width, $bmp1.Height)

# Divider line
$pen = [System.Drawing.Pen]::new($brandGreen, 14)
$lineY = $pad + $contentH + 55
$lineX1 = $pad + 5
$lineX2 = $pad + $contentW - 5
$g2.DrawLine($pen, $lineX1, $lineY, $lineX2, $lineY)
$pen.Dispose()

# Helper to draw globe icon
function Draw-Globe($g, $cx, $cy, $radius, $green) {
    $pen = [System.Drawing.Pen]::new($green, 4.5)
    # Outer circle
    $g.DrawEllipse($pen, $cx - $radius, $cy - $radius, $radius * 2, $radius * 2)
    # Equator line
    $g.DrawLine($pen, $cx - $radius, $cy, $cx + $radius, $cy)
    # Latitude lines
    $latOffset = $radius * 0.45
    $latW = [Math]::Sqrt($radius * $radius - $latOffset * $latOffset)
    $g.DrawLine($pen, [float]($cx - $latW), [float]($cy - $latOffset), [float]($cx + $latW), [float]($cy - $latOffset))
    $g.DrawLine($pen, [float]($cx - $latW), [float]($cy + $latOffset), [float]($cx + $latW), [float]($cy + $latOffset))
    # Prime meridian ellipse
    $g.DrawEllipse($pen, [float]($cx - $radius * 0.42), [float]($cy - $radius), [float]($radius * 0.84), [float]($radius * 2))
    # Center vertical line
    $g.DrawLine($pen, $cx, $cy - $radius, $cx, $cy + $radius)
    $pen.Dispose()
}

# Helper to draw telephone handset icon
function Draw-Phone($g, $cx, $cy, $green) {
    $brush = [System.Drawing.SolidBrush]::new($green)
    $pen = [System.Drawing.Pen]::new($green, 4.5)
    $pen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
    $pen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round

    # Handset shape: curved bar with two rounded earpieces
    # Body base
    $g.DrawArc($pen, $cx - 24, $cy - 20, 48, 38, 200, 140)
    # Left receiver
    $g.FillEllipse($brush, $cx - 28, $cy - 24, 18, 22)
    # Right receiver
    $g.FillEllipse($brush, $cx + 10, $cy - 24, 18, 22)
    # Handle connecting bar
    $pen2 = [System.Drawing.Pen]::new($green, 8)
    $pen2.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
    $pen2.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
    $g.DrawArc($pen2, $cx - 18, $cy - 12, 36, 24, 200, 140)

    # Base stand under telephone
    $penBase = [System.Drawing.Pen]::new($green, 3.5)
    $g.DrawArc($penBase, $cx - 16, $cy + 4, 32, 18, 0, 180)
    
    $penBase.Dispose()
    $pen2.Dispose()
    $pen.Dispose()
    $brush.Dispose()
}

$iconY = $lineY + 68
$textBaselineY = $lineY + 38

# Draw Globe icon
$globeRadius = 24
$globeCenterX = $lineX1 + 35
Draw-Globe $g2 $globeCenterX $iconY $globeRadius $brandGreen

# Draw Phone icon
$phoneCenterX = $lineX2 - 620
Draw-Phone $g2 $phoneCenterX $iconY $brandGreen

# Fonts
$font = [System.Drawing.Font]::new("Century Gothic", 50, [System.Drawing.FontStyle]::Regular)
$brush = [System.Drawing.SolidBrush]::new($brandGreen)

# Draw web address
$webStr = "www.greencares.my"
$g2.DrawString($webStr, $font, $brush, $globeCenterX + 35, $textBaselineY)

# Draw phone text
$phoneStr = "+603-7800 0511"
$g2.DrawString($phoneStr, $font, $brush, $phoneCenterX + 38, $textBaselineY)

$font.Dispose()
$brush.Dispose()
$g2.Dispose()

$fullOutputs = @(
    "C:\GreenCares\dist\assets\LOGO GCS-OVERLAY-FULL.png",
    "C:\GreenCares\src\assets\images\gcs-brand-logo-full-hd.png"
)
foreach ($out in $fullOutputs) {
    $bmpFull.Save($out, [System.Drawing.Imaging.ImageFormat]::Png)
    Write-Host "Saved full lockup HD logo: $out ($w2 x $h2)"
}

# -------------------------------------------------------------------------
# 3. WHITE MONOCHROME LOGO (For dark headers / footers)
# -------------------------------------------------------------------------
$bmpWhite = [System.Drawing.Bitmap]::new($w1, $h1, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
for ($y = 0; $y -lt $h1; $y++) {
    for ($x = 0; $x -lt $w1; $x++) {
        $p = $bmpClean.GetPixel($x, $y)
        if ($p.A -gt 0) {
            $bmpWhite.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($p.A, 255, 255, 255))
        }
    }
}
$bmpWhite.Save("C:\GreenCares\src\assets\images\gcs-brand-logo-white-hd.png", [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Saved white mono HD logo: C:\GreenCares\src\assets\images\gcs-brand-logo-white-hd.png"

$bmpWhite.Dispose()
$bmpClean.Dispose()
$bmpFull.Dispose()
$bmp1.Dispose()
$bmp2.Dispose()
