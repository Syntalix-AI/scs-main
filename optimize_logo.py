import base64
import re
import xml.etree.ElementTree as ET
from PIL import Image
import io
import sys

svg_file = r"c:\d DRIVE\consultancy_website\public\syntalix_logo.svg"
out_file = r"c:\d DRIVE\consultancy_website\public\syntalix_logo.webp"

try:
    with open(svg_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Try to find base64 image data in SVG
    match = re.search(r'data:image/(?:png|jpeg|jpg);base64,([A-Za-z0-9+/=]+)', content)
    if match:
        b64_data = match.group(1)
        image_data = base64.b64decode(b64_data)
        img = Image.open(io.BytesIO(image_data))
        
        # Resize to max 600px width for navbar
        max_width = 600
        if img.width > max_width:
            ratio = max_width / float(img.width)
            new_height = int(float(img.height) * ratio)
            img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
        
        # Save as optimized webp
        img.save(out_file, 'WEBP', quality=85)
        print("Successfully converted SVG to optimized WEBP:", out_file)
    else:
        print("Could not find base64 image data in SVG.")
except Exception as e:
    print("Error:", e)
