# Public Assets Directory

This directory contains static assets that are served directly by the web server.

## Current Configuration

The portfolio is currently configured to use Google Drive for resume hosting:
- **Resume URL**: `https://drive.google.com/uc?export=download&id=1crrOHNxQ95VJ9fNAL4X45xM8kiiXF2zw`
- **Location**: `/components/Contact.tsx` line 308

## File Structure

```
public/
├── README.md          # This file
└── (static assets)    # Any images, icons, or other static files
```

## Alternative Hosting Options

If you want to change the resume hosting:

### Local Hosting
1. Add your resume as `resume.pdf` to this directory
2. Update the link in Contact.tsx to `href="/resume.pdf"`
3. Remove `target="_blank"` and `rel="noopener noreferrer"`

### Other Cloud Services
1. Upload to your preferred service (Dropbox, OneDrive, etc.)
2. Get the direct download link
3. Update the href in Contact.tsx

## Security Note

Google Drive hosting is currently used for better reliability and to avoid including sensitive documents in the repository.